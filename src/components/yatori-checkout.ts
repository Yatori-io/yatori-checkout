import { LitElement, html, css } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import QRCodeStyling from 'qr-code-styling'
// Import Yatori icon - will be bundled inline as base64 (not tamperable)
import yatoriLogo from '../assets/yatori-logo-new.png'

@customElement('yatori-checkout')
export class YatoriCheckout extends LitElement {
  private static readonly NOTE_MAX_LENGTH = 50
  private static readonly SOLANA_PLACE_WALLET = 'AL3iHPM8s9g4epZJXm8RkBuACZNh1JVWxA5BmsSiMKM5'

  @property({ type: String }) wallet = ''
  @property({ type: Number }) amount = 0
  /** Payment note for mobile deeplink/QR (`type=note`). Letters, numbers, and spaces only; max 50 chars. Empty defaults to `checkout`. */
  @property({ type: String }) note = 'checkout'
  @property({
    type: Boolean,
    converter: { fromAttribute: (value) => value === null ? true : value !== 'false' }
  })
  useDialog = true

  @state() qrCodeData: string = ''
  @state() qrUrl: string = ''
  @state() yid: string = ''
  @state() confirmed = false
  @state() isMobile = false
  @state() connected = false
  @state() amountError: string = ''
  @state() dialogOpen = false
  @state() isConfirming = false
  @state() confirmingError: string = ''

  private hasInitialized = false
  private wsConnection: WebSocket | null = null
  private confirmingTimeoutId: ReturnType<typeof setTimeout> | null = null
  private static blackLogoPromise: Promise<string> | null = null

  isMobileDevice(): boolean {
    return /android|iphone|ipad|ipod/i.test(navigator.userAgent)
  }

  validateAmount(): boolean {
    // Check decimal places and amount range
    const decimalRegex = /^\d+(\.\d{1,2})?$/

    if (!decimalRegex.test(this.amount.toString())) {
      this.amountError = 'Amount must have no more than two decimal places'
      return false
    }

    if (this.amount > 9999.99) {
      this.amountError = 'Amount cannot exceed $9,999.99'
      return false
    }
    if (this.amount < 0.01) {
      this.amountError = 'Amount must at least $0.01'
      return false
    }
    this.amountError = ''
    return true
  }

