import React from 'react';
import SEO from '@/components/SEO';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
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
      description: "Ferrari Express Laundry offers professional laundry, dry cleaning, ironing, and traditional wear care across Kuwait. Call 99930270."
    },
    ar: {
      title: "مصبغة فيراري إكسبريس – غسيل و دراي كلين احترافي في الكويت",
      description: "مصبغة فيراري إكسبريس تقدم خدمات غسيل وكي ودراي كلين باحترافية في جميع مناطق الكويت. اتصل الآن 99930270."
    }
  };

  const { title, description } = seoContent[language];

  return (
    <div className="min-h-screen">
      <SEO
        title={title}
        description={description}
        canonical="https://ferrariexpress.com/"
      />
      <Header />
      <main>
        <Hero />
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
