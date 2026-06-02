import React from 'react';

// Web Component Element Interface
export interface YatoriCheckoutElement extends HTMLElement {
    /**
     * Recipient wallet address (Solana). Must have at least 0.01 USDC already deposited for rent (USDC PDA).
     */
    wallet: string;
    /**
     * Payment amount in USD decimal format (e.g., "9.99", must be between "0.01" and "9999.99")
     */
    amount: string | number;
    /**
     * Product SKU encoded in the mobile payment link (`type=sku`). Empty or omitted defaults to `000`.
     * @default "000"
     */
    sku?: string;
    /**
     * When true and not on mobile, displays a "YATORI PAY" button that opens a centered dialog with the QR code.
     * When false, displays the QR code directly. On mobile devices, always shows the deeplink button regardless of this setting.
     * @default true
     */
    useDialog?: boolean;
}

// Event detail types
export interface YatoriConfirmedEventDetail {
    signature: string;
    status: string;
}

export interface YatoriAnimationCompleteEventDetail {
    signature: string;
    status: string;
}

// React JSX Intrinsic Element Declaration
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'yatori-checkout': React.DetailedHTMLProps<
                React.HTMLAttributes<YatoriCheckoutElement> & {
                    wallet: string;
                    amount: string | number;
                    sku?: string;
                    useDialog?: boolean;
                    onYatoriConfirmed?: (event: CustomEvent<YatoriConfirmedEventDetail>) => void;
                    onYatoriAnimationComplete?: (event: CustomEvent<YatoriAnimationCompleteEventDetail>) => void;
                },
                YatoriCheckoutElement
            >;
        }
    }
}

export { };
