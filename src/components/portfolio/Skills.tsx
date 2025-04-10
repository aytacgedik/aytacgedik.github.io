import React from "react";
import { SectionHeader } from "./SectionHeader";
import { SkillCategoryCard } from "./SkillCategoryCard";
import { FaCode } from "react-icons/fa"; 
import { skills } from "@/lib/data/portfolio"; 
import { motion } from "framer-motion"; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export const Skills: React.FC<{id?: string}> = ({id="skills"}) => { 
  return (
    <section id={id} className="py-16 md:py-20 bg-secondary/30 dark:bg-neutral-900/50"> 
        <div className="max-w-7xl mx-auto px-4"> 
            <SectionHeader title="Capabilities & Toolkit" icon={FaCode} className="px-0 border-none pb-0" /> 

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible" 
                viewport={{ once: true, amount: 0.1 }} 
            >
                {skills.map((category, catIndex) => (
                <SkillCategoryCard
                    key={catIndex}
                    category={category}
                    variants={itemVariants}
                />
                ))}
            </motion.div>
         </div>
    </section>
  );
};