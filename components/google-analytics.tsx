'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

interface GoogleAnalyticsProps {
  measurementId: string
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  useEffect(() => {
    // Load Google Analytics script
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    script.async = true
    document.head.appendChild(script)

    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    window.gtag = function() {
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', measurementId, {
      page_title: document.title,
      page_location: window.location.href,
    })

    return () => {
      document.head.removeChild(script)
    }
  }, [measurementId])

  return null
}

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: url,
    })
  }
}

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track phone calls
export const trackPhoneCall = (phoneNumber: string) => {
  trackEvent('phone_call', 'engagement', phoneNumber)
}

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', 'engagement', formName)
}

// Track WhatsApp clicks
export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', 'engagement', 'whatsapp_contact')
}

// Track service inquiries
export const trackServiceInquiry = (service: string) => {
  trackEvent('service_inquiry', 'engagement', service)
}
