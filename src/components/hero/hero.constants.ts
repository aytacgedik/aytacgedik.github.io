import { personalInfo } from '@/lib/data/portfolio';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { type IconType } from 'react-icons';

export const UI_TEXT = {
  viewWork: 'View My Work',
  getInTouch: 'Get In Touch',
  linkedInAria: `Visit ${personalInfo.name}'s LinkedIn Profile`,
  githubAria: `Visit ${personalInfo.name}'s GitHub Profile`,
  emailAria: `Send an email to ${personalInfo.name}`,
  scrollDownAria: 'Scroll down to experience section',
  splineLoadingAria: 'Loading interactive 3D background',
  heroHeadlineId: 'hero-headline',
};

export const SOCIAL_LINKS_DATA = [
  {
    href: personalInfo.linkedin,
    label: UI_TEXT.linkedInAria,
    Icon: FaLinkedin,
    hoverClass: 'hover:text-blue-700 dark:hover:text-blue-500',
    testid: 'social-linkedin',
  },
  {
    href: personalInfo.github,
    label: UI_TEXT.githubAria,
    Icon: FaGithub,
    hoverClass: 'hover:text-gray-900 dark:hover:text-white',
    testid: 'social-github',
  },
  {
    href: `mailto:${personalInfo.email}`,
    label: UI_TEXT.emailAria,
    Icon: FaEnvelope,
    hoverClass: 'hover:text-red-600 dark:hover:text-red-400',
    testid: 'social-email',
  },
];

export interface SocialLinkItem {
    href: string;
    label: string;
    Icon: IconType; 
    hoverClass: string;
    testid: string;
}