import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.subscriptions': 'Subscriptions',
    'nav.branches': 'Branches',
    'nav.contact': 'Contact',
    'nav.callNow': 'Call Now',
    'nav.whatsapp': 'WhatsApp',

    // Hero
    'hero.headline': 'Professional Laundry & Dry Cleaning in Kuwait',
    'hero.subheadline': 'We care for your clothes like our own.',
    'hero.callNow': 'Call Now',
    'hero.whatsappChat': 'WhatsApp Chat',

    // Why Choose Us
    'why.title': 'Why Choose Us',
    'why.professional': 'Professional Cleaning',
    'why.fabricSafe': 'Fabric-Safe Care',
    'why.fast': 'Fast & Reliable Service',
    'why.trusted': 'Trusted by Kuwaiti Families',

    // Services
    'services.title': 'Our Services',
    'services.laundry': 'Laundry Service',
    'services.laundry.desc': 'Professional washing with premium detergents',
    'services.dryCleaning': 'Dry Cleaning',
    'services.dryCleaning.desc': 'Expert care for delicate fabrics',
    'services.ironing': 'Ironing & Pressing',
    'services.ironing.desc': 'Crisp, wrinkle-free finishing',
    'services.traditional': 'Traditional Wear Care',
    'services.traditional.desc': 'Specialized care for Dishdasha & Abaya',

    // Subscriptions
    'subscriptions.title': 'Flexible Subscriptions',
    'subscriptions.subtitle': 'Save More Every Month',
    'subscriptions.pay': 'Pay',
    'subscriptions.get': 'Get',
    'subscriptions.kd': 'KD',
    'subscriptions.subscribe': 'Call to Subscribe',
    'subscriptions.popular': 'Most Popular',

    // Branches
    'branches.title': 'Our Branches',
    'branches.subtitle': 'Find the nearest Ferrari Express Laundry branch in Kuwait.',
    'branches.callBranch': 'Call Branch',
    'branches.getDirections': 'Get Directions',

    // About
    'about.title': 'About Us',
    'about.description': 'Ferrari Express Laundry provides professional laundry and dry-cleaning services with care, precision, and trust. Our mission is to protect your clothes and deliver consistent quality to every customer.',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Call us or chat on WhatsApp for fast service.',
    'contact.callNow': 'Call Now',
    'contact.whatsapp': 'WhatsApp Chat',
    'contact.phone': 'Phone',

    // Footer
    'footer.description': 'Professional laundry and dry-cleaning services in Kuwait. We care for your clothes with precision and trust.',
    'footer.quickLinks': 'Quick Links',
    'footer.contactUs': 'Contact Us',
    'footer.followUs': 'Follow Us',
    'footer.rights': '© 2024 Ferrari Express Laundry – Kuwait. All rights reserved.',
  },
  ar: {
    // Header
    'nav.home': 'الرئيسية',
    'nav.services': 'خدماتنا',
    'nav.subscriptions': 'الاشتراكات',
    'nav.branches': 'الفروع',
    'nav.contact': 'تواصل معنا',
    'nav.callNow': 'اتصل الآن',
    'nav.whatsapp': 'واتساب',

    // Hero
    'hero.headline': 'غسيل وتنظيف جاف باحترافية في الكويت',
    'hero.subheadline': 'نعتني بملابسك كما لو كانت لنا',
    'hero.callNow': 'اتصل الآن',
    'hero.whatsappChat': 'تواصل عبر واتساب',

    // Why Choose Us
    'why.title': 'لماذا تختارنا',
    'why.professional': 'غسيل احترافي',
    'why.fabricSafe': 'عناية آمنة بالأقمشة',
    'why.fast': 'خدمة سريعة وموثوقة',
    'why.trusted': 'ثقة العائلات الكويتية',

    // Services
    'services.title': 'خدماتنا',
    'services.laundry': 'غسيل ملابس',
    'services.laundry.desc': 'غسيل احترافي بمنظفات فاخرة',
    'services.dryCleaning': 'تنظيف جاف',
    'services.dryCleaning.desc': 'عناية خاصة بالأقمشة الحساسة',
    'services.ironing': 'كي وطي',
    'services.ironing.desc': 'لمسة نهائية أنيقة بدون تجاعيد',
    'services.traditional': 'العناية بالملابس التقليدية',
    'services.traditional.desc': 'عناية متخصصة بالدشداشة والعباية',

    // Subscriptions
    'subscriptions.title': 'اشتراكات مرنة',
    'subscriptions.subtitle': 'وفّر أكثر كل شهر',
    'subscriptions.pay': 'ادفع',
    'subscriptions.get': 'تحصل على',
    'subscriptions.kd': 'د.ك',
    'subscriptions.subscribe': 'اشترك الآن',
    'subscriptions.popular': 'الأكثر شعبية',

    // Branches
    'branches.title': 'فروعنا',
    'branches.subtitle': 'اعثر على أقرب فرع لمصبغة فيراري إكسبرس في الكويت.',
    'branches.callBranch': 'اتصل بالفرع',
    'branches.getDirections': 'احصل على الاتجاهات',

    // About
    'about.title': 'من نحن',
    'about.description': 'تقدم مصبغة فيراري إكسبرس خدمات غسيل وتنظيف احترافية بعناية ودقة وثقة. هدفنا الحفاظ على جودة ملابسك وتقديم خدمة موثوقة باستمرار.',

    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'اتصل بنا أو تواصل عبر واتساب لخدمة سريعة.',
    'contact.callNow': 'اتصل الآن',
    'contact.whatsapp': 'تواصل عبر واتساب',
    'contact.phone': 'الهاتف',

    // Footer
    'footer.description': 'خدمات غسيل وتنظيف احترافية في الكويت. نعتني بملابسك بدقة وثقة.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.contactUs': 'تواصل معنا',
    'footer.followUs': 'تابعنا',
    'footer.rights': '© 2024 مصبغة فيراري إكسبرس – الكويت. جميع الحقوق محفوظة.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
