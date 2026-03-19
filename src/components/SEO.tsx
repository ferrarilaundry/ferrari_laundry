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

    const siteUrl = 'https://ferrariexpress.com';

    const keywords = language === 'en'
        ? 'laundry service kuwait, dry cleaning kuwait, laundry pickup and delivery kuwait, ferrari express laundry, professional laundry kuwait'
        : 'مصبغة الكويت, غسيل ملابس الكويت, دراي كلين الكويت, مصبغة فيراري, خدمة غسيل في الكويت';

    // Full LocalBusiness structured data schema
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#business`,
        "name": "Ferrari Express Laundry",
        "alternateName": "مصبغة فيراري إكسبريس",
        "url": siteUrl,
        "logo": `${siteUrl}/logo.png`,
        "image": `${siteUrl}/og-image.png`,
        "telephone": "+96599930270",
        "priceRange": "$$",
        "description": language === 'en'
            ? "Professional laundry service, dry cleaning, ironing and free pickup & delivery across Kuwait."
            : "خدمات غسيل ملابس ودراي كلين واستلام وتوصيل مجاني في جميع أنحاء الكويت.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Beside American School, Sabah Al-Salem",
            "addressLocality": "Sabah Al-Salem",
            "addressRegion": "Kuwait",
            "addressCountry": "KW"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "addressCountry": "KW"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            "https://wa.me/96599930270",
            "https://www.instagram.com/ferrarilaundries_kw"
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Laundry Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Laundry Service",
                        "alternateName": "غسيل ملابس"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Dry Cleaning",
                        "alternateName": "دراي كلين"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Laundry Pickup and Delivery",
                        "alternateName": "استلام وتوصيل غسيل"
                    }
                }
            ]
        }
    };

    // WebSite schema for sitelinks searchbox eligibility
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": "Ferrari Express Laundry",
        "inLanguage": ["en", "ar"]
    };

    return (
        <Helmet>
            {/* HTML Attributes */}
            <html lang={language} dir={dir} />

            {/* Title & Description */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Canonical & Hreflang */}
            {canonical && <link rel="canonical" href={canonical} />}
            <link rel="alternate" hrefLang="en-KW" href={`${siteUrl}/`} />
            <link rel="alternate" hrefLang="ar-KW" href={`${siteUrl}/`} />
            <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/`} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonical || siteUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${siteUrl}/og-image.png`} />
            <meta property="og:site_name" content="Ferrari Express Laundry" />
            <meta property="og:locale" content={language === 'en' ? 'en_KW' : 'ar_KW'} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@ferrarilaundry" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />

            {/* Geo Tags */}
            <meta name="geo.region" content="KW" />
            <meta name="geo.country" content="Kuwait" />

            {/* Robots */}
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

            {/* Structured Data - LocalBusiness */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>

            {/* Structured Data - WebSite */}
            <script type="application/ld+json">
                {JSON.stringify(websiteSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;
