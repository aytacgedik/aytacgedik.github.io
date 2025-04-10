import React from "react";
import {
  Mail, 
  MapPin,
  Send, 
} from "lucide-react";
import { personalInfo } from "@/lib/data/portfolio"; 
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button"; 
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SectionHeader } from "./SectionHeader";

interface ContactMethod {
  key: string;
  label: string;
  ariaLabel: string;
  value: string | null; 
  href?: string;
  icon: React.ComponentType<React.ComponentProps<"svg">>;
  isLink: boolean;
}

export const Contact: React.FC<{ id?: string }> = ({ id = "contact" }) => {
  if (!personalInfo) {
    return null;
  }

  const contactMethods: ContactMethod[] = [
    {
      key: "email",
      label: "Email",
      ariaLabel: `Email ${personalInfo.name} at ${personalInfo.email}`,
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      isLink: true,
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      ariaLabel: `${personalInfo.name}'s LinkedIn Profile`,
      value: personalInfo.linkedin.replace(/^(https?:\/\/)?(www\.)?/, ''),
      href: personalInfo.linkedin,
      icon: FaLinkedin,
      isLink: true,
    },
    {
      key: "github",
      label: "GitHub",
      ariaLabel: `${personalInfo.name}'s GitHub Profile`,
      value: personalInfo.github.replace(/^(https?:\/\/)?(www\.)?/, ''), 
      href: personalInfo.github,
      icon: FaGithub,
      isLink: true,
    },
    ...(personalInfo.location ? [{
      key: "location",
      label: "Location",
      ariaLabel: `Location: ${personalInfo.location}`,
      value: personalInfo.location,
      icon: MapPin,
      isLink: false,
    }] : []),
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <section
      id={id}
      className="py-16 md:py-24 bg-muted/50 dark:bg-neutral-900/50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionHeader
            title="Let's Connect"
            icon={Send} 
            className="justify-center px-0 border-none pb-0 mb-4 md:mb-5" 
          />
          <p className="text-base sm:text-lg text-muted-foreground mb-10 md:mb-14 max-w-xl mx-auto leading-relaxed">
            I'm actively seeking new opportunities and collaborations. Whether
            you have a question, a project proposal, or just want to connect,
            feel free to reach out!
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6" 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {contactMethods.map((method) => (
            <motion.div key={method.key} variants={itemVariants}>
              {method.isLink ? (
                <a
                  href={method.href}
                  target={method.key !== 'email' ? "_blank" : undefined} 
                  rel={method.key !== 'email' ? "noopener noreferrer" : undefined}
                  aria-label={method.ariaLabel}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }), 
                    "w-full justify-start gap-3 text-left h-auto py-3" 
                  )}
                >
                  <method.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="flex flex-col">
                    <span className="text-sm font-medium text-muted-foreground">{method.label}</span>
                    <span className="text-sm text-foreground truncate" title={method.value ?? undefined}>{method.value}</span>
                  </span>
                </a>
              ) : (
                <div
                  aria-label={method.ariaLabel}
                   className={cn(
                    "flex w-full items-center gap-3 rounded-md border border-input bg-background px-4 py-3 text-left text-sm h-auto", 
                   )}
                >
                  <method.icon className="w-5 h-5 text-primary flex-shrink-0" />
                   <span className="flex flex-col">
                    <span className="text-sm font-medium text-muted-foreground">{method.label}</span>
                    <span className="text-sm text-foreground truncate" title={method.value ?? undefined}>{method.value}</span>
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};