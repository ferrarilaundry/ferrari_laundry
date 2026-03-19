import React from 'react';
import { Award, Users, Truck, UserCheck, Target, Lightbulb, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.jpeg';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import StatCounter from '@/components/StatCounter';

const About = () => {
  const { t } = useLanguage();
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: bottomRef, isVisible: bottomVisible } = useScrollAnimation();

  const stats = [
    { icon: Award, label: 'about.stats.kilos' },
    { icon: Users, label: 'about.stats.families' },
    { icon: UserCheck, label: 'about.stats.staff' },
    { icon: Truck, label: 'about.stats.vehicles' },
  ];

  const values = [
    'about.values.quality',
    'about.values.reliability',
    'about.values.integrity',
    'about.values.hygiene',
    'about.values.sustainability',
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Main Introduction */}
        <div
          ref={introRef as React.RefObject<HTMLDivElement>}
          className={`max-w-3xl mx-auto text-center mb-12 reveal${introVisible ? ' reveal-visible' : ''}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            {t('about.title')}
          </h2>
          <div className="w-12 h-1 bg-brand-yellow mx-auto rounded-full mb-5" />
          <div className="text-base text-muted-foreground leading-relaxed space-y-3">
            <p>{t('about.description')}</p>
            <p>{t('about.description2')}</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div
          ref={statsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-14"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            const delay = `reveal-delay-${Math.min(idx + 1, 4)}`;
            return (
              <div
                key={stat.label}
                className={`bg-muted/50 rounded-xl p-5 text-center border border-border/40 hover:border-brand-yellow/50 card-hover reveal ${delay}${statsVisible ? ' reveal-visible' : ''}`}
              >
                <div className="w-10 h-10 bg-brand-yellow/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon className="h-5 w-5 text-brand-blue" />
                </div>
                <StatCounter label={t(stat.label)} className="w-full" />
              </div>
            );
          })}

        </div>

        {/* Mission / Vision + Image */}
        <div
          ref={bottomRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto mb-14"
        >

          {/* Image */}
          <div className={`flex justify-center reveal${bottomVisible ? ' reveal-visible' : ''}`}>
            <div className="bg-brand-yellow/10 rounded-2xl p-6 border border-brand-yellow/30">
              <img
                src={logo}
                alt="Ferrari Express Laundry"
                className="w-full max-w-xs mx-auto rounded-xl shadow-card"
              />
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="space-y-5">
            <div className={`bg-muted/40 rounded-xl p-6 border border-border/40 card-hover reveal reveal-delay-1${bottomVisible ? ' reveal-visible' : ''}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-brand-red/10 rounded-lg flex items-center justify-center">
                  <Target className="h-5 w-5 text-brand-red" />
                </div>
                <h3 className="text-lg font-bold">{t('about.mission.title')}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{t('about.mission.body')}</p>
            </div>

            <div className={`bg-muted/40 rounded-xl p-6 border border-border/40 card-hover reveal reveal-delay-2${bottomVisible ? ' reveal-visible' : ''}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                  <Lightbulb className="h-5 w-5 text-brand-blue" />
                </div>
                <h3 className="text-lg font-bold">{t('about.vision.title')}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{t('about.vision.body')}</p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-6">{t('about.values.title')}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {values.map((key, idx) => (
              <div
                key={key}
                className={`flex items-center gap-2 p-3 bg-card rounded-lg border border-border/40 card-hover reveal reveal-delay-${Math.min(idx + 1, 4)}${bottomVisible ? ' reveal-visible' : ''}`}
              >
                <CheckCircle2 className="h-4 w-4 text-brand-green shrink-0" />
                <span className="text-sm font-semibold text-foreground">{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
