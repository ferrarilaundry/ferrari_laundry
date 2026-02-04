import React from 'react';
import { MapPin, Phone, Navigation } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Branches = () => {
  const { t, language } = useLanguage();

  const branches = [
    {
      name: { en: 'Salmiya Branch', ar: 'فرع السالمية' },
      address: { en: 'Salem Al-Mubarak Street, Salmiya', ar: 'شارع سالم المبارك، السالمية' },
      phone: '99930270',
      mapUrl: 'https://maps.google.com/?q=29.3369,47.9547',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27851.05!2d47.9547!3d29.3369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDIwJzEyLjgiTiA0N8KwNTcnMTYuOSJF!5e0!3m2!1sen!2skw!4v1234567890',
    },
    {
      name: { en: 'Hawally Branch', ar: 'فرع حولي' },
      address: { en: 'Beirut Street, Hawally', ar: 'شارع بيروت، حولي' },
      phone: '99930270',
      mapUrl: 'https://maps.google.com/?q=29.3375,48.0286',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27850.12!2d48.0286!3d29.3375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDIwJzE1LjAiTiA0OMKwMDEnNDMuMCJF!5e0!3m2!1sen!2skw!4v1234567890',
    },
    {
      name: { en: 'Farwaniya Branch', ar: 'فرع الفروانية' },
      address: { en: 'Habib Munawer Street, Farwaniya', ar: 'شارع حبيب مناور، الفروانية' },
      phone: '99930270',
      mapUrl: 'https://maps.google.com/?q=29.2769,47.9586',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27857.12!2d47.9586!3d29.2769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsMTYnMzYuOCJOIDQ3wrA1NyczMS4wIkU!5e0!3m2!1sen!2skw!4v1234567890',
    },
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

        {/* Branches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {branches.map((branch, index) => (
            <div
              key={branch.name.en}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 border border-border/30"
            >
              {/* Map Embed */}
              <div className="h-48 bg-muted relative overflow-hidden">
                <iframe
                  src={branch.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={branch.name[language]}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Branch Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-cta" />
                  {branch.name[language]}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {branch.address[language]}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="cta" size="sm" className="flex-1" asChild>
                    <a href={`tel:${branch.phone}`} className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      {t('branches.callBranch')}
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a 
                      href={branch.mapUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Navigation className="h-4 w-4" />
                      {t('branches.getDirections')}
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
