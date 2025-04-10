"use client";

import React, { useState } from "react";

import { SplashCursor } from "@/components/ui/splash-cursor";
import { WorkExperience } from "@/components/portfolio/work-experience/WorkExperience";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/education/Education";
import { Certificates } from "@/components/portfolio/certificate/Certificates";
import { Contact } from "@/components/portfolio/Contact";
import { HeroSection } from "@/components/hero/robot-hero";
import { ResumeChatbot } from "@/components/portfolio/ResumeChatbot";
import { Navbar } from "@/components/layout/navbar";
import { navItems } from "@/lib/data/navbar";

export default function HomePage() {
  const [splashCursorEnabled, setSplashCursorEnabled] = useState(true);
  return (
    <div className="min-h-screen text-foreground bg-background pt-16">
      {splashCursorEnabled && <SplashCursor />}

      <div className="hidden md:block">
        <ResumeChatbot />
      </div>

      <Navbar
        navItems={navItems}
        brandName="Aytac Gedik"
        splashCursorEnabled={splashCursorEnabled}
        setSplashCursorEnabled={setSplashCursorEnabled}
      />

      <HeroSection />
      <WorkExperience />
      <Skills />
      <Education />
      <Certificates />
      <Contact />
    </div>
  );
}
