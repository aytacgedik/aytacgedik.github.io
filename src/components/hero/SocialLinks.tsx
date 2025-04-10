import React from 'react';
import { SOCIAL_LINKS_DATA, SocialLinkItem } from './hero.constants'; 

interface SocialLinksProps {
  links?: SocialLinkItem[]; 
  className?: string; 
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  links = SOCIAL_LINKS_DATA, 
  className = "flex justify-center space-x-6 text-3xl text-gray-600 dark:text-gray-400 motion-safe:animate-fade-in-up motion-safe:animation-delay-800"
}) => {
  return (
    <div className={className} data-testid="social-links-container">
      {links.map(({ href, label, Icon, hoverClass, testid }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          data-testid={testid}
          className={`${hoverClass} transition duration-300 ease-in-out motion-safe:hover:scale-110 motion-reduce:transition-none motion-reduce:transform-none`}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};