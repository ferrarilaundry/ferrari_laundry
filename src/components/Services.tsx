import React from 'react';
import { Shirt, Wind, Sparkles, Crown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  {
    icon: Shirt,
    titleKey: 'services.laundry',
    descKey: 'services.laundry.desc',
    color: 'text-brand-blue',
    bg: 'bg-brand-blue/10',
  },
  {
    icon: Wind,
    titleKey: 'services.dryCleaning',
    descKey: 'services.dryCleaning.desc',
    color: 'text-brand-green',
    bg: 'bg-brand-green/10',
  },
  {
    icon: Sparkles,
    titleKey: 'services.ironing',
    descKey: 'services.ironing.desc',
    color: 'text-brand-red',
    bg: 'bg-brand-red/10',
  },
  {
    icon: Crown,
    titleKey: 'services.traditional',
    descKey: 'services.traditional.desc',
    color: 'text-brand-blue',
    bg: 'bg-brand-yellow/30',
  },
];

const Services = () => {
  const { t } = useLanguage();
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/30" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div ref={headingRef as React.RefObject<HTMLDivElement>} className={`reveal${headingVisible ? ' reveal-visible' : ''}`}>
          <h2 id="services-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-4">
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-12" />
        </div>

        {/* Services Grid */}
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            const delay = `reveal-delay-${Math.min(idx + 1, 4)}`;
            return (
              <div
                key={service.titleKey}
                className={`group relative bg-white rounded-2xl p-8 border border-border/30 overflow-hidden card-hover reveal ${delay}${gridVisible ? ' reveal-visible' : ''}`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5" aria-hidden="true">
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 border-8 border-foreground rounded-full" />
                </div>

                <div className="relative z-10 flex items-start gap-5">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${service.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    aria-label={t(service.titleKey)}
                    role="img"
                  >
                    <Icon className={`h-7 w-7 ${service.color}`} aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(service.descKey)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
