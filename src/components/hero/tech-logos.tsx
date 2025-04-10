"use client";

import React from "react";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { allLogos } from "@/lib/data/logos/logoData";

export function TechLogos(){
  return (
    <div className="mb-10">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center ">
        <div className="text-center"></div>
        <LogoCarousel columnCount={3} logos={allLogos} />
      </div>
    </div>
  );
}
