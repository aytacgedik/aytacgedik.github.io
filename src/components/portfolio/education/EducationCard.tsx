import React from "react";
import { FaGraduationCap  } from 'react-icons/fa'; 
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { type EducationData } from "@/types/portfolio"; 

interface EducationCardProps {
  education: EducationData;
  variants?: Variants; 
}

export const EducationCard: React.FC<EducationCardProps> = ({ education, variants }) => {
  return (
    <motion.div
      variants={variants}
      className={cn(
        "bg-card p-6 rounded-lg shadow-sm border border-border", 
        "transition-all duration-300 ease-in-out",
        "hover:shadow-md" 
      )}
    >
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        <div className="flex-shrink-0 mt-1">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/20">
            <FaGraduationCap className="w-6 h-6 text-primary" />
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-1">
            {education.degree}
          </h3>

          <p className="text-base font-medium text-primary mb-3">
            {education.institution}
          </p>

          {/* <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-4">
            {education.years && (
              <div className="flex items-center gap-1.5">
                <FaCalendarAlt className="w-3.5 h-3.5" />
                <span>{education.years}</span>
              </div>
            )}
            {education.location && (
               <div className="flex items-center gap-1.5">
                 <FaMapMarkerAlt className="w-3.5 h-3.5" />
                 <span>{education.location}</span>
               </div>
            )}
          </div> */}

          {(education.thesis || education.thesisDetail) && (
            <div className="mt-3 pt-3 border-t border-border">
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                {education.thesis && <strong className="font-medium not-italic text-foreground/80">{education.thesis}:</strong>} {education.thesisDetail}
              </p>
            </div>
          )}

          {education.coreSubjects && education.coreSubjects.length > 0 && (
            <div className="mt-4 pt-3 border-t border-border">
              <h4 className="text-sm font-medium text-foreground mb-2">Key Coursework:</h4>
              <div className="flex flex-wrap gap-2">
                {education.coreSubjects.map((subject, index) => (
                  <span
                    key={index}
                    className="bg-secondary text-secondary-foreground text-xs font-medium px-2.5 py-1 rounded-full"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};