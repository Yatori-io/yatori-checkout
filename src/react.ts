import React, { useRef, useEffect } from 'react';
import './components/yatori-checkout';
import type {
    YatoriCheckoutElement,
    YatoriConfirmedEventDetail,
    YatoriAnimationCompleteEventDetail
} from '../types/yatori-checkout-types';

interface YatoriCheckoutProps {
    wallet: string;
    amount: number;
    note?: string;
    onYatoriConfirmed?: (event: CustomEvent<YatoriConfirmedEventDetail>) => void;
    onYatoriAnimationComplete?: (event: CustomEvent<YatoriAnimationCompleteEventDetail>) => void;
}

export const YatoriCheckout: React.FC<YatoriCheckoutProps> = ({
    wallet,
    amount,
    note,
    onYatoriConfirmed,
    onYatoriAnimationComplete
}) => {
    const checkoutRef = useRef<YatoriCheckoutElement>(null);

    useEffect(() => {
        const current = checkoutRef.current;

        if (current) {
            if (onYatoriConfirmed) {
                current.addEventListener('yatori-confirmed', onYatoriConfirmed as EventListener);
            }

            if (onYatoriAnimationComplete) {
                current.addEventListener('yatori-animation-complete', onYatoriAnimationComplete as EventListener);
            }

            return () => {
                if (onYatoriConfirmed) {
                    current.removeEventListener('yatori-confirmed', onYatoriConfirmed as EventListener);
                }
                if (onYatoriAnimationComplete) {
                    current.removeEventListener('yatori-animation-complete', onYatoriAnimationComplete as EventListener);
                }
            };
        }
    }, [onYatoriConfirmed, onYatoriAnimationComplete]);

    return React.createElement('yatori-checkout', {
        ref: checkoutRef,
        wallet,
        amount,
        ...(note !== undefined && { note }),
    });
};