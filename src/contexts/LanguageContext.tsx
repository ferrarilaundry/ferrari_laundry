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
    'hero.brandName': 'Welcome to Ferrari Express Laundry',
    'hero.headline': 'Professional Laundry & Dry Cleaning in Kuwait',
    'hero.subheadline': 'We care for your clothes like our own.',
    'hero.callNow': 'Call Now',
    'hero.whatsappChat': 'WhatsApp Chat',
    'hero.freeDelivery': '🚚 Free Delivery Across Kuwait',

    // Why Choose Us
    'why.title': 'Why Choose Us',
    'why.professional': 'Professional Cleaning',
    'why.fabricSafe': 'Fabric-Safe Care',
    'why.fast': 'Fast & Reliable Service',
    'why.trusted': 'Trusted by Kuwaiti Families',
    'why.freeDelivery': 'Free Pickup & Delivery',
    'why.freeDelivery.desc': 'Available across all areas of Kuwait.',

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
    'subscriptions.freeDelivery': '✔ Free pickup & delivery included',
    'subscriptions.kd': 'KD',
    'subscriptions.subscribe': 'Call to Subscribe',
    'subscriptions.popular': 'Most Popular',

    // Branches
    'branches.title': 'Our Central Branch',
    'branches.subtitle': 'Find the nearest Ferrari Express Laundry branch in Kuwait.',
    'branches.sabah.name': 'Sabah Al-Salem Branch',
    'branches.sabah.address': 'Beside American School, Sabah Al-Salem',
    'branches.call': 'Call Branch',
    'branches.directions': 'Get Directions',

    // About
    'about.title': 'About Us',
    'about.description': 'Ferrari Express Central Laundry was founded in 2002 with a vision to provide Kuwait with professional, high-quality, and affordable laundry services. Over the years, we have expanded our operations and earned the trust of families and businesses across Kuwait.',
    'about.description2': 'With decades of experience in commercial laundry operations, customer service, and logistics, we focus on innovation, sustainability, and excellence to ensure every garment receives the care it deserves.',

    'about.mission.title': 'Mission',
    'about.mission.body': 'To deliver reliable, high-quality, and sustainable laundry solutions that exceed customer expectations.',

    'about.vision.title': 'Vision',
    'about.vision.body': 'To be the most trusted and innovative laundry brand in Kuwait, leading the market through excellence and eco-friendly practices.',

    'about.values.title': 'Core Values',
    'about.values.quality': 'Quality',
    'about.values.reliability': 'Reliability',
    'about.values.integrity': 'Integrity',
    'about.values.hygiene': 'Hygiene',
    'about.values.sustainability': 'Sustainability',

    'about.stats.kilos': '21.6M+ Kilos Washed',
    'about.stats.families': '750K+ Happy Families',
    'about.stats.staff': '250+ Expert Staff',
    'about.stats.vehicles': '70+ Delivery Vehicles',

    // Reviews
    'reviews.title': 'Customer Reviews',
    'reviews.1': 'Excellent service and fast delivery!',
    'reviews.2': 'Best laundry in Kuwait. Highly recommended.',
    'reviews.3': 'Clothes come back perfectly clean and fresh.',
    'reviews.author1': 'Sarah M.',
    'reviews.author2': 'Ahmad K.',
    'reviews.author3': 'Fatima A.',

    // Business
    'business.title': 'Business & Contracts',
    'business.description': 'We provide laundry solutions for companies, hotels, salons, and businesses across Kuwait.',
    'business.bulk': 'Bulk Laundry',
    'business.contracts': 'Corporate Contracts',
    'business.delivery': 'Reliable Delivery',
    'business.pricing': 'Custom Pricing',

    // Header - Add About
    'nav.about': 'About Us',

    // Offers
    'offers.title': 'Special Offers',
    'offers.subtitle': 'Save more on your laundry with exclusive deals',
    'offers.bonus': 'Subscription Bonuses',
    'offers.bonus.desc': 'Pay less and get more value with our flexible monthly plans.',
    'offers.seasonal': 'Seasonal Offers',
    'offers.seasonal.desc': 'Special discounts on winter wear and traditional clothing.',
    'offers.family': 'Family Discounts',
    'offers.family.desc': 'Exclusive bulk offers designed for families.',
    'offers.helper': 'Offers vary by season. Contact us for current deals.',
    'offers.callNow': 'Call Now',
    'offers.whatsapp': 'WhatsApp Chat',

    // FAQs
    'faqs.title': 'Frequently Asked Questions',
    'faqs.q1': 'Do you offer pickup and delivery?',
    'faqs.a1': 'Yes, we provide fast and reliable pickup and delivery across Kuwait.',
    'faqs.q2': 'How long does laundry take?',
    'faqs.a2': 'Standard service takes 24–48 hours depending on the garment type.',
    'faqs.q3': 'Do you clean traditional Kuwaiti wear?',
    'faqs.a3': 'Yes, we specialize in Dishdasha, Abaya, and delicate fabrics.',
    'faqs.q4': 'Can I order by phone or WhatsApp?',
    'faqs.a4': 'Yes, simply call or message us anytime.',

    // Jobs
    'jobs.title': 'Careers',
    'jobs.subtitle': 'Join the Ferrari Express Laundry team',
    'jobs.operator': 'Laundry Operator',
    'jobs.driver': 'Delivery Driver',
    'jobs.service': 'Customer Service',
    'jobs.salary': 'Competitive Salary',
    'jobs.env': 'Friendly Environment',
    'jobs.growth': 'Growth Opportunities',
    'jobs.apply': 'Apply via WhatsApp',
    'jobs.callHr': 'Call HR',

    // Header Navigation
    'nav.offers': 'Offers',
    'nav.faqs': 'FAQs',
    'nav.jobs': 'Jobs',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Call us or chat on WhatsApp for fast service.',
    'contact.callNow': 'Call Now',
    'contact.whatsapp': 'WhatsApp Chat',
    'contact.phone': 'Phone',
    'contact.openTitle': 'Open 24 Hours',
    'contact.openValue': 'All Days',

    // Footer
    'footer.description': 'Professional laundry and dry-cleaning services in Kuwait. We care for your clothes with precision and trust.',
    'footer.quickLinks': 'Quick Links',
    'footer.contactUs': 'Contact Us',
    'footer.followUs': 'Follow Us',
    'footer.rights': '© 2024 Ferrari Express Laundry – Kuwait. All rights reserved.',
    'social.instagram': 'Follow us on Instagram',
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
    'hero.brandName': 'مرحباً بكم في مصبغة فيراري إكسبريس',
    'hero.headline': 'غسيل وتنظيف جاف باحترافية في الكويت',
    'hero.subheadline': 'نعتني بملابسك كما لو كانت لنا',
    'hero.callNow': 'اتصل الآن',
    'hero.whatsappChat': 'تواصل عبر واتساب',
    'hero.freeDelivery': '🚚 توصيل مجاني في جميع أنحاء الكويت',

    // Why Choose Us
    'why.title': 'لماذا تختارنا',
    'why.professional': 'غسيل احترافي',
    'why.fabricSafe': 'عناية آمنة بالأقمشة',
    'why.fast': 'خدمة سريعة وموثوقة',
    'why.trusted': 'ثقة العائلات الكويتية',
    'why.freeDelivery': 'استلام وتوصيل مجاني',
    'why.freeDelivery.desc': 'متوفر في جميع مناطق الكويت.',

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
    'subscriptions.freeDelivery': '✔ يشمل استلام وتوصيل مجاني',
    'subscriptions.kd': 'د.ك',
    'subscriptions.subscribe': 'اشترك الآن',
    'subscriptions.popular': 'الأكثر شعبية',

    // Branches
    'branches.title': 'فروعنا',
    'branches.subtitle': 'اعثر على أقرب فرع لمصبغة فيراري إكسبرس في الكويت.',
    'branches.sabah.name': 'فرع صباح السالم',
    'branches.sabah.address': 'بجوار المدرسة الأمريكية، صباح السالم',
    'branches.call': 'اتصل بالفرع',
    'branches.directions': 'الاتجاهات',

    // About
    'about.title': 'من نحن',
    'about.description': 'تأسست مصبغة فيراري إكسبرس المركزية عام 2002 برؤية تهدف إلى تقديم خدمات غسيل احترافية عالية الجودة وبأسعار مناسبة في دولة الكويت. وعلى مر السنين، توسعت عملياتنا واكتسبنا ثقة العائلات والشركات في مختلف مناطق الكويت.',
    'about.description2': 'نمتلك خبرة طويلة في عمليات الغسيل التجاري، وخدمة العملاء، والخدمات اللوجستية، مع تركيز دائم على الابتكار والاستدامة والتميز، لضمان العناية بكل قطعة ملابس بأعلى معايير الجودة.',

    'about.mission.title': 'رسالتنا',
    'about.mission.body': 'تقديم حلول غسيل موثوقة وعالية الجودة ومستدامة تتجاوز توقعات عملائنا.',

    'about.vision.title': 'رؤيتنا',
    'about.vision.body': 'أن نكون العلامة التجارية الأكثر ثقة وابتكارًا في مجال الغسيل بالكويت، والرواد في التميز والممارسات الصديقة للبيئة.',

    'about.values.title': 'قيمنا',
    'about.values.quality': 'الجودة',
    'about.values.reliability': 'الموثوقية',
    'about.values.integrity': 'النزاهة',
    'about.values.hygiene': 'النظافة',
    'about.values.sustainability': 'الاستدامة',

    'about.stats.kilos': '21.6 مليون كجم مغسول',
    'about.stats.families': '750 ألف+ عميل سعيد',
    'about.stats.staff': '250+ موظف خبير',
    'about.stats.vehicles': '70+ مركبة توصيل',

    // Reviews
    'reviews.title': 'آراء العملاء',
    'reviews.1': 'خدمة ممتازة وسريعة جدًا!',
    'reviews.2': 'أفضل مغسلة في الكويت.',
    'reviews.3': 'الملابس ترجع نظيفة ومعطرة بشكل رائع.',
    'reviews.author1': 'سارة م.',
    'reviews.author2': 'أحمد ك.',
    'reviews.author3': 'فاطمة ع.',

    // Business
    'business.title': 'الأعمال والعقود',
    'business.description': 'نوفر خدمات غسيل احترافية للشركات والفنادق والصالونات في جميع أنحاء الكويت.',
    'business.bulk': 'غسيل كميات كبيرة',
    'business.contracts': 'عقود الشركات',
    'business.delivery': 'توصيل موثوق',
    'business.pricing': 'أسعار مخصصة',

    // Header - Add About
    'nav.about': 'من نحن',

    // Offers
    'offers.title': 'عروض خاصة',
    'offers.subtitle': 'وفّر أكثر على خدمات الغسيل مع عروضنا الحصرية',
    'offers.bonus': 'مكافآت الاشتراكات',
    'offers.bonus.desc': 'ادفع أقل واحصل على قيمة أكبر مع باقاتنا الشهرية المرنة.',
    'offers.seasonal': 'عروض موسمية',
    'offers.seasonal.desc': 'خصومات مميزة على الملابس الشتوية والملابس التقليدية.',
    'offers.family': 'خصومات العائلات',
    'offers.family.desc': 'عروض خاصة للكميات الكبيرة تناسب جميع أفراد العائلة.',
    'offers.helper': 'تختلف العروض حسب الموسم. تواصل معنا لمعرفة العروض الحالية.',
    'offers.callNow': 'اتصل الآن',
    'offers.whatsapp': 'محادثة واتساب',

    // FAQs
    'faqs.title': 'الأسئلة الشائعة',
    'faqs.q1': 'هل توفرون خدمة الاستلام والتوصيل؟',
    'faqs.a1': 'نعم، نوفر خدمة استلام وتوصيل سريعة في جميع مناطق الكويت.',
    'faqs.q2': 'كم يستغرق وقت الغسيل؟',
    'faqs.a2': 'عادة من 24 إلى 48 ساعة حسب نوع الملابس.',
    'faqs.q3': 'هل تغسلون الملابس الكويتية التقليدية؟',
    'faqs.a3': 'نعم، متخصصون في الدشداشة والعباية والأقمشة الحساسة.',
    'faqs.q4': 'هل يمكن الطلب عبر الهاتف أو واتساب؟',
    'faqs.a4': 'نعم، يمكنكم التواصل معنا في أي وقت.',

    // Jobs
    'jobs.title': 'الوظائف',
    'jobs.subtitle': 'انضم إلى فريق فيراري إكسبرس للغسيل',
    'jobs.operator': 'عامل غسيل',
    'jobs.driver': 'سائق توصيل',
    'jobs.service': 'موظف خدمة عملاء',
    'jobs.salary': 'رواتب مجزية',
    'jobs.env': 'بيئة عمل مريحة',
    'jobs.growth': 'فرص للتطوير',
    'jobs.apply': 'التقديم عبر واتساب',
    'jobs.callHr': 'الاتصال بالموارد البشرية',

    // Header Navigation
    'nav.offers': 'العروض',
    'nav.faqs': 'الأسئلة الشائعة',
    'nav.jobs': 'الوظائف',

    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'اتصل بنا أو تواصل عبر واتساب لخدمة سريعة.',
    'contact.callNow': 'اتصل الآن',
    'contact.whatsapp': 'تواصل عبر واتساب',
    'contact.phone': 'الهاتف',
    'contact.openTitle': 'نفتح 24 ساعة',
    'contact.openValue': 'طوال أيام الأسبوع',

    // Footer
    'footer.description': 'خدمات غسيل وتنظيف احترافية في الكويت. نعتني بملابسك بدقة وثقة.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.contactUs': 'تواصل معنا',
    'footer.followUs': 'تابعنا',
    'footer.rights': '© 2024 مصبغة فيراري إكسبرس – الكويت. جميع الحقوق محفوظة.',
    'social.instagram': 'تابعنا على إنستغرام',
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
