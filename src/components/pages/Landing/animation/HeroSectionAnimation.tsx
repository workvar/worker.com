"use client";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroSectionAnimationProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  setTodoItems: React.Dispatch<React.SetStateAction<{ label: string; completed: boolean }[]>>;
  secondItemCompletedRef: React.MutableRefObject<boolean>;
  todoItemsContainerRef: React.RefObject<HTMLDivElement | null>;
  phoneScreenRef: React.RefObject<HTMLDivElement | null>;

  videoRef: React.RefObject<HTMLVideoElement | null>;
}

export const useHeroSectionAnimations = ({
  containerRef,
  setTodoItems,
  secondItemCompletedRef,
  todoItemsContainerRef,
  phoneScreenRef,
  videoRef,
}: HeroSectionAnimationProps) => {
  useGSAP(() => {
    if (containerRef.current) {
      // Get the initial background-image value
      const initialBgImage = window.getComputedStyle(containerRef.current).backgroundImage || "none";

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=5000vh",
          scrub: 1,
          pin: true,
          markers: false,
        },
      });

      timeline.to(containerRef.current, {
        duration: 1,
        ease: "power2.inOut",
        delay: 0.2,
      });

      timeline.addLabel("markSecondComplete");

      // Add a callback at that label to update React state
      timeline.add(() => {
        if (!secondItemCompletedRef.current) {
          secondItemCompletedRef.current = true;
          setTodoItems(prev => {
            const updated = [...prev];
            updated[1] = { ...updated[1], completed: true };
            updated[2] = { ...updated[2], completed: true };
            return updated;
          });
        }
      }, "markSecondComplete");

      timeline.add(() => {
        if (secondItemCompletedRef.current) {
          secondItemCompletedRef.current = false;
          setTodoItems((prev) => {
            const updated = [...prev];
            updated[1] = { ...updated[1], completed: false };
            updated[2] = { ...updated[2], completed: false };
            return updated;
          });
        }
      }, "markSecondComplete-=0.001");

      timeline.to(todoItemsContainerRef.current, {
        duration: 1,
        ease: "power2.inOut",
        y: 10,
        opacity: 0,
        display: "none",
        delay: 0.5,
      });

      timeline.from(phoneScreenRef.current, {
        y: "100%",
        duration: 1,
        ease: "back.in",
      })

      timeline.to('#focus-question-mark', {
        display: "inline-block",
        duration: 0.4,
        ease: "ease.inOut",
      })

      timeline.to('#focus-title', {
        color: "#ffffff",
        "-webkit-text-fill-color": "#ffffff",
        duration: 0.4,
        ease: "ease.inOut",
      })

      timeline.fromTo(containerRef.current, {
        backgroundImage: initialBgImage,
      }, {
        backgroundImage:
          "linear-gradient(to bottom, #FFFFFF 0%, #F3B3B4 35%, #FEAE8F 74%, #E7BEBF 100%)",
        duration: 1,
        ease: "power2.inOut",
        immediateRender: false,
      });

      timeline.to('.notification-banner', {
        opacity: 1,
        ease: "ease.inOut",
        duration: 1,
        stagger: 0.5,
        delay: 1,
      })

      timeline.to(phoneScreenRef.current, {
        y: "100%",
        duration: 1,
        ease: "ease.inOut",
      })

      timeline.to('.notification-banner', {
        opacity: 0,
        ease: "ease.inOut",
        duration: 1,
        stagger: 0.3,
        delay: 1,
      })

      timeline.to('#focus-question-mark', {
        display: "none",
        duration: 1,
        ease: "ease.inOut",
      })

      timeline.to('#focus-exclamation-mark', {
        display: "inline-block",
        duration: 1,
        ease: "ease.inOut",
      })

      timeline.to(containerRef.current, {
        backgroundColor: "#ffffff",
        backgroundImage: initialBgImage,
        duration: 1,
        ease: "power2.inOut",
      });

      timeline.to('#focus-title', {
        color: "#000000",
        "-webkit-text-fill-color": "#000000",
        y: "-15%",
        duration: 1,
        ease: "power2.inOut",
      })

      timeline.to('#focus-description', {
        display: "block",
        duration: 1,
        ease: "power2.inOut",
      })

      // timeline.fromTo(videoRef.current, {
      //   y: "100%",
      //   display: "none",
      // }, {
      //   ease: "power2.inOut",
      //   duration: 1,
      //   y: "100%",
      //   display: "flex",
      // })

      timeline.fromTo("#forest-video", {
        display: "none",
        y: "100%",
      }, {
        ease: "power2.inOut",
        duration: 2,
        delay: 0.5,
        y: "0%",
        display: "flex",
      })
    }
  }, { scope: containerRef });
};
