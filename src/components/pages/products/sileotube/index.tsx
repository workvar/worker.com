"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { pages, icons } from "@/src/assets";
import PreFooter from "../../Landing/sections/PreFooter";
import { FeatureItem, AppShowcaseIt } from "./components";

import { Features, AppShowcaseItems, StoreData } from "./data";

const SileoTubeComponent = ({ redirectType }: { redirectType?: string | null }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 md:py-16 mx-auto px-10 bg-gradient-to-b from-blue-200/80 to-white">
        <div className="mx-auto pt-18 text-center md:max-w-[80vw]">
          <h1 className="text-6xl xl:text-8xl leading-tight text-gray-900">
            {redirectType == "install" ? <><span className="font-semibold">Thank you</span> <br /><span className="text-gray-900 text-medium">for installing SileoTube!</span></> : <><span className="text-gray-900 font-semibold">A calming, decluttered</span> <br />YouTube experience</>}
          </h1>
          <p className="mt-4 text-gray-600 mx-auto text-xl md:text-2xl lg:text-3xl md:w-[80%] xl:w-[70%] mx-auto">
            {redirectType == "install" ? "Distraction-blocking extension, so you can focus on what you want to do. Download now for free." : "Install SileoTube to get a calming, decluttered YouTube experience. It's free and open source."}
          </p>
          <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
            {redirectType != "install" && StoreData.map((store) => (
              <div key={store.storeName} className="flex flex-col items-center gap-1 w-full md:w-auto">
                <Link
                  href={store.url}
                  target="_blank"
                  className="
                  flex flex-row justify-center 
                  gap-2 px-4 py-2 
                  border-3 border-gray-700 rounded-[10px] 
                  shadow-sm hover:shadow-lg 
                  bg-transparent hover:bg-gray-200 transition 
                  min-w-full md:min-w-80"
                >
                  <Image src={store.icon} alt={store.iconAlt} width={32} height={32} className="my-auto" />
                  <span className="text-base md:text-lg my-auto pl-2">{store.storeName}</span>
                </Link>
                <span className="text-md text-gray-500">{store.versionInfo}</span>
              </div>
            )
            )}

            {redirectType == "install" &&
              <div className="w-full mt-6">
                <p
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="w-full flex items-center justify-center gap-2 text-gray-600 hover:text-gray-700 transition-colors"
                >
                  <span className="text-lg md:text-xl">Get to know your extension</span>
                  <icons.general.ChevronDown 
                    className={`w-5 h-5 text-gray-700 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
                  />
                </p>
              </div>
            }

          </div>

          {/* Image Placeholder */}
          <div className="mt-10 w-full mx-auto md:max-w-4xl flex items-center justify-center">
            <Image 
              src={pages.products.SileoTube.bgImage} 
              alt="SileoTube Promo Video" 
              width={1000} 
              height={1000} 
              className="rounded-2xl max-w-full h-auto"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* About SileTube Section */}
      <section className="py-12 md:py-16 mx-auto px-10 md:max-w-[80vw]">
        <div className="flex items-center gap-3 mb-12">
          <div className="rounded-full grid place-items-center text-white">
            <Image src={pages.products.SileoTube.productLogo} alt="SileoTube Logo" width={120} height={120} />
          </div>
          <div>
            <div>
              <h2 className="text-4xl md:text-6xl font-semibold text-gray-900">
                SileoTube
              </h2>
            </div>
            <p className="mt-3 text-gray-700 text-lg md:text-xl">
              An extension to help you make the best of the YouTube.
            </p>
          </div>
        </div>
        <div>
          {AppShowcaseItems.map((item) => (
            <AppShowcaseIt key={item.title} photo={item.photo} alt={item.alt} title={item.title} description={item.description} photoDesktopPosition={item.photoDesktopPosition as "left" | "right"} />
          ))}
        </div>
      </section>

      {/* Feature Toggles */}
      <section className="md:py-12 md:py-16 mx-auto px-10 md:max-w-[80vw]">
        <div className="py-12 md:py-16 mx-auto">
          <div className="mb-12">
            <h3 className="text-4xl md:text-6xl font-semibold text-gray-900">It's not one size fits all</h3>
            <p className="mt-3 text-gray-700 text-lg md:text-xl">
              Customization for all the different aspects of block because we know not everyone is the same.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Features.map((feature) => (
              <FeatureItem key={feature.title} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Cards */}
      <section className="pb-12 mx-auto">
        <PreFooter />
      </section>
    </div>
  );
};

export default SileoTubeComponent;