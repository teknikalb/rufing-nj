'use client'

import { useEffect, useRef, useState } from 'react'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  placeholder?: string
  threshold?: number
}

export function LazyImage({ 
  src, 
  alt, 
  className = '', 
  placeholder = '/placeholder.jpg',
  threshold = 0.1 
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  return (
    <img
      ref={imgRef}
      src={isInView ? src : placeholder}
      alt={alt}
      className={`transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      onLoad={handleLoad}
      loading="lazy"
    />
  )
}

interface LazySectionProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
}

export function LazySection({ 
  children, 
  className = '', 
  threshold = 0.1,
  rootMargin = '50px'
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  )
}

interface PreloadLinkProps {
  href: string
  as?: string
  type?: string
  crossOrigin?: string
}

export function PreloadLink({ 
  href, 
  as = 'fetch', 
  type, 
  crossOrigin 
}: PreloadLinkProps) {
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = href
    link.as = as
    if (type) link.type = type
    if (crossOrigin) link.crossOrigin = crossOrigin
    
    document.head.appendChild(link)
    
    return () => {
      document.head.removeChild(link)
    }
  }, [href, as, type, crossOrigin])

  return null
}

interface PerformanceMonitorProps {
  onPerformanceData?: (data: PerformanceData) => void
}

interface PerformanceData {
  loadTime: number
  domContentLoaded: number
  firstContentfulPaint?: number
  largestContentfulPaint?: number
}

export function PerformanceMonitor({ onPerformanceData }: PerformanceMonitorProps) {
  useEffect(() => {
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const paint = performance.getEntriesByType('paint')
      
      const performanceData: PerformanceData = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime,
        largestContentfulPaint: paint.find(entry => entry.name === 'largest-contentful-paint')?.startTime,
      }

      if (onPerformanceData) {
        onPerformanceData(performanceData)
      }

      // Log performance metrics
      console.log('Performance Metrics:', performanceData)
    }

    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
      return () => window.removeEventListener('load', measurePerformance)
    }
  }, [onPerformanceData])

  return null
}

// Utility function to debounce function calls
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Utility function to throttle function calls
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}
