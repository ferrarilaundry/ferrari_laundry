import React from 'react';
import { MapPin, Phone, Navigation } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Branches = () => {
  const { t, language } = useLanguage();

  const branches = [
    {
      id: 'sabah-al-salem',
      nameKey: 'branches.sabah.name',
      addressKey: 'branches.sabah.address',
      phone: '99930270',
      // Using a generic coordinate embed for the location "Beside American School, Sabah Al-Salem" (29.2401° N, 48.0674° E approx, but using user provided coords)
      // User provided: @29.0956573,48.1299912
      mapUrl: 'https://www.google.com/maps/dir//Ferrari+Express+Laundry+%2F%D9%85%D8%B5%D8%A8%D8%BA%D8%A9+%D9%81%D9%8A%D8%B1%D8%A7%D8%B1%D9%8A+%D8%A5%D9%83%D8%B3%D8%A8%D8%B1%D9%8A%D8%B3,+738H%2B7Q6,+Beside+American+school,+Sabah+Al+Salem%E2%80%AD/@29.0956573,48.1299912,15z',
      embedUrl: 'https://maps.google.com/maps?q=29.0956573,48.1299912&hl=es;z=14&output=embed'
    }
  ];

  return (
    <section id="branches" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('branches.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('branches.subtitle')}
          </p>
        </div>

        {/* Branches Grid - Centered Single Card */}
        <div className="max-w-xl mx-auto">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 border border-border/30"
            >
              {/* Map Embed */}
              <div className="h-64 bg-muted relative overflow-hidden">
                <iframe
                  src={branch.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t(branch.nameKey)}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Branch Info */}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center justify-center gap-2">
                  <MapPin className="h-6 w-6 text-cta" />
                  {t(branch.nameKey)}
                </h3>
                <p className="text-muted-foreground mb-8 text-lg">
                  {t(branch.addressKey)}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="cta" size="lg" className="flex-1 w-full" asChild>
                    <a href={`tel:${branch.phone}`} className="flex items-center justify-center gap-2">
                      <Phone className="h-5 w-5" />
                      {t('branches.call')}
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1 w-full" asChild>
                    <a
                      href={branch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Navigation className="h-5 w-5" />
                      {t('branches.directions')}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
