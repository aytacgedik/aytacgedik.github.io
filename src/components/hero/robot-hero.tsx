"use client";

import React, { Suspense, useState, useEffect } from 'react'; 
import Link from 'next/link';
import { FaArrowDown } from 'react-icons/fa';

import { UI_TEXT } from './hero.constants';
import { SplineLoadingFallback } from './SplineLoadingFallback';
import { SocialLinks } from './SocialLinks';

import { TechLogos } from './tech-logos';
import { LazySplineWrapper } from './LazySplineWrapper';
import { personalInfo } from '@/lib/data/portfolio';

export function HeroSection() {
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);

  useEffect(() => {
    const triggerLoad = () => {
      setShouldLoadSpline(true);
    };

    if ('requestIdleCallback' in window) {
       window.requestIdleCallback(triggerLoad, { timeout: 2000 }); 
    } else {
      const timerId = setTimeout(triggerLoad, 500); 
      return () => clearTimeout(timerId);
    }
  }, []); 


  return (
    <section
      id="home"
      aria-labelledby={UI_TEXT.heroHeadlineId}
      className="w-full min-h-screen relative overflow-hidden"
      data-testid="hero-section"
    >
      <div className="flex flex-col md:flex-row min-h-screen">

        {/* Left Content Column */}
        <div className="w-full md:w-1/2 p-8 lg:p-12 relative z-10 flex flex-col justify-center items-center text-center">
           <div className="max-w-4xl w-full">
            <h1
              id={UI_TEXT.heroHeadlineId}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight motion-safe:animate-fade-in-down"
              data-testid="hero-name"
            >
              {personalInfo.name}
            </h1>
            <h2
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#C1A050] dark:text-blue-400 mb-6 motion-safe:animate-fade-in-down motion-safe:animation-delay-200"
              data-testid="hero-title"
            >
              {personalInfo.title}
            </h2>
            <p
              className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed motion-safe:animate-fade-in-down motion-safe:animation-delay-400"
              data-testid="hero-pitch"
            >
              {personalInfo.pitch}
            </p>

            <div className="mb-10 motion-safe:animate-fade-in-down motion-safe:animation-delay-500">
              <TechLogos />
            </div>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 motion-safe:animate-fade-in-up motion-safe:animation-delay-600">
              <Link href="#experience"
                className="px-8 py-3 bg-[#C1A050] text-white font-bold rounded-md shadow-lg text-lg transition duration-300 ease-in-out motion-safe:hover:bg-blue-700 motion-safe:hover:shadow-xl motion-safe:hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none"
                data-testid="cta-work"
              >
                {UI_TEXT.viewWork}
              </Link>
              <Link href="#contact"
                className="px-8 py-3 bg-gray-700 text-white font-bold rounded-md shadow-lg text-lg transition duration-300 ease-in-out motion-safe:hover:bg-gray-800 motion-safe:hover:shadow-xl motion-safe:hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none"
                data-testid="cta-contact"
              >
                {UI_TEXT.getInTouch}
              </Link>
            </div>

            <SocialLinks />

            <div className="mt-8 hidden md:block motion-safe:animate-bounce motion-reduce:hidden">
              <a href="#experience" aria-label={UI_TEXT.scrollDownAria} data-testid="scroll-indicator">
                <FaArrowDown className="text-gray-500 dark:text-gray-400 text-2xl mx-auto" />
              </a>
            </div>
          </div>
        </div>

        <div
            className="hidden md:block md:w-1/2 relative md:min-h-screen" 
            data-testid="spline-container"
        >
            {shouldLoadSpline ? (
                <Suspense fallback={<SplineLoadingFallback />}>
                    <LazySplineWrapper
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="absolute inset-0 w-full h-full"
                    />
                </Suspense>
            ) : (
                <SplineLoadingFallback />
            )}
        </div>
      </div>
    </section>
  );
}