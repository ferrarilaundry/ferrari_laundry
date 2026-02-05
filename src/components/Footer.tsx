import React from 'react';
import { Phone, MessageCircle, MapPin, Globe, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.jpeg';
import SocialIcon from '@/components/SocialIcon';

const Footer = () => {
  const { t, language, setLanguage } = useLanguage();

  const quickLinks = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.subscriptions', href: '#subscriptions' },
    { key: 'nav.branches', href: '#branches' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img
              src={logo}
              alt="Ferrari Express Laundry"
              className="h-16 w-auto mb-4 rounded-lg"
            />
            <p className="text-background/70 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">
              {t('footer.contactUs')}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:99930270"
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="h-4 w-4" />
                  <span dir="ltr">99930270</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/96599930270"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>{t('nav.whatsapp')}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <MapPin className="h-4 w-4" />
                <span>{language === 'en' ? 'Kuwait' : 'الكويت'}</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <SocialIcon
                href="https://www.instagram.com/ferrarilaundries_kw"
                icon={Instagram}
                label={t('social.instagram')}
                className="bg-background/10 hover:bg-background text-background hover:text-[#E1306C]"
              />
            </div>
          </div>

          {/* Language Switch */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">
              {language === 'en' ? 'Language' : 'اللغة'}
            </h4>
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm border border-background/20 rounded-lg px-4 py-2"
            >
              <Globe className="h-4 w-4" />
              {language === 'en' ? 'العربية' : 'English'}
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 text-center">
          <p className="text-background/50 text-sm">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
