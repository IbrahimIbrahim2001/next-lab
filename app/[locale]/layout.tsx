import React from 'react';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { DirectionProvider } from '@base-ui/react';
import { HtmlAttributes } from './providers';
import { ActiveThemeProvider } from "@/components/active-theme";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from "next-intl";

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};
export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <NextIntlClientProvider locale={locale}>
            <DirectionProvider direction={locale === "ar" ? "rtl" : "ltr"}>
                <ThemeProvider>
                    <ActiveThemeProvider>
                        <main className="min-h-screen max-w-4xl mx-auto">
                            <Header />
                            <div className="md:px-2">
                                {children}
                            </div>
                            <HtmlAttributes />
                        </main>
                    </ActiveThemeProvider>
                </ThemeProvider>
            </DirectionProvider>
        </NextIntlClientProvider>
    )
}
