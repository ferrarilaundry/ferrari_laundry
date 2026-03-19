import React from 'react';
import { Phone, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SocialIcon from '@/components/SocialIcon';

const FloatingButtons = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-center">
      {/* WhatsApp Button with outer pulse ring */}
      <div className="relative flex items-center justify-center">
        {/* Outer pulse ring */}
        <span className="absolute w-14 h-14 rounded-full bg-whatsapp opacity-40 animate-ping pointer-events-none" />
        <a
          href="https://wa.me/96599930270"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground shadow-elevated flex items-center justify-center hover:scale-110 transition-transform duration-200 z-10"
          aria-label={t('nav.whatsapp')}
        >
          {/* Official WhatsApp SVG Logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="h-7 w-7 fill-white"
          >
            <path d="M16.003 2C8.28 2 2 8.28 2 16.004c0 2.46.657 4.863 1.903 6.97L2 30l7.236-1.876A14.02 14.02 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.674a11.68 11.68 0 0 1-5.953-1.628l-.427-.252-4.294 1.114 1.14-4.17-.278-.44A11.674 11.674 0 0 1 4.327 16c0-6.435 5.24-11.672 11.676-11.672 6.435 0 11.672 5.237 11.672 11.672 0 6.432-5.237 11.674-11.672 11.674zm6.388-8.74c-.35-.177-2.077-1.025-2.4-1.14-.32-.117-.554-.177-.787.177-.234.35-.905 1.14-1.108 1.374-.203.232-.407.26-.756.086-.35-.176-1.478-.545-2.815-1.737-1.04-.927-1.743-2.072-1.946-2.422-.204-.35-.022-.54.153-.714.157-.157.35-.408.526-.612.175-.204.232-.35.35-.583.115-.234.057-.44-.03-.612-.085-.175-.786-1.898-1.077-2.598-.284-.682-.573-.59-.786-.6-.203-.01-.436-.013-.668-.013a1.283 1.283 0 0 0-.93.437c-.32.35-1.216 1.19-1.216 2.9s1.246 3.36 1.42 3.594c.175.232 2.45 3.74 5.935 5.244.829.358 1.478.572 1.983.732.833.265 1.59.227 2.19.138.668-.1 2.077-.85 2.37-1.67.292-.82.292-1.522.204-1.67-.087-.146-.32-.232-.668-.407z" />
          </svg>
        </a>
      </div>

      {/* Instagram Button - Smaller size, lower priority */}
      <SocialIcon
        href="https://www.instagram.com/ferrarilaundries_kw"
        icon={Instagram}
        label={t('social.instagram')}
        className="w-10 h-10 bg-white text-[#E1306C] shadow-lg hover:scale-110"
      />

      {/* Call Button */}
      <a
        href="tel:99930270"
        className="w-14 h-14 rounded-full bg-cta text-cta-foreground shadow-elevated flex items-center justify-center hover:scale-110 transition-transform duration-200"
        aria-label={t('nav.callNow')}
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;
