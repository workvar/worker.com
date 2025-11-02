"use client";

import { useRef } from "react";
import { pages } from "@/src/assets";
import {  useAddressTheProblemAnimation, useOurEnablementAnimation, usePillarsOfProductivityAnimation } from "../animation";
import { PillarsOfProductivity, OurEnablementFrame, AddressTheProblemFrame } from "@/src/components/pages/Landing/components/TheAddress";

export default function TheAddress() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const addressRef = useRef<HTMLElement | null>(null);
  const pillarsRef = useRef<HTMLElement | null>(null);
  const enablementRef = useRef<HTMLDivElement | null>(null);

  useAddressTheProblemAnimation({
    addressRef: addressRef as React.RefObject<HTMLDivElement>,
  });

  usePillarsOfProductivityAnimation({
    pillarsRef: pillarsRef as React.RefObject<HTMLDivElement>,
  });

  useOurEnablementAnimation({
    enablementRef: enablementRef as React.RefObject<HTMLDivElement>,
  });

  return (
    <section ref={sectionRef as React.RefObject<HTMLDivElement>} className="bg-white">
      <div
        className="w-screen max-w-screen h-[400vh] relative"
        style={{ 
          backgroundImage: `url(${pages.landing.womanSittingOnChair.src})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center top"
        }}>
        <AddressTheProblemFrame ref={addressRef as React.RefObject<HTMLDivElement>} />
        <PillarsOfProductivity ref={pillarsRef as React.RefObject<HTMLDivElement>} />
        <OurEnablementFrame ref={enablementRef as React.RefObject<HTMLDivElement>} />
      </div>
    </section>
  );
}

