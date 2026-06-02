# Yatori Checkout

[![npm version](https://img.shields.io/npm/v/yatori-checkout.svg)](https://www.npmjs.com/package/yatori-checkout)
[![License](https://img.shields.io/github/license/willmcdeezy/yatori-checkout)](https://github.com/willmcdeezy/yatori-checkout/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/yatori-checkout.svg)](https://www.npmjs.com/package/yatori-checkout)


A web component for seamless USDC stablecoin payments on Solana with QR code checkout and WebSocket confirmation. Learn more at [Yatori Checkout](https://yatori.io/yatori-checkout)

## Screenshots

<p align="center">
  <sub>Desktop checkout — dialog and embedded modes</sub>
</p>

<table>
  <tr>
    <td align="center" width="50%">
      <strong>Button</strong><br />
      <sub><code>useDialog=true</code> (default)</sub><br /><br />
      <img src="./screenshots/button.png" alt="YATORI PAY button" width="300" />
    </td>
    <td align="center" width="50%">
      <strong>Dialog</strong><br />
      <sub>QR, amount, and wallet in modal</sub><br /><br />
      <img src="./screenshots/dialog.png" alt="QR code in dialog" width="300" />
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <strong>Embedded</strong><br />
      <sub><code>useDialog=false</code></sub><br /><br />
      <img src="./screenshots/embeded.png" alt="Inline QR checkout" width="300" />
    </td>
    <td align="center" width="50%">
      <strong>Confirmed</strong><br />
      <sub>Payment complete</sub><br /><br />
      <img src="./screenshots/confirmed.png" alt="Payment confirmed" width="300" />
    </td>
  </tr>
</table>

## Installation
```bash
npm install yatori-checkout
```

## Quick Start
```javascript
import 'yatori-checkout'
```
```html
<!-- Default: Uses dialog on desktop (button opens modal) -->
<yatori-checkout
  wallet="G8RtxPyG2pdrAhrNRMgg7Hia8imCofdCYxvyWiNG14hx"
  amount="9.99"
></yatori-checkout>

<!-- Disable dialog: Shows QR code directly on desktop -->
<yatori-checkout
  wallet="G8RtxPyG2pdrAhrNRMgg7Hia8imCofdCYxvyWiNG14hx"
  amount="9.99"
  useDialog="false"
></yatori-checkout>
```

> **Important:** The recipient wallet address must have at least 0.01 USDC already deposited for rent (USDC PDA on Solana).

Optional product SKU (defaults to `000` when omitted):

```html
<yatori-checkout
  wallet="G8RtxPyG2pdrAhrNRMgg7Hia8imCofdCYxvyWiNG14hx"
  amount="9.99"
  sku="001"
></yatori-checkout>
```

## Mobile payment link (SKU)

QR codes and mobile deeplinks use the Yatori mobile request format with **`type=sku`**. Checkout always sends SKU-style links so the [YATORI PAY](https://yatori.io/yatori-pay) app can recognize them.

| Scenario | Example link |
|----------|----------------|
| Default (wallet + amount only) | `https://yatori.io/mobile/yatoriRequest?token=usdcBasic&to=G8RtxPyG2pdrAhrNRMgg7Hia8imCofdCYxvyWiNG14hx&amount=9.99&yid=4821a3b7&type=sku&sku=000` |
| With `sku="001"` | `...&type=sku&sku=001` |

- **`yid`** — Generated per QR session by the component (value changes each time).
- **`sku`** — From the `sku` attribute; if missing or blank, **`000`** is used.

This SKU field is designed for catalog and order tracking and will later be compatible with the **Yatori Merchant** platform, so merchants can align web checkout SKUs with their merchant catalog.

## Dialog Behavior

By default, the component uses a dialog mode on desktop devices:

- **Desktop with `useDialog=true` (default)**: Shows a "YATORI PAY" button. Clicking it opens a centered modal dialog with the QR code and a close button.
- **Desktop with `useDialog=false`**: Displays the QR code directly without a dialog.
- **Mobile devices**: Always shows the "YATORI PAY" button with deeplink functionality (dialog setting is ignored).

To disable the dialog and show the QR code directly on desktop, set `useDialog="false"`:

```html
<yatori-checkout
  wallet="G8RtxPyG2pdrAhrNRMgg7Hia8imCofdCYxvyWiNG14hx"
  amount="9.99"
  useDialog="false"
></yatori-checkout>
```

## Vanilla HTML Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Yatori Checkout Example</title>
</head>
<body>
  <h1>Payment Checkout</h1>
  
  <yatori-checkout
    wallet="G8RtxPyG2pdrAhrNRMgg7Hia8imCofdCYxvyWiNG14hx"
    amount="9.99"
  ></yatori-checkout>

  <script type="module">
    import 'yatori-checkout'
    
    const checkout = document.querySelector('yatori-checkout')
    checkout.addEventListener('yatori-confirmed', (event) => {
      console.log('Payment confirmed!', event.detail)
      alert('Payment successful!')
    })
  </script>
</body>
</html>
```

## Vue.js Example

First, configure Vue to recognize `yatori-checkout` as a custom element in your `vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('yatori-')
        }
      }
    })
  ]
})
```

Then use it in your component:
```vue
<template>
  <yatori-checkout
    wallet="G8RtxPyG2pdrAhrNRMgg7Hia8imCofdCYxvyWiNG14hx"
    amount="9.99"
    @yatori-confirmed="handlePayment"
  ></yatori-checkout>
