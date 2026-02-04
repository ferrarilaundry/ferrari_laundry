import React from 'react';
import { Sparkles, Shield, Zap, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Sparkles,
      titleKey: 'why.professional',
      color: 'brand-blue',
    },
    {
      icon: Shield,
      titleKey: 'why.fabricSafe',
      color: 'brand-green',
    },
    {
      icon: Zap,
      titleKey: 'why.fast',
      color: 'brand-red',
    },
    {
      icon: Heart,
      titleKey: 'why.trusted',
      color: 'brand-yellow',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-12">
          {t('why.title')}
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.titleKey}
                className="group relative bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 gradient-card border border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-8 w-8 text-${feature.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground">
                  {t(feature.titleKey)}
                </h3>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-${feature.color}/5 rounded-bl-[100px] rounded-tr-2xl -z-10`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
