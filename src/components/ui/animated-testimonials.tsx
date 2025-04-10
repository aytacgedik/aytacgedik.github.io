"use client";

import { IconArrowLeft, IconArrowRight, IconLink } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface ProjectDisplayData {
  name: string;
  description: string; 
  technologies: string[]; 
  src: string; 
  url?: string;
}


export const AnimatedTestimonials = ({
  projects,
  autoplay = false,
  className,
}: {
  projects: ProjectDisplayData[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);
  const [rotations, setRotations] = useState<number[]>([]);

  useEffect(() => {
    const randoms = projects.map(() => Math.floor(Math.random() * 21) - 10);
    setRotations(randoms);
  }, [projects]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className={cn("max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-20", className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {projects.map((project, index) => {
                const rotateVal = rotations[index] ?? 0;
                return (
                  <motion.div
                    key={project.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: rotateVal,
                    }}
                    animate={{
                      opacity: index === active ? 1 : 0.7,
                      scale: index === active ? 1 : 0.95,
                      z: index === active ? 0 : -100,
                      rotate: index === active ? 0 : rotateVal,
                      zIndex: index === active ? 10 : (projects.length - index),
                      y: index === active ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: rotateVal,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <Image
                      src={project.src}
                      alt={project.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-center"
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold text-foreground">{projects[active].name}</h3>
             
             
            
            <motion.p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {projects[active].description.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.015 * index,
                  }}
                  className="inline-block mr-1" 
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
              {projects[active].url && (
               <div className="mt-4">
                   <a
                     href={projects[active].url}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors font-medium group"
                   >
                     <IconLink className="w-4 h-4 group-hover:animate-pulse" />
                     <span>View Project / Code</span>
                   </a>
               </div>
             )}
             <hr className="py-1"/>
             <div className="flex flex-wrap gap-2">
              
             {projects[active].technologies.map((tech, techIndex) => (
               <span key={techIndex} className="bg-secondary text-secondary-foreground text-xs font-medium px-2 py-0.5 rounded-full" >{tech}</span>
             ))}
           </div>
          </motion.div>
          <div className="flex gap-4 pt-2 ">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button"
            >
              <IconArrowLeft className="h-5 w-5 text-foreground group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
                {active + 1} / {projects.length}
            </span>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button"
            >
              <IconArrowRight className="h-5 w-5 text-foreground group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
