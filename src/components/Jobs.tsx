import React from 'react';
import { Briefcase, Truck, HeartHandshake, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Jobs = () => {
    const { t } = useLanguage();

    const jobs = [
        {
            role: 'jobs.operator',
            icon: Briefcase,
        },
        {
            role: 'jobs.driver',
            icon: Truck,
        },
        {
            role: 'jobs.service',
            icon: HeartHandshake,
        },
    ];

    const benefits = ['jobs.salary', 'jobs.env', 'jobs.growth'];

    return (
        <section id="jobs" className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        {t('jobs.title')}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t('jobs.subtitle')}
                    </p>
                </div>

                {/* Jobs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
                    {jobs.map((job, index) => {
                        const Icon = job.icon;
                        return (
                            <div
                                key={index}
                                className="bg-card rounded-2xl p-8 border border-border/50 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red via-brand-yellow to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                                    <Icon className="h-8 w-8 text-foreground group-hover:text-brand-red transition-colors duration-300" />
                                </div>

                                <h3 className="text-xl font-bold mb-6">{t(job.role)}</h3>

                                <div className="flex flex-wrap justify-center gap-2 mb-8">
                                    {benefits.map((benefit, i) => (
                                        <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">
                                            {t(benefit)}
                                        </span>
                                    ))}
                                </div>

                                <Button className="w-full mt-auto group" variant="outline" asChild>
                                    <a href="https://wa.me/96599930270" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                        {t('jobs.apply')}
                                        <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </a>
                                </Button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Jobs;
