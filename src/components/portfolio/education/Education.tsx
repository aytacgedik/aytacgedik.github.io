import React from "react";
import { EducationCard } from "./EducationCard"; 
import { FaGraduationCap } from 'react-icons/fa';
import { education } from "@/lib/data/portfolio"; 
import { motion } from "framer-motion";
import { SectionHeader } from "../SectionHeader";

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 15,
      duration: 0.5, 
    },
  },
};

export const Education: React.FC<{id?: string}> = ({ id = "education" }) => {
  if (!education || !education.degree) { 
    return null;
  }

  return (
    <section id={id} className="py-16 md:py-20"> 
        <div className="max-w-7xl mx-auto px-4"> 
            <SectionHeader title="Education" icon={FaGraduationCap} className="px-0 border-none pb-0 mb-8 md:mb-10" />
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} 
            >
                <EducationCard
                    education={education}
                    variants={itemVariants} 
                />
            </motion.div>
         </div>
    </section>
  );
};