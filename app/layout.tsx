import { Geist_Mono, Lora, Noto_Sans_Arabic } from "next/font/google";

import { cn } from "@/lib/utils";
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
  return (
    <html
      suppressHydrationWarning
      className={cn("antialiased", fontSans.variable, fontMono.variable, "font-serif", lora.variable)}
    >
      <body>
        {children}
      </body>
    </html>
  )
}