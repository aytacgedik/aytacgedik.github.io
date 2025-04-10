import React from "react";
import { ProjectCard } from "./ProjectCard"; 
import { type ProjectEntry } from "@/types/portfolio"; 
import { motion } from "framer-motion";

interface ProjectsProps {
  projectData: ProjectEntry[];
  id?: string;
}

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


export const Projects: React.FC<ProjectsProps> = ({ projectData, id = "projects" }) => {
  if (!projectData || projectData.length === 0) {
    return null;
  }

  return (
    <section id={id} className="py-16 md:py-20 bg-muted/30 dark:bg-neutral-900/50"> 

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} 
            >
                {projectData.map((project) => (
                    <ProjectCard
                        key={project.name} 
                        project={project}
                        variants={itemVariants}
                    />
                ))}
            </motion.div>
    </section>
  );
};