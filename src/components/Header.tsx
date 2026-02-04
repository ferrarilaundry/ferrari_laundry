import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.jpeg';
import ContactButtons from '@/components/ContactButtons';

const Header = () => {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.subscriptions', href: '#subscriptions' },
    { key: 'nav.branches', href: '#branches' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background/95 backdrop-blur-md shadow-soft'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Ferrari Express Laundry"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="px-4 py-2 text-foreground font-medium hover:text-brand-red transition-colors rounded-lg hover:bg-primary/10"
              >
                {t(link.key)}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <ContactButtons layout="inline" compact className="w-auto" />
            <Button
              variant="outline"
              size="sm"
              onClick={handleLanguageToggle}
              className="flex items-center gap-2 border-foreground/20"
            >
              <Globe className="h-4 w-4" />
              {language === 'en' ? 'عربي' : 'EN'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu - Full Screen Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-0 z-50 bg-background animate-fade-in">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between h-16 px-4 border-b border-border">
              <a href="#home" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                <img
                  src={logo}
                  alt="Ferrari Express Laundry"
                  className="h-12 w-auto object-contain"
                />
              </a>
              <button
                className="p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex flex-col h-[calc(100vh-64px)] px-6 py-6">
              {/* Navigation Links */}
              <nav className="flex flex-col gap-1 flex-1">
                {navLinks.map((link, index) => (
                  <a
                    key={link.key}
                    href={link.href}
                    className="px-4 py-4 text-lg font-semibold text-foreground hover:bg-primary/10 rounded-xl transition-all active:scale-[0.98]"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {t(link.key)}
                  </a>
                ))}
              </nav>

              <div className="flex flex-col gap-3 pt-6 border-t border-border">
                {/* Language Toggle */}
                <Button
                  variant="outline"
                  onClick={handleLanguageToggle}
                  className="w-full h-12 justify-center gap-2 rounded-xl text-base font-semibold"
                >
                  <Globe className="h-5 w-5" />
                  {language === 'en' ? 'العربية' : 'English'}
                </Button>

                {/* CTA Buttons */}
                <ContactButtons layout="stack" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
