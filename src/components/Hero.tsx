import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactButtons from '@/components/ContactButtons';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Hero = () => {
  const { t, language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="home"
      ref={ref as React.RefObject<HTMLElement>}
      aria-labelledby="hero-heading"
      className="relative min-h-screen w-screen flex flex-col justify-center items-center pt-20 overflow-hidden"
      style={{
        background: 'linear-gradient(150deg, hsl(50 100% 61%) 0%, hsl(50 100% 75%) 40%, hsl(220 33% 97%) 100%)',
      }}
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(222 37% 19% / 0.5) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Brand Name */}
          <p
            className={`text-4xl md:text-5xl font-extrabold text-brand-red tracking-wide mb-3 reveal${isVisible ? ' reveal-visible' : ''}`}
            aria-label="Ferrari Express Laundry"
          >
            {t('hero.brandName')}
          </p>

          {/* Divider */}
          <div className="w-16 h-1 bg-brand-blue/30 mx-auto rounded-full mb-5" />

          {/* Main H1 Headline – SEO keyword-optimized */}
          <h1
            id="hero-heading"
            className={`text-2xl md:text-3xl font-bold text-brand-blue mb-4 leading-snug reveal reveal-delay-1${isVisible ? ' reveal-visible' : ''}`}
          >
            {t('hero.headline')}
          </h1>

          {/* Subheadline */}
          <p
            className={`text-base md:text-lg text-foreground/70 mb-8 font-medium reveal reveal-delay-2${isVisible ? ' reveal-visible' : ''}`}
          >
            {t('hero.subheadline')}
          </p>

          {/* CTA Buttons */}
          <div
            className={`w-full max-w-md sm:max-w-none mx-auto reveal reveal-delay-3${isVisible ? ' reveal-visible' : ''}`}
          >
            <ContactButtons className="justify-center" />
          </div>

          {/* Free Delivery Badge */}
          <div className={`flex justify-center mt-6 reveal reveal-delay-4${isVisible ? ' reveal-visible' : ''}`}>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 text-brand-blue text-sm font-semibold shadow-sm border border-brand-blue/10 backdrop-blur-sm">
              {t('hero.freeDelivery')}
            </span>
          </div>

          {/* Trust Badge */}
          <p className={`mt-8 text-foreground/50 text-sm font-medium reveal reveal-delay-4${isVisible ? ' reveal-visible' : ''}`}>
            ⭐⭐⭐⭐⭐ {language === 'en' ? 'Trusted by 750,000+ Kuwaiti Families' : 'موثوق من قِبَل أكثر من 750,000 عائلة كويتية'}
          </p>

          {/* Hidden SEO image with alt text */}
          <img
            src="/logo.png"
            alt={language === 'en' ? 'laundry service in Kuwait' : 'خدمة غسيل في الكويت'}
            className="sr-only"
            width="1"
            height="1"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-14 sm:h-20 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full block"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="hsl(220 33% 97%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
