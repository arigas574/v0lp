import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, Rubik } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['500', '700'],
})

export const metadata: Metadata = {
  title: 'Calendro - Agenda Online para Barbearias, Consultórios e Oficinas',
  description:
    'Calendro é a plataforma de agendamento online ideal para barbearias, clínicas, consultórios e oficinas mecânicas. Gerencie seu tempo com praticidade e eficiência.',
  keywords: [
    'agenda de barbeiro',
    'agendamento para clínicas',
    'marcar horário',
    'gestão de tempo',
    'consultório',
    'oficina mecânica',
    'agendamento online',
  ],
  icons: {
    icon: [
      { url: '/images/icone_aba.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/images/icone_aba.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${rubik.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}