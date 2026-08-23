import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import { LanguageProvider } from '@/context/LanguageContext'
import { CartProvider } from '@/context/CartContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'Haya Ayurvedics - Premium Kerala Ayurvedic Hospital & Wellness',
  description: 'Haya Ayurvedics in Kollam, Kerala offers premium quality traditional Ayurvedic treatments, wellness packages, and expert consultations in an NABH accredited facility.',
  generator: 'v0.app',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1b4d3e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr" className="bg-white scroll-smooth">
      <body className="antialiased bg-white text-foreground font-sans">
        <LanguageProvider>
          <CartProvider>
            {children}
            <WhatsAppWidget />
            {process.env.NODE_ENV === 'production' && <Analytics />}
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
