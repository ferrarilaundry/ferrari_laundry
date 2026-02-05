import React from 'react';
import { Globe, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ContactButtons from '@/components/ContactButtons';
import SocialIcon from '@/components/SocialIcon';

const Hero = () => {
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-screen flex items-center justify-center gradient-hero overflow-hidden pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231F2A7A' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-brand-blue/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-brand-green/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-brand-red/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Mobile Only Elements: Language Switch & Instagram */}
      <div className="md:hidden absolute top-24 left-0 right-0 flex justify-between items-center px-6 z-20">
        <Button
          variant="default"
          size="sm"
          onClick={toggleLanguage}
          className="rounded-full bg-white/90 hover:bg-white text-brand-blue shadow-md border border-brand-blue/10 h-11 px-4 text-base font-medium backdrop-blur-sm"
        >
          <Globe className="h-5 w-5 mr-2" />
          {language === 'en' ? 'العربية' : 'English'}
        </Button>

        <SocialIcon
          href="https://www.instagram.com/ferrarilaundries_kw"
          icon={Instagram}
          label={t('social.instagram')}
          className="w-11 h-11 bg-white/90 hover:bg-white text-[#E1306C] shadow-md border border-brand-blue/10 backdrop-blur-sm"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-12 md:mt-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand Name */}
          <p className="text-3xl md:text-5xl font-bold text-brand-blue tracking-wider mb-6 animate-slide-up" aria-label="Ferrari Express Laundry">
            {t('hero.brandName')}
          </p>


          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground mb-6 animate-slide-up leading-tight">
            {t('hero.headline')}
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-10 animate-slide-up font-medium" style={{ animationDelay: '0.2s' }}>
            {t('hero.subheadline')}
          </p>

          {/* CTA Buttons */}
          {/* Free Delivery Badge */}
          <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-brand-blue text-sm md:text-base font-bold shadow-md backdrop-blur-sm border border-brand-blue/10">
              {t('hero.freeDelivery')}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="w-full max-w-md sm:max-w-none mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <ContactButtons className="justify-center" />
          </div>

          {/* Trust Badge */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-foreground/60 text-sm font-medium">
              ⭐⭐⭐⭐⭐ Trusted by 10000+ Kuwaiti Families
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
