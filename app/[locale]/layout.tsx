import React from 'react'
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from 'next-intl/server';
export default async function LocaleLayout({ children }: { children: React.ReactNode }) {
    const locale = await getLocale();
    return (
        <NextIntlClientProvider locale={locale}>
            {children}
        </NextIntlClientProvider>
    )
}
