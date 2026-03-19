import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const reviews = [
  { textKey: 'reviews.1', authorKey: 'reviews.author1' },
  { textKey: 'reviews.2', authorKey: 'reviews.author2' },
  { textKey: 'reviews.3', authorKey: 'reviews.author3' },
];

const Stars = () => (
  <div className="flex items-center gap-0.5 mb-3">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star key={i} className="h-4 w-4 fill-brand-yellow text-brand-yellow" />
    ))}
  </div>
);

const Reviews = () => {
  const { t } = useLanguage();
  const { ref: headRef, isVisible: headVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  return (
    <section id="reviews" className="py-16 md:py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-10 reveal${headVisible ? ' reveal-visible' : ''}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{t('reviews.title')}</h2>
          <div className="w-12 h-1 bg-brand-yellow mx-auto rounded-full" />
        </div>

        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto"
        >
          {reviews.map((review, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl p-6 border border-border/40 shadow-soft card-hover reveal reveal-delay-${i + 1}${gridVisible ? ' reveal-visible' : ''}`}
            >
              <Stars />
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                "{t(review.textKey)}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-blue font-bold text-sm">
                  {t(review.authorKey).charAt(0)}
                </div>
                <span className="text-sm font-semibold text-foreground">{t(review.authorKey)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
