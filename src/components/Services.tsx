import React from 'react';
import { Shirt, Wind, Sparkles, Crown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Shirt,
      titleKey: 'services.laundry',
      descKey: 'services.laundry.desc',
      gradient: 'from-brand-blue/20 to-brand-blue/5',
    },
    {
      icon: Wind,
      titleKey: 'services.dryCleaning',
      descKey: 'services.dryCleaning.desc',
      gradient: 'from-brand-green/20 to-brand-green/5',
    },
    {
      icon: Sparkles,
      titleKey: 'services.ironing',
      descKey: 'services.ironing.desc',
      gradient: 'from-brand-red/20 to-brand-red/5',
    },
    {
      icon: Crown,
      titleKey: 'services.traditional',
      descKey: 'services.traditional.desc',
      gradient: 'from-brand-yellow/40 to-brand-yellow/10',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-4">
          {t('services.title')}
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-12" />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.titleKey}
                className={`group relative bg-gradient-to-br ${service.gradient} rounded-2xl p-8 border border-border/30 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 border-8 border-foreground rounded-full" />
                </div>

                <div className="relative z-10 flex items-start gap-5">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-background shadow-soft flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-foreground" />
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
