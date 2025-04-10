import { type IconType } from 'react-icons';

// Base Interfaces
export interface ExperienceEntry {
  company: string;
  role: string;
  dateTitle: string;
  dates: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  icon?: IconType;
}

export interface Skill {
  name: string;
  icon?: IconType;
}

export interface SkillCategoryData {
  title: string;
  skills: Skill[];
}

export interface Certificate {
  name: string;
  issuer?: string;
  url: string | null;
  icon?: IconType;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  pitch: string;
  email: string;
  linkedin: string; 
  github: string; 
  summary: string;
}

export interface EducationData {
  degree: string;
  institution: string;
  location: string;
  years?: string;
  thesis?: string;
  thesisDetail?: string;
  coreSubjects?: string[];
}

export interface ProjectEntry {
  name: string;
  description: string;
  technologies: string[];
  details?: string[];
  url?: string;
  icon?: IconType;
  src: string;
}