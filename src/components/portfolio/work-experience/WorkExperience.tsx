import React from "react";
import { JobCard } from "./JobCard";
import { Timeline } from "@/components/ui/timeline";
import { featuredWork, projects } from "@/lib/data/portfolio";
import { Briefcase, Code } from "lucide-react";
import {
  AnimatedTestimonials,
  ProjectDisplayData,
} from "@/components/ui/animated-testimonials";

const prepareTimelineData = (
  jobs: typeof featuredWork,
  projectData: ProjectDisplayData[]
) => {
  const jobItems = jobs.map((job) => ({
    title: job.dateTitle,
    content: <JobCard job={job} />,
    icon: job.icon || Briefcase,
    date: job.dateTitle,
  }));

  const projectsItem = {
    title: "Personal Projects Showcase",
    content: (
      <div className="bg-card border border-border rounded-lg p-4 sm:p-6">
        <p className="text-sm text-muted-foreground mb-4 text-center sm:text-left">
          A few projects I&apos;ve built or contributed to significantly.
        </p>
        <AnimatedTestimonials projects={projectData} autoplay={true} />
      </div>
    ),
    icon: Code,
    date: "Various",
  };

  return [...jobItems, projectsItem];
};

export const WorkExperience: React.FC<{ id?: string }> = ({
  id = "experience",
}) => {
  const timelineData = prepareTimelineData(featuredWork, projects);

  if (!timelineData || timelineData.length === 0) {
    return null;
  }

  return (
    <section id={id} className="py-16 md:py-20 bg-background">
      <Timeline data={timelineData} />
    </section>
  );
};
