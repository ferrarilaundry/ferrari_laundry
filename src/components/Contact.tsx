import React from 'react';
import { MapPin, Clock, Truck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactButtons from '@/components/ContactButtons';

const Contact = () => {
  const { t, language } = useLanguage();

  return (
    <section id="contact" className="py-16 md:py-20" style={{ background: 'linear-gradient(135deg, hsl(50 100% 61%) 0%, hsl(50 100% 78%) 60%, hsl(220 33% 97%) 100%)' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              {t('contact.title')}
            </h2>
            <p className="text-sm text-foreground/70">{t('contact.subtitle')}</p>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-2xl p-8 shadow-card border border-border/30">
            {/* Free Delivery Badge */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 text-brand-green text-sm font-semibold border border-brand-green/20">
                <Truck className="h-4 w-4" />
                {t('hero.freeDelivery')}
              </span>
            </div>

            {/* Phone Number */}
            <div className="text-center mb-6">
              <p className="text-xs text-muted-foreground mb-1">{t('contact.phone')}</p>
              <a
                href="tel:99930270"
                className="text-3xl md:text-4xl font-bold text-foreground hover:text-brand-red transition-colors"
                dir="ltr"
              >
                99930270
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="w-full max-w-md sm:max-w-none mx-auto">
              <ContactButtons className="justify-center" />
            </div>

            {/* Info Row */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-9 h-9 rounded-lg bg-muted/60 flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {language === 'en' ? 'Multiple Locations' : 'فروع متعددة'}
                    </p>
                    <p className="text-xs">
                      {language === 'en' ? 'Across Kuwait' : 'في جميع أنحاء الكويت'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-9 h-9 rounded-lg bg-muted/60 flex items-center justify-center shrink-0">
                    <Clock className="h-4 w-4 text-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t('contact.openTitle')}</p>
                    <p className="text-xs">{t('contact.openValue')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
