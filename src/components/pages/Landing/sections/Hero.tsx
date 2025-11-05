"use client";

import { useRef, useState } from "react";
import { useHeroSectionAnimations } from "../animation";
import { HeroData } from "../data";
import { Input, Messages } from "@/src/components/common";
import { pages } from "@/src/assets";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const todoItemsContainerRef = useRef<HTMLDivElement>(null);
  const secondItemCompletedRef = useRef(false);
  const phoneScreenRef = useRef<HTMLDivElement>(null);
  const notificationContainerRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const todoItemsContainerRefWithVideo = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [todoItems, setTodoItems] = useState(HeroData.toDoItems);

  // Use animation hook
  useHeroSectionAnimations({
    containerRef,
    setTodoItems,
    secondItemCompletedRef,
    todoItemsContainerRef,
    phoneScreenRef,
    videoRef,
  });

  // Video autoplay is handled in the animation hook when the video becomes visible
  // Removing early autoplay attempt to avoid conflicts

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-white"
    >
      <div className="h-screen w-screen flex flex-col items-center justify-center relativey-500" id="hero-container">
        <div id="top-half" className="h-[40%] w-full relative flex flex-col items-center justify-end">
          <div id="hero-content" ref={heroContentRef}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-black pb-2 text-gradient" id="focus-title">
              <span>
                Focusing
              </span>
              <span className="hidden" id="focus-question-mark">?</span>
              <span className="hidden" id="focus-exclamation-mark">!</span>
            </h1>
          </div>
        </div>
        <div id="bottom-half" className="h-[60%] w-full relative flex flex-col items-center justify-start">
          <p className="text-center font-light text-lg md:text-xl lg:text-2xl hidden text-gray-500 pb-3 px-5 md:px-0" id="focus-description">
            Be focused in today's Hyper-connected society
          </p>
          <div ref={videoContainerRef} className="flex justify-center z-10">
            <video
              ref={videoRef}
              src={pages.landing.forestVideo}
              id="forest-video"
              autoPlay
              muted
              loop
              controls={false}
              preload="auto"
              className="w-[100vw] h-full md:h-3/5 object-cover rounded-xl hidden"
            />
          </div>
          <div className="grid grid-cols-1 gap-x-2 gap-y-4 relative z-20 pt-5 text-black px-10" ref={(node) => {
            todoItemsContainerRef.current = node;
            todoItemsContainerRefWithVideo.current = node;
          }}>
            {todoItems.map((item: { label: string; completed: boolean }) => (
              <Input.Checkbox key={item.label} label={item.label} completed={item.completed} />
            ))}
          </div>
        </div>
        <div
          ref={phoneScreenRef}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[90%] md:w-auto"
        >
          <div className="hidden md:block">
            <Image src={pages.landing.phoneScreen} alt="phone screen" width={650} height={500} />
          </div>
          <div className="block md:hidden">
            <Image src={pages.landing.phoneScreen} alt="phone screen" width={650} height={500} />
          </div>
        </div>
      </div>
      <div className="" ref={notificationContainerRef}>
        {HeroData.notifications.map((notification, index) => {
          return (
            <div key={notification.position.top + notification.position.left} className="absolute" style={{ top: notification.position.top, left: notification.position.left }}>
              <Messages.Notification
                photo={notification.notification.photo}
                platform={notification.notification.platform}
                name={notification.notification.name}
                message={notification.notification.message}
              />
            </div>
          );
        })}
      </div>
    </section >
  );
}
