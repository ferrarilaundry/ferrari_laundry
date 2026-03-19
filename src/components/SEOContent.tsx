import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const SEOContent = () => {
  const { language } = useLanguage();

  return (
    <section
      className="py-12 bg-white"
      aria-label={language === 'en' ? 'About Our Laundry Services in Kuwait' : 'عن خدمات الغسيل في الكويت'}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {language === 'en' ? (
          <div className="prose prose-sm sm:prose mx-auto text-foreground/70 text-center">
            <p className="text-base leading-relaxed">
              Ferrari Express Laundry is Kuwait's trusted destination for professional{' '}
              <strong>laundry service in Kuwait</strong>. We specialize in{' '}
              <strong>dry cleaning Kuwait</strong> residents rely on — delivering{' '}
              <strong>laundry pickup and delivery Kuwait</strong>-wide with speed and precision.
              Whether it's everyday clothes, delicate fabrics, or traditional Kuwaiti wear like
              Dishdasha and Abaya, our expert team ensures every garment is returned fresh,
              clean, and perfectly pressed. Serving all areas of Kuwait since 2002.
            </p>
            <nav aria-label="Jump to section" className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="#services"
                className="text-brand-blue font-semibold hover:underline transition-colors"
              >
                Our Services
              </a>
              <span className="text-foreground/30" aria-hidden="true">|</span>
              <a
                href="#subscriptions"
                className="text-brand-blue font-semibold hover:underline transition-colors"
              >
                Subscription Plans
              </a>
              <span className="text-foreground/30" aria-hidden="true">|</span>
              <a
                href="#contact"
                className="text-brand-blue font-semibold hover:underline transition-colors"
              >
                Contact Us
              </a>
            </nav>
          </div>
        ) : (
          <div className="prose prose-sm sm:prose mx-auto text-foreground/70 text-center" dir="rtl">
            <p className="text-base leading-relaxed">
              مصبغة فيراري إكسبريس هي وجهتك الأولى الموثوقة لـ{' '}
              <strong>مصبغة الكويت</strong> الاحترافية. نتخصص في خدمات{' '}
              <strong>غسيل ملابس الكويت</strong> ودراي كلين بجودة عالية، مع توفير{' '}
              <strong>دراي كلين الكويت</strong> وخدمة استلام وتوصيل مجانية لجميع مناطق الكويت.
              سواء كانت ملابس يومية أو أقمشة حساسة أو الملابس الكويتية التقليدية كالدشداشة والعباية،
              فريقنا المتخصص يضمن عودة ملابسك نظيفة وعطرة ومكوّاة بإتقان. نخدم الكويت منذ عام 2002.
            </p>
            <nav aria-label="انتقل إلى قسم" className="mt-4 flex flex-wrap justify-center gap-4 text-sm" dir="rtl">
              <a
                href="#services"
                className="text-brand-blue font-semibold hover:underline transition-colors"
              >
                خدماتنا
              </a>
              <span className="text-foreground/30" aria-hidden="true">|</span>
              <a
                href="#subscriptions"
                className="text-brand-blue font-semibold hover:underline transition-colors"
              >
                باقات الاشتراك
              </a>
              <span className="text-foreground/30" aria-hidden="true">|</span>
              <a
                href="#contact"
                className="text-brand-blue font-semibold hover:underline transition-colors"
              >
                تواصل معنا
              </a>
            </nav>
          </div>
        )}
      </div>
    </section>
  );
};

export default SEOContent;
