"use client";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const useAddressTheProblemAnimation = ({
    addressRef }: { addressRef: React.RefObject<HTMLDivElement> }) => {
    useGSAP(() => {
        if (addressRef.current) {
            const addressTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: addressRef.current,
                    start: "top top",           // Pins immediately at top
                    end: "bottom top",          // Ends when bottom hits top (100vh scroll)
                    scrub: 1,
                    pin: true,
                    pinSpacing: false,
                },
            });
            addressTimeline.fromTo(addressRef.current, {
                opacity: 1,
            }, {
                opacity: 0,
                duration: 1,
                ease: "power2.inOut",
            });
        }
    });
};

const usePillarsOfProductivityAnimation = ({
    pillarsRef }: { pillarsRef: React.RefObject<HTMLDivElement> }) => {
    useGSAP(() => {
        if (pillarsRef.current) {
            const pillarsTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: pillarsRef.current,
                    start: "top top",          // Starts when IT reaches top
                    end: "bottom top",          
                    scrub: 1,
                    pin: true,
                    pinSpacing: false,
                },
            });
            pillarsTimeline.from(pillarsRef.current, {
                opacity: 0,
                ease: "power2.inOut",
            })
            
            .to(pillarsRef.current, {
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
            })

            .to(pillarsRef.current, {
                opacity: 0,
                duration: 1,
                ease: "power2.inOut",
            })
        }
    });
};

const useOurEnablementAnimation = ({
    enablementRef }: { enablementRef: React.RefObject<HTMLDivElement> }) => {
    useGSAP(() => {
        if (enablementRef.current) {
            const enablementTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: enablementRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                    pin: true,
                },
            });

            enablementTimeline.from(enablementRef.current, {
                opacity: 0,
                ease: "power2.inOut",
            })
            
            .to(enablementRef.current, {
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
            })

        }
    });
};

export {
    useAddressTheProblemAnimation,
    usePillarsOfProductivityAnimation,
    useOurEnablementAnimation 
};