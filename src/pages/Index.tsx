import React from 'react';
import SEO from '@/components/SEO';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SEOContent from '@/components/SEOContent';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import Subscriptions from '@/components/Subscriptions';
import Branches from '@/components/Branches';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import Offers from '@/components/Offers';
import FAQs from '@/components/FAQs';
import Jobs from '@/components/Jobs';

const Index = () => {
  const { language } = useLanguage();

  const seoContent = {
    en: {
      title: "Professional Laundry & Dry Cleaning in Kuwait | Ferrari Express Laundry",
      description: "Ferrari Express Laundry – Professional laundry service, dry cleaning, and free pickup & delivery across Kuwait. Call 99930270. Serving Kuwait since 2002."
    },
    ar: {
      title: "مصبغة فيراري إكسبريس – غسيل ودراي كلين احترافي في الكويت",
      description: "مصبغة فيراري إكسبريس – خدمات غسيل ملابس ودراي كلين واستلام وتوصيل مجاني في جميع مناطق الكويت. اتصل الآن 99930270. نخدمكم منذ 2002."
    }
  };

  const { title, description } = seoContent[language];

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <SEO
        title={title}
        description={description}
        canonical="https://ferrariexpress.com/"
      />
      <Header />
      <main id="main-content">
        <Hero />
        <SEOContent />
        <WhyChooseUs />
        <Services />
        <Subscriptions />
        <Offers />
        <Branches />
        <About />
        <FAQs />
        <Jobs />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
