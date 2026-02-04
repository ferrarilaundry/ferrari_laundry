import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.jpeg';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: '1000+', label: { en: 'Happy Families', ar: 'عائلة سعيدة' } },
    { icon: Clock, value: '10+', label: { en: 'Years Experience', ar: 'سنوات خبرة' } },
    { icon: Award, value: '5⭐', label: { en: 'Customer Rating', ar: 'تقييم العملاء' } },
    { icon: Shield, value: '100%', label: { en: 'Quality Guaranteed', ar: 'جودة مضمونة' } },
  ];

  const { language } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image/Logo Side */}
            <div className="relative">
              <div className="relative bg-primary rounded-3xl p-8 md:p-12 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231F2A7A' fill-opacity='0.3'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2.5L25 18l-5 2.5z'/%3E%3C/g%3E%3C/svg%3E")`,
                  }} />
                </div>
                <img
                  src={logo}
                  alt={language === 'en' ? "Ferrari Express Laundry - Professional Cleaning" : "مصبغة فيراري إكسبريس - غسيل احترافي"}
                  className="relative z-10 w-full max-w-sm mx-auto rounded-2xl shadow-elevated"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-green/20 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-red/20 rounded-full blur-xl" />
            </div>

            {/* Content Side */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {t('about.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t('about.description')}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label.en}
                      className="bg-secondary/50 rounded-xl p-4 text-center hover:shadow-card transition-all duration-300"
                    >
                      <Icon className="h-6 w-6 mx-auto mb-2 text-brand-blue" />
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label[language]}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