</template>

<script setup>
import 'yatori-checkout'

function handlePayment(event) {
  console.log('Payment confirmed!', event.detail)
  // event.detail contains: { signature, status }
}
</script>
```

## React Example
```tsx
import "./App.css";
import { YatoriCheckout } from "yatori-checkout/react";

function App() {
  return (
    <>
      <div>
        <YatoriCheckout
          wallet="G8RtxPyG2pdrAhrNRMgg7Hia8imCofdCYxvyWiNG14hx"
            amount={0.01}
        />
      </div>
    </>
  );
}

export default App;
```

## Next.js Example

When using in a Next.js application, use dynamic import to ensure client-side rendering:
```tsx
"use client";

import dynamic from "next/dynamic";

const YatoriCheckout = dynamic(
  () => import("yatori-checkout/react").then((mod) => mod.YatoriCheckout),
  {
    ssr: false,
    loading: () => (
      <div className="w-full flex justify-center items-center h-[300px]">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-300 rounded w-48"></div>
        </div>
      </div>
    ),
  }
);

export default function MyYatoriCheckout() {
  return (
    <YatoriCheckout
      wallet="G8RtxPyG2pdrAhrNRMgg7Hia8imCofdCYxvyWiNG14hx"
      amount={10}
      onYatoriConfirmed={(event) => {
        console.log("Payment confirmed", event.detail);
      }}
      onYatoriAnimationComplete={(event) => {
        console.log("Animation complete", event.detail);
      }}
    />
  );
}
```

## Props/Attributes

| Attribute | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `wallet` | string | Yes | - | Recipient wallet address (Solana). Must have at least 0.01 USDC already deposited for rent (USDC PDA). |
| `amount` | number | Yes | - | Payment amount in USD decimal format (e.g., 9.99, must be between 0.01 and 9999.99) |
| `sku` | string | No | `000` | Product SKU in the mobile payment link (`type=sku`). Omitted or empty uses `000`. Will later align with the Yatori Merchant platform. |
| `useDialog` | boolean | No | `true` | When `true` and not on mobile, displays a "YATORI PAY" button that opens a centered dialog with the QR code. When `false`, displays the QR code directly. On mobile devices, always shows the deeplink button regardless of this setting. |

## Events

### `yatori-confirmed`

Fired when payment is confirmed via WebSocket.

### WebSocket behavior

The component opens a WebSocket when the QR is visible (dialog opened or `useDialog=false`). It sends `address`, `yid`, and **amount** so the server can validate the transaction amount. You only need to pass `wallet` and `amount` as props; the component handles the rest. If the server does not confirm within 60 seconds, the UI shows an error asking the user to check their transaction history.
```javascript
element.addEventListener('yatori-confirmed', (event) => {
  const { signature, status } = event.detail
  // Handle payment confirmation
})
```

### `yatori-animation-complete`

Fired when the payment complete (checkmark) animation finishes (~1.4s after confirmation). Use this to hide the component or update UI.
```javascript
element.addEventListener('yatori-animation-complete', (event) => {
  const { signature, status } = event.detail
  // Animation is complete, component can be hidden or UI updated
})
```

## Shadow DOM CSS Custom Properties

The component uses Shadow DOM, but you can customize the button styling using CSS custom properties (CSS variables) with the `--yp-` prefix. These variables can be set on the `yatori-checkout` element or any parent element.

### Available Custom Properties

| Variable | Default | Description |
|----------|---------|-------------|
| `--yp-button-border-width` | `1px` | Border width of the button |
| `--yp-button-border-color` | `black` | Border color of the button |
| `--yp-button-border-radius` | `0px` | Border radius of the button |
| `--yp-button-height` | `48px` | Height of the button (minimum: 44px) |
| `--yp-button-width` | `100%` | Width of the button (minimum: 200px) |

> **Note:** The button has minimum size constraints to ensure usability. The minimum width is 200px and minimum height is 44px. Values below these minimums will be automatically clamped.

### Example Usage

```html
<style>
  yatori-checkout {
    --yp-button-border-radius: 2px;
    --yp-button-border-color: #007bff;
    --yp-button-border-width: 2px;
    --yp-button-height: 52px;
    --yp-button-width: 200px;
  }
