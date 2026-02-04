import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ContactButtons from '@/components/ContactButtons';

const Contact = () => {
  const { t, language } = useLanguage();

  return (
    <section id="contact" className="py-16 md:py-24 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-foreground/80">
              {t('contact.subtitle')}
            </p>
          </div>

          {/* Contact Card */}
          <div className="bg-background rounded-3xl p-8 md:p-12 shadow-elevated">
            {/* Phone Number */}
            <div className="text-center mb-8">
              <p className="text-muted-foreground mb-2">{t('contact.phone')}</p>
              <a
                href="tel:99930270"
                className="text-4xl md:text-5xl font-bold text-foreground hover:text-cta transition-colors"
                dir="ltr"
              >
                99930270
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="w-full max-w-md sm:max-w-none mx-auto">
              <ContactButtons className="justify-center" />
            </div>

            {/* Additional Info */}
            <div className="mt-10 pt-8 border-t border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      {language === 'en' ? 'Multiple Locations' : 'فروع متعددة'}
                    </p>
                    <p className="text-sm">
                      {language === 'en' ? 'Across Kuwait' : 'في جميع أنحاء الكويت'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      {language === 'en' ? 'Open Daily' : 'مفتوح يومياً'}
                    </p>
                    <p className="text-sm">
                      {language === 'en' ? '8:00 AM - 10:00 PM' : '8:00 صباحاً - 10:00 مساءً'}
                    </p>
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
