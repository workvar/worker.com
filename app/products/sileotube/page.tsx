"use client";

import { Suspense } from "react";
import { SileoTubeComponent } from "@/src/components/pages/products";
import { useSearchParams } from "next/navigation";

function SileoTubeContent() {
  const searchParams = useSearchParams();
  const redirectType = searchParams.get("redirectType");
  return (
    <div className="min-h-screen">
      <SileoTubeComponent redirectType={redirectType} />
    </div>
  );
}

export default function SileoTube() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    }>
      <SileoTubeContent />
    </Suspense>
  );
}