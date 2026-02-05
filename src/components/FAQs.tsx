import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
    return (
        <div className="border border-border/50 rounded-xl bg-card overflow-hidden transition-all duration-300 hover:shadow-md">
            <button
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 bg-card hover:bg-muted/50 transition-colors"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <div className="flex items-center gap-3">
                    <HelpCircle className={`h-5 w-5 text-brand-yellow shrink-0 transition-colors ${isOpen ? 'text-brand-red' : ''}`} />
                    <span className="font-bold text-lg text-foreground">{question}</span>
                </div>
                <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="px-6 pb-6 pt-2 text-muted-foreground leading-relaxed border-t border-border/10">
                    <div className="flex gap-3">
                        <MessageCircle className="h-5 w-5 text-brand-blue shrink-0 mt-1" />
                        <p>{answer}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FAQs = () => {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        { q: 'faqs.q1', a: 'faqs.a1' },
        { q: 'faqs.q2', a: 'faqs.a2' },
        { q: 'faqs.q3', a: 'faqs.a3' },
        { q: 'faqs.q4', a: 'faqs.a4' },
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faqs" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        {t('faqs.title')}
                    </h2>
                </div>

                {/* Accordion */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={t(faq.q)}
                            answer={t(faq.a)}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQs;
