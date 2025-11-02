"use client";

import { useRef } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useCardAnimation } from "./useCardAnimation";

interface ImageDescriptionprops {
    title: string;
    subtitle: string;
    image: StaticImageData | string;
    imageAlt: string;
    bgColor: string;
}

const ImageDescription = ({
    title,
    subtitle,
    image,
    imageAlt,
    bgColor,
}: ImageDescriptionprops) => {
    const cardRef = useRef<HTMLDivElement>(null);
    useCardAnimation(cardRef);

    return (
        <div ref={cardRef} className="overflow-hidden">
            <div
                className={`${bgColor} rounded-lg h-[400px] flex flex-col font-museo-moderno`}
            >
                <div className="h-[40%] pt-10 w-[80%] mx-auto">
                    <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
                        {title}
                    </h3>
                    <p className="text-gray-700 mb-4 text-base md:text-xl">
                        {subtitle}
                    </p>
                </div>
                <div className="flex flex-col justify-end items-center justify-center mt-auto h-[60%]">
                    <Image
                        src={image}
                        alt={imageAlt}
                        className="fit-contain h-[80%] md:h-[100%] w-auto"
                    />
                </div>
            </div>
        </div>
    );
}

export default ImageDescription;