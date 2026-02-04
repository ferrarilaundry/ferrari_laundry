import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

interface ContactButtonsProps {
    className?: string; // Container className
    layout?: 'default' | 'stack' | 'inline';
    compact?: boolean; // For Header: smaller buttons, shorter text
}

const ContactButtons = ({ className, layout = 'default', compact = false }: ContactButtonsProps) => {
    const { t } = useLanguage();

    return (
        <div
            className={cn(
                "flex items-center gap-3 w-full",
                layout === 'default' && "flex-col sm:flex-row",
                layout === 'stack' && "flex-col",
                layout === 'inline' && "flex-row",
                className
            )}
        >
            <Button
                variant="cta"
                asChild
                className={cn(
                    "shadow-lg hover:shadow-xl font-semibold transition-all duration-300",
                    !compact
                        ? "w-full sm:w-auto h-14 sm:h-12 text-base sm:text-sm rounded-[14px] sm:rounded-lg"
                        : "h-9 w-auto text-sm px-4 rounded-lg shadow-sm"
                )}
            >
                <a href="tel:99930270" className="flex items-center justify-center gap-2">
                    <Phone className={cn("shrink-0", compact ? "h-3.5 w-3.5" : "h-5 w-5 sm:h-4 sm:w-4")} />
                    {compact ? t('nav.callNow') : t('contact.callNow')}
                </a>
            </Button>

            <Button
                variant="whatsapp"
                asChild
                className={cn(
                    "shadow-lg hover:shadow-xl font-semibold transition-all duration-300",
                    !compact
                        ? "w-full sm:w-auto h-14 sm:h-12 text-base sm:text-sm rounded-[14px] sm:rounded-lg"
                        : "h-9 w-auto text-sm px-4 rounded-lg shadow-sm"
                )}
            >
                <a
                    href="https://wa.me/96599930270"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                >
                    <MessageCircle className={cn("shrink-0", compact ? "h-3.5 w-3.5" : "h-5 w-5 sm:h-4 sm:w-4")} />
                    {compact ? t('nav.whatsapp') : t('contact.whatsapp')}
                </a>
            </Button>
        </div>
    );
};

export default ContactButtons;
