import type { Metadata, Viewport } from 'next'
import './globals.css'
import StructuredData, { organizationSchema, localBusinessSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Home Express Construction LLC - Roofing, Siding, Chimney & Masonry Services in NJ',
  description: 'New Jersey\'s premier construction contractor. Expert roofing, siding, chimney, and masonry services. Licensed, insured, and trusted for over 25 years. Free estimates available.',
  keywords: 'roofing, siding, chimney, masonry, construction, New Jersey, NJ, contractor, home improvement, roof repair, roof replacement, siding installation, chimney repair, masonry work, Bergen County, Passaic County, Essex County, Hudson County',
  authors: [{ name: 'Home Express Construction LLC' }],
  creator: 'Home Express Construction LLC',
  publisher: 'Home Express Construction LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://homeexpressconstructionllc.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://homeexpressconstructionllc.com',
    siteName: 'Home Express Construction LLC',
    title: 'Home Express Construction LLC - Premier Roofing & Construction Services in NJ',
    description: 'New Jersey\'s trusted construction contractor. Expert roofing, siding, chimney, and masonry services. Licensed, insured, and trusted for over 25 years. Get your free estimate today!',
    images: [
      {
        url: '/media/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Home Express Construction LLC - Professional Roofing and Construction Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Express Construction LLC - Premier Roofing & Construction Services in NJ',
    description: 'New Jersey\'s trusted construction contractor. Expert roofing, siding, chimney, and masonry services. Licensed, insured, and trusted for over 25 years.',
    images: ['/media/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual Google verification code
    // yandex: 'your-yandex-verification-code', // Optional
    // yahoo: 'your-yahoo-verification-code', // Optional
  },
  category: 'construction',
  classification: 'business',
  other: {
    'geo.region': 'US-NJ',
    'geo.placename': 'New Jersey',
    'geo.position': '40.0583;-74.4057', // Approximate NJ coordinates
    'ICBM': '40.0583, -74.4057',
    'DC.title': 'Home Express Construction LLC',
    'DC.creator': 'Home Express Construction LLC',
    'DC.subject': 'Roofing, Siding, Chimney, Masonry, Construction Services',
    'DC.description': 'New Jersey\'s premier construction contractor providing expert roofing, siding, chimney, and masonry services.',
    'DC.publisher': 'Home Express Construction LLC',
    'DC.contributor': 'Home Express Construction LLC',
    'DC.date': '2025-01-27',
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://homeexpressconstructionllc.com',
    'DC.language': 'en',
    'DC.coverage': 'New Jersey, United States',
    'DC.rights': 'Copyright 2025 Home Express Construction LLC',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1f2937' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1f2937" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body>
        <StructuredData type="organization" data={organizationSchema} />
        <StructuredData type="localBusiness" data={localBusinessSchema} />
        {children}
      </body>
    </html>
  )
}
