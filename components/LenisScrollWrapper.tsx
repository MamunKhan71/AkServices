'use client'
import React, { useEffect } from 'react'
import Lenis from 'lenis'
const LenisScrollWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            autoRaf: true,
        });
        function raf(time: DOMHighResTimeStamp): void {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, []);

    return (
        <div>{children}</div>
    );
}

export default LenisScrollWrapper