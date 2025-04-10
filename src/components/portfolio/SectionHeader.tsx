import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  icon?: React.ComponentType<any>;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  icon: Icon,
  className,
}) => (
  <div
    className={cn(
      "flex items-center gap-3 mb-6 md:mb-10 px-4 border-b border-border pb-4", 
      className
    )}
  >
    {Icon && <Icon className="w-6 h-6 text-primary flex-shrink-0" />} 
    <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight"> 
      {title}
    </h2>
  </div>
);