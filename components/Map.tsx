"use client";

import { Performance } from "@/app/press-kit/page";
import dynamic from "next/dynamic";

const Map = ({ performances }: { performances: Performance[] }) => {
  const DynamicMap = dynamic(() => import("@/components/PerformanceMap"), {
    ssr: false,
  });
  return <DynamicMap performances={performances} />;
};

export default Map;
