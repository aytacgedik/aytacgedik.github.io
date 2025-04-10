import { NavItem } from "@/components/layout/navbar";
import {
    BookOpen,
    Award,
    Briefcase,
    Brain,
    Home,
    ContactIcon,
  } from "lucide-react";

export const navItems: NavItem[] = [
    { name: "Home", url: "#home", icon: Home },
    { name: "Experience", url: "#experience", icon: Briefcase },
    { name: "Skills", url: "#skills", icon: Brain },
    { name: "Education", url: "#education", icon: BookOpen },
    { name: "Certificates", url: "#certificates", icon: Award },
    { name: "Contact", url: "#contact", icon: ContactIcon },
  ];