import { Geist, Geist_Mono, Lora } from "next/font/google";

import { ActiveThemeProvider } from "@/components/active-theme";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Header } from "@/components/header";

const lora = Lora({ subsets: ['latin'], variable: '--font-serif' });

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
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