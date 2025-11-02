"use client";

import { useRef } from "react";
import { useCardAnimation } from "./useCardAnimation";

const GlassCard = ({ children }: { children: React.ReactNode }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    useCardAnimation(cardRef);

    return (
        <div ref={cardRef} className="relative h-full">
            {/* Liquid glass effect frame - backdrop blur creates the frosted glass effect */}
            <div
                className="relative rounded-xl p-8 h-full"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Semi-transparent brownish-grey tint
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default GlassCard;