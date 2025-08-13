'use client'

import { useEffect } from 'react'

interface StructuredDataProps {
  type: 'organization' | 'localBusiness' | 'service' | 'breadcrumb'
  data: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(data)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [data])

  return null
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Home Express Construction LLC",
  "url": "https://homeexpressconstructionllc.com",
  "logo": "https://homeexpressconstructionllc.com/media/logo.jpg",
  "description": "New Jersey's premier construction contractor providing expert roofing, siding, chimney, and masonry services.",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "NJ",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-201-753-6453",
    "contactType": "customer service",
    "areaServed": "NJ",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.facebook.com/homeexpressconstruction",
    "https://www.instagram.com/homeexpressconstruction",
    "https://www.linkedin.com/company/homeexpressconstruction"
  ],
  "foundingDate": "2000",
  "numberOfEmployees": "25-50",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 40.0583,
      "longitude": -74.4057
    },
    "geoRadius": "50000"
  }
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Home Express Construction LLC",
  "image": "https://homeexpressconstructionllc.com/media/logo.jpg",
  "description": "New Jersey's premier construction contractor providing expert roofing, siding, chimney, and masonry services.",
  "url": "https://homeexpressconstructionllc.com",
  "telephone": "+1-201-753-6453",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "NJ",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.0583,
    "longitude": -74.4057
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday", 
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  },
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Check"],
  "currenciesAccepted": "USD",
  "areaServed": {
    "@type": "State",
    "name": "New Jersey"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Construction Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roofing Services",
          "description": "Roof repair, replacement, and maintenance"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Siding Installation",
          "description": "Professional siding installation and repair"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Chimney Services",
          "description": "Chimney repair, maintenance, and construction"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Masonry Work",
          "description": "Professional masonry and stone work"
        }
      }
    ]
  }
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Construction Services",
  "description": "Comprehensive construction services including roofing, siding, chimney, and masonry work.",
  "provider": {
    "@type": "Organization",
    "name": "Home Express Construction LLC"
  },
  "areaServed": {
    "@type": "State",
    "name": "New Jersey"
  },
  "serviceType": "Construction and Home Improvement",
  "category": "Home Improvement",
  "offers": {
    "@type": "Offer",
    "description": "Professional construction services with free estimates",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
}

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})
