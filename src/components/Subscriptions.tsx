import React from 'react';
import { Phone, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Subscriptions = () => {
  const { t, isRTL } = useLanguage();

  const plans = [
    { pay: 20, get: 25, popular: false },
    { pay: 30, get: 40, popular: true },
    { pay: 50, get: 65, popular: false },
  ];

  return (
    <section id="subscriptions" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('subscriptions.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('subscriptions.subtitle')}
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.pay}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? 'bg-foreground text-background shadow-elevated scale-105'
                  : 'bg-card border border-border shadow-card hover:shadow-elevated'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cta text-cta-foreground px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Star className="h-4 w-4 fill-current" />
                  {t('subscriptions.popular')}
                </div>
              )}

              {/* Plan Content */}
              <div className="text-center">
                {/* Pay */}
                <p className={`text-lg mb-2 ${plan.popular ? 'text-background/70' : 'text-muted-foreground'}`}>
                  {t('subscriptions.pay')}
                </p>
                <p className="text-4xl md:text-5xl font-extrabold mb-1">
                  {plan.pay}
                  <span className="text-lg font-medium ms-1">{t('subscriptions.kd')}</span>
                </p>

                {/* Divider */}
                <div className={`w-16 h-0.5 mx-auto my-6 ${plan.popular ? 'bg-primary' : 'bg-border'}`} />

                {/* Get */}
                <p className={`text-lg mb-2 ${plan.popular ? 'text-background/70' : 'text-muted-foreground'}`}>
                  {t('subscriptions.get')}
                </p>
                <p className={`text-4xl md:text-5xl font-extrabold mb-8 ${plan.popular ? 'text-primary' : 'text-brand-green'}`}>
                  {plan.get}
                  <span className="text-lg font-medium ms-1">{t('subscriptions.kd')}</span>
                </p>

                {/* CTA Button */}
                <Button
                  variant={plan.popular ? 'hero' : 'cta'}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a href="tel:99930270" className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    {t('subscriptions.subscribe')}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;
