import React from 'react'
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from 'next-intl/server';
import { DirectionProvider } from '@base-ui/react';
export default async function LocaleLayout({ children }: { children: React.ReactNode }) {
    const locale = await getLocale();
    return (
        <NextIntlClientProvider locale={locale}>
            <DirectionProvider direction={locale === "ar" ? "rtl" : "ltr"}>
                {children}
            </DirectionProvider>
        </NextIntlClientProvider>
    )
}
