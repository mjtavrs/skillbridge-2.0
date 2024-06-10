import type { Metadata } from 'next'
// eslint-disable-next-line
import { Be_Vietnam_Pro } from 'next/font/google'
import './globals.css'
import { Footer } from './Footer'
import { Header } from './Header'

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Skillbridge',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${beVietnamPro.className} min-h-dvh bg-skillbridge-white-97`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