  static styles = css`
  :host {
    display: block;
    width: 100%;
    min-height: var(--yp-button-height, 48px);
    padding: 0;
    text-align: center;
    font-family: sans-serif;
    box-sizing: border-box;
    color: inherit;
  }

  :host > div {
    color: inherit;
    width: 100%;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 12px auto;
  }

  .qr-stack {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    flex-shrink: 0;
    width: fit-content;
  }

  .qr-wrapper {
    opacity: 1;
    transition: opacity 0.5s ease;
    background: #c1ff72;
    border-radius: 16px;
    padding: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    flex-shrink: 0;
    width: 278px;
    height: 278px;
    box-shadow:
      0 3px 6px rgba(0, 0, 0, 0.12),
      0 10px 22px rgba(0, 0, 0, 0.2),
      0 18px 36px rgba(0, 0, 0, 0.1);
  }

  .qr-card {
    display: block;
    border-radius: 12px;
    background: #c1ff72;
    overflow: hidden;
    line-height: 0;
    width: 250px;
    height: 250px;
    flex-shrink: 0;
  }

  .qr-card img {
    margin: 0;
    display: block;
    width: 250px;
    height: 250px;
    max-width: none;
    min-width: 250px;
    min-height: 250px;
    object-fit: contain;
  }

  .qr-wrapper.fade-out {
    opacity: 0;
  }

  .flat-qr {
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-radius: 20px;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  }

  .amount-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    /* Solid soft primary tint — readable over light or dark host backgrounds */
    background: #e8eaff;
    border: none;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    padding: 10px 22px;
    color: #191818;
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  .flat-qr .dialog-amount {
    color: #e8e8e8;
    transition: color 0.7s ease;
  }

  .flat-qr .dialog-wallet-vertical,
  .flat-qr .dialog-wallet-vertical-right,
  .flat-qr .dialog-wallet-bottom {
    color: #d4d4d4;
    transition: color 0.7s ease;
  }

  /* Wave: starts later, slower; bottom → left → right → top */
  .flat-qr.flat-confirmed .dialog-wallet-bottom {
    color: #646CFF;
    transition-delay: 0.4s;
  }
  .flat-qr.flat-confirmed .dialog-wallet-vertical {
    color: #646CFF;
    transition-delay: 0.55s;
  }
  .flat-qr.flat-confirmed .dialog-wallet-vertical-right {
    color: #646CFF;
    transition-delay: 0.7s;
  }
  .flat-qr.flat-confirmed .dialog-amount {
    color: #646CFF;
    transition-delay: 0.85s;
  }

  .dialog-amount {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: #1c1c1c;
    margin-bottom: 12px;
  }

  .dialog-qr-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .dialog-wallet-vertical {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
    font-family: ui-monospace, 'SF Mono', 'Cascadia Code', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    color: #4a5568;
    user-select: none;
  }

  .dialog-wallet-vertical-right {
    writing-mode: vertical-lr;
    text-orientation: mixed;
    font-family: ui-monospace, 'SF Mono', 'Cascadia Code', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    color: #4a5568;
    user-select: none;
  }

  .dialog-wallet-bottom {
    text-align: center;
    margin-top: 12px;
    transform: rotate(180deg);
    font-family: ui-monospace, 'SF Mono', 'Cascadia Code', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    color: #4a5568;
    user-select: none;
  }

  .confirmed {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border-radius: 16px;
    padding: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    min-width: 160px;
    min-height: 180px;
    gap: 12px;
  }

  .flat-confirmed-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 262px;
    height: 262px;
    flex-shrink: 0;
    box-sizing: border-box;
  }

  .flat-confirmed-inner svg {
    width: 48px;
    height: 48px;
  }

  .confirmed svg {
    width: 48px;
    height: 48px;
  }

  .confirmed-text {
    font-size: 12px;
    color: #646CFF;
    font-weight: 600;
  }

  @keyframes draw-circle {
    0% {
      stroke-dasharray: 251 251;
      stroke-dashoffset: 251;
      opacity: 1;
    }
    100% {
      stroke-dasharray: 251 251;
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }

  @keyframes draw-check {
    0% {
      stroke-dashoffset: 55;
      opacity: 0;
    }
    100% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }

  .animate-draw-circle {
    stroke-dasharray: 251 251;
    stroke-dashoffset: 251;
    animation: draw-circle 0.8s ease-out forwards;
    transform-origin: center;
    will-change: stroke-dashoffset;
  }

  .checkmark-path {
    stroke-dasharray: 55;
    stroke-dashoffset: 55;
    opacity: 0;
    animation: draw-check 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards;
    transform-origin: center;
    will-change: stroke-dashoffset, opacity;
  }

  .spinner {
    margin: 24px auto;
    width: 40px;
    height: 40px;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .confirming-spinner-wrapper {
    width: 262px;
    height: 262px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-sizing: border-box;
  }

  .confirming-spinner {
    width: 48px;
    height: 48px;
    border: 4px solid rgba(100, 108, 255, 0.25);
    border-top-color: #646CFF;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  .confirming-error {
    width: 262px;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 16px;
    box-sizing: border-box;
    color: #646CFF;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.4;
  }

.deeplink-btn {
  background: #c1ff72;
  color: #1c1c1c;
  border: var(--yp-button-border-width, 1px) solid var(--yp-button-border-color, black);
  border-radius: var(--yp-button-border-radius, 0px);
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  letter-spacing: 0.15em;
  padding: 10px 20px;
  width: max(var(--yp-button-width, 100%), 200px);
  min-width: 200px;
  height: max(var(--yp-button-height, 48px), 44px);
  min-height: 44px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.25s ease;
  margin: 0;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: nowrap;
  white-space: nowrap;
}

.deeplink-btn img {
  width: 18px;
  height: 18px;
  margin: 0;
  display: block;
  flex-shrink: 0;
}

.deeplink-btn:hover:not(:disabled) {
  background: #b3f060;
}

.deeplink-btn:active:not(:disabled) {
  background: #a8e855;
}

.deeplink-btn:disabled {
  cursor: not-allowed;
  opacity: 1;
}

.deeplink-btn svg {
  display: block;
  flex-shrink: 0;
}

.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.dialog-content {
  background: white;
  border-radius: 20px;
  padding: 24px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
  position: relative;
  animation: slideUp 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.dialog-close-btn {
  background: #1c1c1c;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 24px;
  cursor: pointer;
  margin-top: 16px;
  width: 100%;
  transition: background 0.2s ease;
}

.dialog-close-btn:hover {
  background: #333333;
}

.dialog-close-btn:active {
  background: #1c1c1c;
}

.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  gap: 12px;
}

.error-icon {
  width: 48px;
  height: 48px;
  color: #ef4444;
}

.error-message {
  color: #ef4444;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}

.error-details {
  color: #6b7280;
  font-size: 14px;
  text-align: center;
  max-width: 280px;
}
  `

