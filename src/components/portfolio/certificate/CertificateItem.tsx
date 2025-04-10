import React from "react";
import { FaCertificate as DefaultCertIcon, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type Certificate } from "@/types/portfolio"; 
import { buttonVariants } from "@/components/ui/button"; 

interface CertificateItemProps {
  certificate: Certificate;
  variants?: any; 
}

export const CertificateItem: React.FC<CertificateItemProps> = ({ certificate: cert, variants }) => {
  const Icon = cert.icon || DefaultCertIcon;
  const fallbackIconColor = "text-muted-foreground";
  const specificIconColor = "text-primary";

  return (
    <motion.li
      variants={variants}
      className={cn(
        "bg-card p-4 sm:p-5 rounded-md border border-border",
        "transition-all duration-200 ease-in-out",
        "hover:bg-accent/50" 
      )}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 mt-1">
           <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border border-primary/20">
              <Icon className={cn("w-5 h-5", cert.icon ? specificIconColor : fallbackIconColor)} />
           </div>
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-base font-semibold text-card-foreground mb-0.5 truncate" title={cert.name}>
            {cert.name}
          </p>

          {cert.issuer && (
            <p className="text-sm text-muted-foreground">
              Issued by {cert.issuer}
            </p>
          )}

          {cert.url && cert.url.startsWith('http') && (
            <div className="mt-2">
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "link", size: "sm" }),
                  "inline-flex items-center gap-1.5 px-0 h-auto text-primary hover:text-primary/80" 
                )}
              >
                <FaExternalLinkAlt className="w-3 h-3" />
                <span>Verify Credential</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.li>
  );
};