import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Home Express Construction LLC - Roofing, Siding, Chimney & Masonry Services in NJ',
  description: 'New Jersey\'s premier construction contractor. Expert roofing, siding, chimney, and masonry services. Licensed, insured, and trusted for over 25 years. Free estimates available.',
  generator: 'Next.js',
  keywords: 'roofing, siding, chimney, masonry, construction, New Jersey, NJ, contractor, home improvement',
  authors: [{ name: 'Home Express Construction LLC' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
