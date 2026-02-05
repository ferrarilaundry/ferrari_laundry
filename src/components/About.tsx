import React from 'react';
import { Award, Users, Clock, Shield, Target, Lightbulb, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.jpeg';

const About = () => {
  const { t, language } = useLanguage();

  const stats = [
    { icon: Users, label: 'about.stats.families' },
    { icon: Clock, label: 'about.stats.experience' },
    { icon: Award, label: 'about.stats.rating' },
    { icon: Shield, label: 'about.stats.quality' },
  ];

  const values = [
    'about.values.quality',
    'about.values.reliability',
    'about.values.integrity',
    'about.values.hygiene',
    'about.values.sustainability',
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Main Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('about.title')}
          </h2>
          <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-4">
            <p>{t('about.description')}</p>
            <p>{t('about.description2')}</p>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Mission */}
          <div className="bg-secondary/20 rounded-2xl p-8 border border-border/50 hover:shadow-card transition-all duration-300">
            <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="h-6 w-6 text-brand-red" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t('about.mission.title')}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.mission.body')}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-secondary/20 rounded-2xl p-8 border border-border/50 hover:shadow-card transition-all duration-300">
            <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6">
              <Lightbulb className="h-6 w-6 text-brand-blue" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t('about.vision.title')}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.vision.body')}
            </p>
          </div>
        </div>

        {/* Core Values & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-primary rounded-3xl p-8 md:p-12 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231F2A7A' fill-opacity='0.3'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2.5L25 18l-5 2.5z'/%3E%3C/g%3E%3C/svg%3E")`,
                }} />
              </div>
              <img
                src={logo}
                alt="Ferrari Express Laundry"
                className="relative z-10 w-full max-w-sm mx-auto rounded-2xl shadow-elevated"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-green/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-red/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Values Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold mb-8">{t('about.values.title')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((key) => (
                <div key={key} className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50 shadow-sm hover:translate-x-1 transition-transform">
                  <CheckCircle2 className="h-5 w-5 text-brand-green shrink-0" />
                  <span className="font-semibold text-foreground">{t(key)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Updated Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            // The value is part of the translation string now, so we split or just display the whole string as the "value"
            // Actually user requested: "10,000+ Happy Families" as the string. 
            // So we can display the Icon and the Translated String.
            // But usually stats have a Value and a Label. 
            // The provided translations combine them: 'about.stats.families': '10,000+ Happy Families'
            // I will render the Icon and the Translated Text.
            return (
              <div
                key={stat.label}
                className="bg-secondary/50 rounded-2xl p-6 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Icon className="h-6 w-6 text-brand-blue" />
                </div>
                <p className="text-lg md:text-xl font-bold text-foreground leading-tight">
                  {t(stat.label)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
