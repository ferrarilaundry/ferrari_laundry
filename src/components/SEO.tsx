import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical }) => {
    const { language, isRTL } = useLanguage();
    const dir = isRTL ? 'rtl' : 'ltr';

    // Base URL - In a real app, this should come from env or config. 
    // Using the domain implied by the prompt context or a placeholder.
    const siteUrl = 'https://ferrariexpress.com';

    // Structure Data (JSON-LD) for LocalBusiness
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Ferrari Express Laundry",
        "image": `${siteUrl}/logo.png`, // Assuming logo exists at root or assets
        "telephone": "+96599930270",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "Kuwait"
        },
        "priceRange": "$$",
        "description": description,
        "sameAs": [
            "https://wa.me/96599930270" // WhatsApp link
        ]
    };

    return (
        <Helmet>
            {/* HTML Attributes */}
            <html lang={language} dir={dir} />

            {/* Title & Description */}
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* Canonical & Hreflang */}
            {canonical && <link rel="canonical" href={canonical} />}
            <link rel="alternate" hrefLang="en-KW" href={`${siteUrl}`} />
            <link rel="alternate" hrefLang="ar-KW" href={`${siteUrl}`} />
            <link rel="alternate" hrefLang="x-default" href={`${siteUrl}`} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEO;
