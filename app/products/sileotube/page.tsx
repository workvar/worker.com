"use client";

import { SileoTubeComponent } from "@/src/components/pages/products";
import { useSearchParams } from "next/navigation";

export default function SileoTube() {
  const searchParams = useSearchParams();
  const redirectType = searchParams.get("redirectType");
  return (
    <div className="min-h-screen">
      <SileoTubeComponent redirectType={redirectType} />
    </div>
  );
}