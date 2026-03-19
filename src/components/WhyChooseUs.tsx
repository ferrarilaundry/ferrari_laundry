import React from 'react';
import { Sparkles, Shield, Zap, Heart, Truck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const features = [
  { icon: Sparkles, titleKey: 'why.professional', iconClass: 'text-brand-blue', bgClass: 'bg-brand-blue/10' },
  { icon: Shield,   titleKey: 'why.fabricSafe',   iconClass: 'text-brand-green', bgClass: 'bg-brand-green/10' },
  { icon: Zap,      titleKey: 'why.fast',          iconClass: 'text-brand-red',  bgClass: 'bg-brand-red/10' },
  { icon: Heart,    titleKey: 'why.trusted',       iconClass: 'text-brand-blue', bgClass: 'bg-brand-yellow/30' },
  { icon: Truck,    titleKey: 'why.freeDelivery',  iconClass: 'text-brand-blue', bgClass: 'bg-brand-blue/10' },
];

const WhyChooseUs = () => {
  const { t } = useLanguage();
  const { ref: headRef, isVisible: headVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-10 reveal${headVisible ? ' reveal-visible' : ''}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            {t('why.title')}
          </h2>
          <div className="w-12 h-1 bg-brand-yellow mx-auto rounded-full" />
        </div>

        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const delay = `reveal-delay-${Math.min(idx + 1, 4)}`;
            return (
              <div
                key={feature.titleKey}
                className={`group bg-muted/40 rounded-xl p-5 border border-border/40 hover:border-brand-yellow/50 card-hover text-center reveal ${delay}${gridVisible ? ' reveal-visible' : ''}`}
              >
                <div className={`w-11 h-11 rounded-xl ${feature.bgClass} flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-200`}>
                  <Icon className={`h-5 w-5 ${feature.iconClass}`} />
                </div>
                <h3 className="text-sm font-semibold text-foreground leading-tight">
                  {t(feature.titleKey)}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
