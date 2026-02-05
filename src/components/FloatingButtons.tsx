import React from 'react';
import { Phone, MessageCircle, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SocialIcon from '@/components/SocialIcon';

const FloatingButtons = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-center">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/96599930270"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground shadow-elevated flex items-center justify-center hover:scale-110 transition-transform duration-200 animate-pulse-soft"
        aria-label={t('nav.whatsapp')}
      >
        <MessageCircle className="h-6 w-6" />
      </a>

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
