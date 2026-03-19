import React from 'react';
import { Package, FileText, Truck, Tag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const features = [
  { icon: Package, key: 'business.bulk' },
  { icon: FileText, key: 'business.contracts' },
  { icon: Truck, key: 'business.delivery' },
  { icon: Tag, key: 'business.pricing' },
];

const Business = () => {
  const { t } = useLanguage();

  return (
    <section id="business" className="py-16 md:py-20 bg-brand-blue" style={{ background: 'hsl(222 37% 19%)' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Text Side */}
          <div>
            <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-yellow text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">
              B2B
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t('business.title')}
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              {t('business.description')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map(({ icon: Icon, key }) => (
                <div key={key} className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-brand-yellow/20 flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-brand-yellow" />
                  </div>
                  <span className="text-sm font-semibold text-white">{t(key)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative card */}
          <div className="hidden md:flex justify-center">
            <div className="w-64 h-64 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-4 p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-yellow/20 flex items-center justify-center">
                <Package className="h-8 w-8 text-brand-yellow" />
              </div>
              <p className="text-white font-bold text-lg">Enterprise Laundry</p>
              <p className="text-white/50 text-xs">Kuwait-wide service for all business types</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
