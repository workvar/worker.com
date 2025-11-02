"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Hook to animate cards with a "ease up into view" effect when they scroll into viewport
 * @param cardRef - Ref to the card element
 * @param delay - Optional delay before animation starts (default: 0)
 */
export const useCardAnimation = (cardRef: React.RefObject<HTMLElement | null>, delay: number = 0) => {
  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    // Set initial state
    gsap.set(element, {
      opacity: 0,
      y: 40,
    });

    // Create scroll-triggered animation
    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%", // Start animation when top of element is 85% down the viewport
        end: "top 50%",
        toggleActions: "play none none none",
      },
    });

    // Cleanup
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [cardRef, delay]);
};

