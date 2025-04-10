import React from "react";
import { CertificateItem } from "./CertificateItem"; 
import { FaCertificate as DefaultCertIcon } from 'react-icons/fa';
import { certificates } from "@/lib/data/portfolio"; 
import { motion } from "framer-motion";
import { SectionHeader } from "../SectionHeader";

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
  hidden: { x: -20, opacity: 0 }, 
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};


export const Certificates: React.FC<{id?: string}> = ({ id = "certificates" }) => {
  if (!certificates || certificates.length === 0) {
    return null;
  }

  return (
    <section id={id} className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4"> 
            <SectionHeader title="Certifications & Awards" icon={DefaultCertIcon} className="px-0 border-none pb-0 mb-8 md:mb-10" />

            <motion.ul
                className="space-y-4" 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {certificates.map((cert, index) => (
                    <CertificateItem
                        key={index} 
                        certificate={cert}
                        variants={itemVariants}
                    />
                ))}
            </motion.ul>
         </div>
    </section>
  );
};