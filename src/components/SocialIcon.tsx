import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialIconProps {
    href: string;
    icon: LucideIcon;
    label: string;
    className?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon: Icon, label, className = '' }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
        flex items-center justify-center 
        w-[44px] h-[44px] lg:w-[40px] lg:h-[40px] 
        rounded-full 
        bg-background hover:bg-muted 
        text-[#E1306C] 
        shadow-sm hover:shadow-md 
        transition-all duration-300 
        hover:scale-105 
        focus:outline-none focus:ring-2 focus:ring-primary/50
        ${className}
      `}
            aria-label={label}
            title={label}
        >
            <Icon className="w-6 h-6 lg:w-5 lg:h-5" />
        </a>
    );
};

export default SocialIcon;