  async firstUpdated() {
    this.isMobile = this.isMobileDevice()

    // Validate amount before generating QR code
    if (!this.validateAmount()) {
      console.error('yatori-checkout --> Amount must be between 9999.99 and 0.01 & must only have two decimal places for USD format!')
      return // Don't generate QR if amount is invalid
    }

    await this.generateQRCode()
    this.hasInitialized = true

    // Start WebSocket if QR is directly shown (not using dialog and not mobile)
    if (!this.useDialog && !this.isMobile) {
      this.startWebSocketConnection()
    }

    // Add ESC key listener to close dialog
    document.addEventListener('keydown', this.handleKeyDown)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    document.removeEventListener('keydown', this.handleKeyDown)

    // Close WebSocket connection when component is removed
    if (this.wsConnection) {
      this.wsConnection.close()
      this.wsConnection = null
    }
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this.dialogOpen) {
      this.dialogOpen = false
    }
  }

  // Watch for amount changes AFTER initial render
  updated(changedProperties: Map<string, any>) {
    // Only regenerate if amount changes AFTER the component has initialized
    if (this.hasInitialized && changedProperties.has('amount')) {
      if (!this.validateAmount()) {
        this.connected = false
        this.confirmed = false
      } else if (this.amountError === '') {
        // If amount becomes valid, regenerate QR
        this.generateQRCode()
      }
    }

    if (this.hasInitialized && changedProperties.has('note') && this.amountError === '') {
      this.generateQRCode()
    }

    // Start WebSocket when dialog opens
    if (changedProperties.has('dialogOpen') && this.dialogOpen && !this.isMobile) {
      this.startWebSocketConnection()
    }

    // Start WebSocket when QR is directly shown (useDialog=false)
    if (changedProperties.has('useDialog') && !this.useDialog && !this.isMobile && this.hasInitialized) {
      this.startWebSocketConnection()
    }
  }

  private resolveNote(): string {
    const trimmed = this.note?.trim() ?? ''
    const sanitized = trimmed
      .replace(/[^a-zA-Z0-9 ]+/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, YatoriCheckout.NOTE_MAX_LENGTH)
      .trim()
    return sanitized || 'checkout'
  }

  private walletDisplayLabel(): string {
    if (this.wallet === YatoriCheckout.SOLANA_PLACE_WALLET) {
      return 'Solana Place'
    }
    return `${this.wallet.slice(0, 4)}...${this.wallet.slice(-4)}`
  }

  private formatAmountPill(): string | null {
    const amount = Number(this.amount)
    if (!Number.isFinite(amount)) {
      return null
    }
    const floored = Math.floor(amount * 100) / 100
    return `$${floored.toFixed(2)}`
  }

  private renderAmountPill() {
    const label = this.formatAmountPill()
    if (label === null) {
      return ''
    }
    return html`<div class="amount-pill">${label}</div>`
  }

  private renderQrContent() {
    if (this.isConfirming || this.confirmingError) {
      if (this.confirmingError) {
        return html`<div class="confirming-spinner-wrapper"><div class="confirming-error">${this.confirmingError}</div></div>`
      }
      return html`<div class="confirming-spinner-wrapper"><div class="confirming-spinner"></div></div>`
    }

    return html`
      <div class="qr-wrapper">
        ${this.qrCodeData
          ? html`<div class="qr-card"><img src="${this.qrCodeData}" alt="Yatori QR Code" /></div>`
          : html`<p>Loading QR…</p>`}
      </div>
    `
  }

  private renderQrStack() {
    return html`
      <div class="qr-stack">
        ${this.renderAmountPill()}
        ${this.renderQrContent()}
      </div>
    `
  }

  private getBlackLogoDataUrl(): Promise<string> {
    if (!YatoriCheckout.blackLogoPromise) {
      YatoriCheckout.blackLogoPromise = new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => {
          const canvas = document.createElement('canvas')
          canvas.width = img.width
          canvas.height = img.height
          const ctx = canvas.getContext('2d')
          if (!ctx) {
            reject(new Error('Could not create logo canvas context'))
            return
          }
          ctx.filter = 'brightness(0)'
          ctx.drawImage(img, 0, 0)
          resolve(canvas.toDataURL('image/png'))
        }
        img.onerror = () => reject(new Error('Could not load Yatori logo'))
        img.src = yatoriLogo
      })
    }
    return YatoriCheckout.blackLogoPromise
  }

  async generateQRCode() {
    const generateShortId = (): string => {
      const timestamp = Date.now().toString().slice(-4)
      const random = Math.random().toString(36).substring(2, 6)
      return `${timestamp}${random}`
    }
    this.yid = generateShortId()
    console.log('YATORI YID CREATED')

    const note = encodeURIComponent(this.resolveNote())
    const snakeEater = {
      to: this.wallet,
      amount: this.amount,
      yid: this.yid,
    }

    this.qrUrl = `https://yatori.io/mobile/yatoriRequest?to=${snakeEater.to}&amount=${snakeEater.amount}&yid=${snakeEater.yid}&type=note&note=${note}`

    const blackLogo = await this.getBlackLogoDataUrl()

    // Generate compact QR code with brand logo in center
    const qrCodeOptions: any = {
      width: 250,
      height: 250,
      data: this.qrUrl,
      margin: 0,
      image: blackLogo,
      dotsOptions: {
        color: '#000000',
        type: 'dots'
      },
      backgroundOptions: {
        color: '#c1ff72'
      },
      imageOptions: {
        margin: 0,
        imageSize: 0.32,
        hideBackgroundDots: true,
      },
      cornersSquareOptions: {
        type: 'extra-rounded'
      },
      cornersDotOptions: {
        type: 'rounded'
      }
    }

    const qrCode = new QRCodeStyling(qrCodeOptions)

    // Get the QR code as a data URL
    const blob = await qrCode.getRawData('png')
    if (blob) {
      const reader = new FileReader()
      reader.onloadend = () => {
        this.qrCodeData = reader.result as string
      }
      reader.readAsDataURL(blob)
    }

    // Don't start WebSocket here - wait until QR is visible
  }

  startWebSocketConnection() {
    // Only start if not already connected/connecting and we have a YID
    if (this.wsConnection) {
      const state = this.wsConnection.readyState
      // If already OPEN or CONNECTING, don't create a new connection
      if (state === WebSocket.OPEN || state === WebSocket.CONNECTING) {
        return // Already connected or connecting
      }
      // If CLOSING or CLOSED, we can create a new one
    }

    if (!this.yid) {
      return // No YID generated yet
    }

    this.setupYatoriWebSocket(this.wallet, this.yid, this.amount)
  }

  setupYatoriWebSocket(walletAddress: string, yidToMatch: string, amount: number) {
    // Close existing connection only if it's not already open/connecting
    if (this.wsConnection) {
      const state = this.wsConnection.readyState
      // Only close if it's not already open or connecting
      if (state !== WebSocket.OPEN && state !== WebSocket.CONNECTING) {
        this.wsConnection.close()
      } else {
        // Already have a good connection, don't create a new one
        return
      }
    }

    const GATE_URL = 'wss://zanshin.fly.dev/confirmed'
    const wsYatori = new WebSocket(GATE_URL)
    this.wsConnection = wsYatori

    wsYatori.addEventListener('open', () => {
      this.connected = true
      const payload = { address: walletAddress, yid: yidToMatch, amount: String(amount) }
      wsYatori.send(JSON.stringify(payload))
    })

    wsYatori.addEventListener('message', (data) => {
      const parsedData = JSON.parse(data.data)

      if (parsedData.status === 'confirming') {
        if (this.confirmingTimeoutId) {
          clearTimeout(this.confirmingTimeoutId)
          this.confirmingTimeoutId = null
        }
        this.confirmingError = ''
        this.isConfirming = true
        this.confirmingTimeoutId = setTimeout(() => {
          this.confirmingTimeoutId = null
          this.isConfirming = false
          this.confirmingError = 'There was an error - check your transaction history'
        }, 60000)
      }

      if (parsedData.status === 'confirmed') {
        if (this.confirmingTimeoutId) {
          clearTimeout(this.confirmingTimeoutId)
          this.confirmingTimeoutId = null
        }
        this.confirmingError = ''
        this.isConfirming = false
        this.confirmed = true
        this.dialogOpen = false

        this.dispatchEvent(
          new CustomEvent('yatori-confirmed', {
            detail: {
              signature: parsedData.signature,
              status: parsedData.status,
            },
            bubbles: true,
            composed: true,
          })
        )

        setTimeout(() => {
          this.dispatchEvent(
            new CustomEvent('yatori-animation-complete', {
              detail: {
                signature: parsedData.signature,
                status: parsedData.status,
              },
              bubbles: true,
              composed: true,
            })
          )
        }, 1400)
      }
    })

    wsYatori.addEventListener('error', (err) => {
      console.error('WebSocket error:', err)
      this.connected = false
      this.isConfirming = false
      this.confirmingError = ''
      if (this.confirmingTimeoutId) {
        clearTimeout(this.confirmingTimeoutId)
        this.confirmingTimeoutId = null
      }
    })

    wsYatori.addEventListener('close', () => {
      console.log('Disconnected from proxy')
      this.connected = false
      this.isConfirming = false
      this.confirmingError = ''
      if (this.confirmingTimeoutId) {
        clearTimeout(this.confirmingTimeoutId)
        this.confirmingTimeoutId = null
      }
      this.wsConnection = null
    })
  }

  render() {
    // Show error if amount is invalid
    if (this.amountError) {
      return html`
        <div class="error-container">
          <svg class="error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <circle cx="12" cy="16" r="0.5" fill="currentColor"></circle>
          </svg>
          <div class="error-message">${this.amountError}</div>
          <div class="error-details">
            Please adjust the payment amount to continue.
          </div>
        </div>
      `
    }

    // Show spinner only when useDialog is false and we're loading (not connected, not confirmed, QR not ready)
    const showSpinner = !this.useDialog && !this.connected && !this.confirmed && !this.qrCodeData

    return html`
      ${showSpinner
        ? html`<div class="spinner"></div>`
        : this.confirmed && !this.useDialog
          ? html`
            <div class="flat-qr flat-confirmed">
              <div class="dialog-amount">Payment Complete</div>
              <div class="dialog-qr-row">
                <div class="dialog-wallet-vertical">${this.walletDisplayLabel()}</div>
                <div class="flat-confirmed-inner">
                  <svg viewBox="0 0 100 100" style="shape-rendering: geometricPrecision;">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#646CFF" stroke-width="6" class="animate-draw-circle"/>
                    <path d="M 30 50 L 45 65 L 75 30" fill="none" stroke="#646CFF" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" class="checkmark-path" style="stroke-dasharray: 55; stroke-dashoffset: 55;"/>
                  </svg>
                </div>
                <div class="dialog-wallet-vertical-right">${this.walletDisplayLabel()}</div>
              </div>
              <div class="dialog-wallet-bottom">${this.walletDisplayLabel()}</div>
            </div>
          `
          : html`
            ${this.isMobile
              ? html`
                  <button
                    class="deeplink-btn"
                    @click=${() => {
                  this.startWebSocketConnection()
                  window.location.href = this.qrUrl
                }}
                  >
                    <img src="${yatoriLogo}" alt="Yatori Logo" />
                    YATORI PAY
                  </button>
                `
              : this.useDialog
                ? html`
                    <button
                      class="deeplink-btn"
                      ?disabled=${this.confirmed}
                      @click=${() => {
                    if (!this.confirmed) {
                      this.dialogOpen = true
                    }
                  }}
                    >
                      ${this.confirmed
                    ? html`
                            <svg viewBox="0 0 100 100" style="width: 24px; height: 24px; shape-rendering: geometricPrecision;">
                              <circle cx="50" cy="50" r="40" fill="none" stroke="#646CFF" stroke-width="6" class="animate-draw-circle"/>
                              <path d="M 30 50 L 45 65 L 75 30" fill="none" stroke="#646CFF" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" class="checkmark-path" style="stroke-dasharray: 55; stroke-dashoffset: 55;"/>
                            </svg>
                          `
                    : html`
                            <img src="${yatoriLogo}" alt="Yatori Logo" />
                            YATORI PAY
                          `}
                    </button>
                    ${this.dialogOpen ? html`
                      <div class="dialog-overlay" @click=${(e: MouseEvent) => {
                      if (e.target === e.currentTarget) {
                        this.dialogOpen = false
                      }
                    }}>
                        <div class="dialog-content">
                          <div class="dialog-qr-row">
                            <div class="dialog-wallet-vertical">${this.walletDisplayLabel()}</div>
                            ${this.renderQrStack()}
                            <div class="dialog-wallet-vertical-right">${this.walletDisplayLabel()}</div>
                          </div>
                          <div class="dialog-wallet-bottom">${this.walletDisplayLabel()}</div>
                          <button
                            class="dialog-close-btn"
                            @click=${() => this.dialogOpen = false}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    ` : ''}
                  `
                : html`
                  <div class="flat-qr">
                    <div class="dialog-qr-row">
                      <div class="dialog-wallet-vertical">${this.walletDisplayLabel()}</div>
                      ${this.renderQrStack()}
                      <div class="dialog-wallet-vertical-right">${this.walletDisplayLabel()}</div>
                    </div>
                    <div class="dialog-wallet-bottom">${this.walletDisplayLabel()}</div>
                  </div>
                `}
          `}
    `
  }
}