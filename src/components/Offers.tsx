import React from 'react';
import { Tag, Sparkles, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactButtons from '@/components/ContactButtons';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Offers = () => {
    const { t } = useLanguage();
    const { ref: headRef, isVisible: headVisible } = useScrollAnimation();
    const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

    const offers = [
        {
            icon: Sparkles,
            title: 'offers.bonus',
            desc: 'offers.bonus.desc',
            accent: 'text-brand-yellow',
        },
        {
            icon: Tag,
            title: 'offers.seasonal',
            desc: 'offers.seasonal.desc',
            accent: 'text-brand-red',
        },
        {
            icon: Users,
            title: 'offers.family',
            desc: 'offers.family.desc',
            accent: 'text-brand-green',
        },
    ];

    return (
        <section id="offers" className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div
                    ref={headRef as React.RefObject<HTMLDivElement>}
                    className={`text-center mb-12 reveal${headVisible ? ' reveal-visible' : ''}`}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        {t('offers.title')}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t('offers.subtitle')}
                    </p>
                </div>

                {/* Offers Grid */}
                <div
                    ref={gridRef as React.RefObject<HTMLDivElement>}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12"
                >
                    {offers.map((offer, index) => {
                        const Icon = offer.icon;
                        const delay = `reveal-delay-${index + 1}`;
                        return (
                            <div
                                key={index}
                                className={`bg-card rounded-2xl p-8 border border-border/50 shadow-card card-hover group reveal ${delay}${gridVisible ? ' reveal-visible' : ''}`}
                            >
                                <div className={`w-14 h-14 rounded-full bg-background flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 ${offer.accent}`}>
                                    <Icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{t(offer.title)}</h3>
                                <p className="text-muted-foreground mb-6">{t(offer.desc)}</p>
                                <div className="w-full h-1 bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className={`offers-cta w-full flex flex-col items-center gap-4 reveal${headVisible ? ' reveal-visible' : ''}`}>
                    <ContactButtons layout="default" className="justify-center" />
                    <p className="text-sm text-muted-foreground opacity-80 mt-2">
                        {t('offers.helper')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Offers;
