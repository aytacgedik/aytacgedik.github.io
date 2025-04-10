import React from "react";
import Image from "next/image";
import { FaLink } from 'react-icons/fa';
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { type ProjectEntry } from "@/types/portfolio";
import { buttonVariants } from "@/components/ui/button"; 
import { Code } from "lucide-react"; 

interface ProjectCardProps {
  project: ProjectEntry;
  variants?: Variants; 
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, variants }) => {
  const ProjectIcon = project.icon || Code; 

  return (
    <motion.div
      variants={variants}
      className={cn(
        "flex flex-col bg-card rounded-lg border border-border shadow-sm overflow-hidden", 
        "transition-all duration-300 ease-in-out",
        "hover:shadow-md hover:-translate-y-1" 
      )}
    >
      {project.src && (
        <div className="aspect-video relative w-full overflow-hidden">
          <Image
            src={project.src}
            alt={`${project.name} screenshot`}
            fill 
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false} 
          />
        </div>
      )}

      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3 flex-1 min-w-0">
             <div className="flex-shrink-0">
                 <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/20">
                    <ProjectIcon className="w-4 h-4 text-primary" />
                 </div>
             </div>
            <h3 className="text-base sm:text-lg font-semibold text-card-foreground truncate" title={project.name}>
              {project.name}
            </h3>
          </div>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`View ${project.name} Project/Code`}
              aria-label={`View ${project.name} Project/Code`}
              className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "w-8 h-8 flex-shrink-0 text-muted-foreground hover:text-primary"
              )}
            >
              <FaLink className="w-4 h-4" />
            </a>
          )}
        </div>

        <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow"> 
          {project.description}
        </p>

        {project.details && project.details.length > 0 && (
          <div className="mb-4">
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              {project.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto pt-4 border-t border-border">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
            Technologies
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-secondary text-secondary-foreground text-xs font-medium px-2 py-0.5 rounded-full" 
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};