</style>

<yatori-checkout
  wallet="G8RtxPyG2pdrAhrNRMgg7Hia8imCofdCYxvyWiNG14hx"
  amount="9.99"
></yatori-checkout>
```

```css
/* In your CSS file */
yatori-checkout {
  --yp-button-border-radius: 12px;
  --yp-button-border-color: #333;
  --yp-button-border-width: 2px;
  --yp-button-height: 52px;
  --yp-button-width: 300px;
}
```

## Features

- ✅ QR code generation with Yatori branding and SKU mobile links (`type=sku`, default SKU `000`)
- ✅ Optional `sku` attribute for product identification (Yatori Merchant platform compatibility planned)
- ✅ Dialog mode (default): Desktop users click a button to open a centered modal with QR code
- ✅ Direct QR display: Option to show QR code directly without dialog (`useDialog="false"`)
- ✅ WebSocket payment confirmation
- ✅ Mobile responsive: On mobile devices, displays "Yatori Pay" button with secure deeplink functionality to [YATORI PAY](https://yatori.io/yatori-pay)
- ✅ Amount validation (max 9999.99)
- ✅ Beautiful payment complete animation
- ✅ Works in any framework (Vue, React, vanilla JS, etc.)

## Payment Method

Payable with the **YATORI PAY** mobile app. Available for download on the [Apple App Store](https://apps.apple.com/us/app/yatori-pay/id6736435772) or [Google Play Store](https://play.google.com/store/apps/details?id=io.yatori.app). More info: [https://yatori.io/yatori-pay](https://yatori.io/yatori-pay)

## Changelog

### 1.1.0

- SKU mobile payment links (`type=sku`, default `sku=000`) for YATORI PAY deeplinks and QR codes
- Optional `sku` attribute on `<yatori-checkout>` (planned compatibility with Yatori Merchant)
- README screenshot gallery layout and sizing

### 1.0.1

- Earlier stable release

## License

MIT

## Links

- [Yatori](https://yatori.io)

- [Checkout YouTube Demo](https://www.youtube.com/watch?v=55-TJJdhLAo)