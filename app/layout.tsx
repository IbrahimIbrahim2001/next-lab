import { Geist_Mono, Lora, Noto_Sans_Arabic } from "next/font/google";

import { ActiveThemeProvider } from "@/components/active-theme";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { getLocale } from "next-intl/server";
import "./globals.css";

const lora = Lora({ subsets: ['latin'], variable: '--font-serif' });

const fontSans = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-sans",
})


const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale();
  return (
    <html
      lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
      className={cn("antialiased", fontSans.variable, fontMono.variable, "font-serif", lora.variable)}
    >
      <body>
        <ThemeProvider>
          <ActiveThemeProvider>
            <main className="min-h-screen max-w-4xl mx-auto">
              <Header />
              <div className="md:px-2">
                {children}
              </div>
            </main>
          </ActiveThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}