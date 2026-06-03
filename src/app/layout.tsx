import type { Metadata } from 'next'
import { Outfit, JetBrains_Mono } from 'next/font/google'
import { LangProvider } from '@/lib/LangContext'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Gonzalo Gil — Full Stack Developer',
  description:
    'Desarrollador Full Stack con experiencia en React, Next.js y Node.js. Especializado en aplicaciones web, APIs y asistentes virtuales con IA.',
  keywords: ['Fullstack Developer', 'React', 'Next.js', 'Node.js', 'Córdoba', 'Argentina'],
  authors: [{ name: 'Gonzalo Gil' }],
  openGraph: {
    title: 'Gonzalo Gil — Full Stack Developer',
    description: 'Portfolio de Gonzalo Gil, Full Stack Developer en Córdoba, Argentina.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  )
}
