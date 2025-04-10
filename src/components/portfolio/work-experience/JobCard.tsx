import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { cn } from "@/lib/utils";
import { type ExperienceEntry } from "@/types/portfolio"; 

interface JobCardProps {
  job: ExperienceEntry;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className={cn(
        "p-4 sm:p-5 rounded-md border border-border bg-card", 
        "transition-shadow duration-200 ease-in-out hover:shadow-md" 
      )}
    >
      <div className="flex items-start gap-3 mb-2">
        {job.icon && (
          <div className="flex-shrink-0 mt-1">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/20">
               <job.icon className="w-4 h-4 text-primary" />
            </div>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-card-foreground leading-tight">
            {job.role}
          </h3>
          <p className="text-sm font-medium text-primary">
            {job.company}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mb-4 pl-[44px]">
         <div className="flex items-center gap-1.5"> <FaCalendarAlt className="w-3 h-3"/> <span>{job.dates}</span> </div>
         <div className="flex items-center gap-1.5"> <FaMapMarkerAlt className="w-3 h-3"/> <span>{job.location}</span> </div>
       </div>

      <p className="text-sm text-muted-foreground mb-4 leading-relaxed pl-[44px]"> 
        {job.description}
      </p>

      {job.achievements && job.achievements.length > 0 && (
        <div className="mb-4 pl-[44px]"> 
          <p className="text-sm font-medium text-foreground mb-1.5">Key Achievements:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            {job.achievements.map((achievement, achIndex) => (
              <li key={achIndex}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}

      {job.technologies && job.technologies.length > 0 && (
        <div className="pl-[44px]"> 
           <p className="text-sm font-medium text-foreground mb-2">Technologies Used:</p>
           <div className="flex flex-wrap gap-1.5"> 
             {job.technologies.map((tech, techIndex) => (
               <span
                 key={techIndex}
                 className="bg-secondary text-secondary-foreground text-xs font-medium px-2 py-0.5 rounded-full" 
               >
                 {tech}
                </span>
             ))}
           </div>
        </div>
      )}
    </div>
  );
};