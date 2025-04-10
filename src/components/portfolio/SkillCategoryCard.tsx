import { SkillCategoryData } from "@/types/portfolio";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; 

interface SkillCategoryCardProps {
  category: SkillCategoryData;
  variants?: any;
}

export const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category, variants }) => {
  return (
    <motion.div
      variants={variants} 
      className={cn(
          "bg-card dark:bg-neutral-800 p-6 rounded-lg shadow-sm border border-border", 
          "transition-all duration-300 ease-in-out",
          "hover:shadow-md hover:-translate-y-1" 
      )}
    >
      <h3 className="text-lg font-semibold mb-5 text-card-foreground dark:text-neutral-100 pb-2"> 
        {category.title}
      </h3>
      <ul className="space-y-3"> 
        {category.skills.map((skill, skillIndex) => (
          <li
            key={skillIndex}
            className="flex items-center gap-3 text-sm text-muted-foreground dark:text-neutral-300" 
          >
            {skill.icon ? (
              <skill.icon className="w-4 h-4 text-primary flex-shrink-0" /> 
            ) : (
               <span className="w-4 h-4 inline-block flex-shrink-0" aria-hidden="true"></span>
            )}
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};