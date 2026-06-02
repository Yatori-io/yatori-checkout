import React from 'react';
import { YatoriCheckoutElement, YatoriConfirmedEventDetail, YatoriAnimationCompleteEventDetail } from './yatori-checkout-types';

/**
 * YatoriCheckout Component
 * Provides a web component for Solana USDC payments with QR code generation
 */
export declare const YatoriCheckout: React.FC<{
    /**
     * Recipient Solana wallet address 
     * @example "7PXJH9yeqy7LG7aUFaVn8N4m1Zu8U9a8sJKkUzqDPsb5"
     */
    wallet: string;

    /**
     * Payment amount in USD
     * @minimum 0.01
     * @maximum 9,999.99
     */
    amount: string | number;

    /**
     * Product SKU for the mobile payment link (`type=sku`). Empty or omitted defaults to `000`.
     * @default "000"
     */
    sku?: string;

    /**
     * When true and not on mobile, displays a "YATORI PAY" button that opens a centered dialog with the QR code.
     * When false, displays the QR code directly. On mobile devices, always shows the deeplink button regardless of this setting.
     * @default true
     */
    useDialog?: boolean;

    /**
     * Optional CSS class name to apply to the component
     */
    className?: string;

    /**
     * Optional callback when payment is confirmed
     * Provides transaction signature and confirmation details
     */
    onYatoriConfirmed?: (event: CustomEvent<YatoriConfirmedEventDetail>) => void;

    /**
     * Optional callback when payment animation completes
     * Signals end of payment process
     */
    onYatoriAnimationComplete?: (event: CustomEvent<YatoriAnimationCompleteEventDetail>) => void;
}>;