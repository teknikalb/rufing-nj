"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  Clock,
  Award,
  Users,
  Wrench,
  Home,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  ChevronLeft,
  ChevronRight,
  Hammer,
  Paintbrush,
  Building,
  Truck,
  FileCheck,
  TrendingUp,
  Quote,
  StarIcon,
  ThumbsUp,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"

// Dynamically import Portfolio to avoid SSR issues
const Portfolio = dynamic(() => import("@/components/portfolio"), { ssr: false })

// Use real images from public/media for the homepage portfolio
const homepagePortfolioImages = [
  "/media/WhatsApp Image 2025-06-23 at 21.26.00_f3ab5d80.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.37_f0165984.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.37_bbcdd99e.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.37_3227bbf5.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.37_06d23d90.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.36_c3e69011.jpg",
]

export default function HomeExpressConstructionPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentProject, setCurrentProject] = useState(0)
  const [currentReviewSite, setCurrentReviewSite] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    // Auto-rotate review sites carousel
    const interval = setInterval(() => {
      setCurrentReviewSite((prev) => (prev + 1) % reviewSites.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Roofing Services",
      description: "Complete roofing solutions including installation, repair, and replacement with premium materials.",
      features: ["Asphalt Shingles", "Metal Roofing", "Emergency Repairs", "Roof Inspections"],
    },
    {
      icon: <Paintbrush className="h-8 w-8" />,
      title: "Siding Installation",
      description: "Professional siding installation and repair to protect and beautify your home exterior.",
      features: ["Vinyl Siding", "Fiber Cement", "Wood Siding", "Maintenance"],
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Chimney Services",
      description: "Expert chimney repair, cleaning, and maintenance to ensure safety and efficiency.",
      features: ["Chimney Cleaning", "Cap Installation", "Flashing Repair", "Inspection"],
    },
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Masonry Work",
      description: "Professional masonry services for residential and commercial properties.",
      features: ["Brick Repair", "Stone Work", "Retaining Walls", "Restoration"],
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "General Construction",
      description: "Comprehensive construction services for home improvements and renovations.",
      features: ["Kitchen Remodeling", "Bathroom Renovation", "Additions", "Repairs"],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Storm Damage Restoration",
      description: "Emergency restoration services for storm and weather damage repairs.",
      features: ["Insurance Claims", "Emergency Tarping", "Complete Restoration", "24/7 Service"],
    },
  ]

  const whyChooseUs = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Licensed & Insured",
      description: "Fully licensed and insured for your complete peace of mind",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "25+ Years Experience",
      description: "Over two decades of construction expertise in New Jersey",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Free Estimates",
      description: "No-obligation free estimates for all construction services",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Certified professionals with extensive training and expertise",
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Quality Guarantee",
      description: "We stand behind our work with comprehensive warranties",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Proven Results",
      description: "Thousands of satisfied customers and successful projects",
    },
  ]

  const trustMarks = [
    { name: "Better Business Bureau A+", icon: "🏆", description: "A+ BBB Rating" },
    { name: "Licensed & Bonded", icon: "🛡️", description: "NJ License #HIC12345" },
    { name: "GAF Master Elite", icon: "⭐", description: "Certified Elite Contractor" },
    { name: "Angie's List Super Service", icon: "🏅", description: "Super Service Award Winner" },
    { name: "Home Advisor Elite", icon: "💎", description: "Elite Service Provider" },
    { name: "Owens Corning Preferred", icon: "🎯", description: "Preferred Contractor" },
  ]

  const reviewSites = [
    { name: "Google", logo: "G", rating: "4.9", reviews: "247", color: "bg-blue-500" },
    { name: "Yelp", logo: "Y", rating: "4.8", reviews: "156", color: "bg-red-500" },
    { name: "Angie's List", logo: "A", rating: "4.9", reviews: "89", color: "bg-green-500" },
    { name: "Better Business Bureau", logo: "B", rating: "A+", reviews: "78", color: "bg-blue-600" },
    { name: "Home Advisor", logo: "H", rating: "4.8", reviews: "134", color: "bg-orange-500" },
  ]

  const detailedTestimonials = [
    {
      name: "Sarah Johnson",
      location: "Princeton, NJ",
      rating: 5,
      service: "Complete Roof Replacement",
      text: "Home Express Construction exceeded all our expectations! They replaced our entire roof in just three days during a challenging weather window. The team was incredibly professional, cleaned up meticulously each day, and the quality of workmanship is outstanding. Mike walked us through every step of the process and even helped us navigate our insurance claim. Six months later, our roof has weathered several storms perfectly. I wouldn't hesitate to recommend them for any construction project.",
      projectValue: "$18,500",
      timeframe: "3 days",
      avatar: "/placeholder-user.jpg"
    },
    {
      name: "Michael Rodriguez",
      location: "Newark, NJ",
      rating: 5,
      service: "Emergency Storm Damage Repair",
      text: "When a massive tree fell on our roof during Hurricane Ida, Home Express Construction was there within hours. They provided emergency tarping to prevent further damage, then coordinated with our insurance company to ensure everything was covered. The entire restoration process was seamless - new roof, siding repair, and even some interior work. Their project manager kept us informed daily, and the crew was respectful of our family's needs during this stressful time.",
      projectValue: "$24,200",
      timeframe: "1 week",
      avatar: "/placeholder-user.jpg"
    },
    {
      name: "Emily Chen",
      location: "Jersey City, NJ",
      rating: 5,
      service: "Siding & Chimney Restoration",
      text: "We hired Home Express for a complete exterior makeover of our 1950s home. They installed beautiful new fiber cement siding and completely restored our brick chimney. The attention to detail was remarkable - they matched the historic character of our neighborhood while providing modern durability. The project manager was always available to answer questions, and they completed everything on schedule despite some weather delays. Our home value increased significantly, and neighbors constantly ask for their contact information.",
      projectValue: "$31,750",
      timeframe: "2 weeks",
      avatar: "/placeholder-user.jpg"
    },
    {
      name: "David Thompson",
      location: "Morristown, NJ",
      rating: 5,
      service: "Commercial Flat Roof Installation",
      text: "As a property manager overseeing multiple commercial buildings, I've worked with many contractors. Home Express Construction stands out for their professionalism and expertise in commercial roofing. They installed a new TPO membrane system on our 15,000 sq ft warehouse with minimal disruption to our tenants. Their team worked efficiently, maintained excellent safety standards, and delivered exactly what was promised on time and within budget. We now use them exclusively for all our roofing needs.",
      projectValue: "$47,300",
      timeframe: "5 days",
      avatar: "/placeholder-user.jpg"
    },
    {
      name: "Lisa Martinez",
      location: "Trenton, NJ",
      rating: 5,
      service: "Masonry & Landscaping",
      text: "Home Express built a stunning retaining wall and outdoor patio area that transformed our backyard into an entertainment paradise. Their masonry work is absolutely beautiful - the stonework looks like it's been there for decades. They coordinated with our landscaper to ensure everything flowed perfectly together. Even when we had some last-minute design changes, they accommodated our requests without any hassle. The project came in under budget, and we couldn't be happier with the results.",
      projectValue: "$22,800",
      timeframe: "1.5 weeks",
      avatar: "/placeholder-user.jpg"
    }
  ]

  const projects = [
    {
      image: "/media/WhatsApp Image 2025-06-23 at 21.24.28_711e2bf6.jpg",
      title: "Modern Residential Roof & Siding",
      location: "Princeton, NJ",
      description: "Complete exterior renovation with architectural shingles and fiber cement siding",
    },
    {
      image: "/media/WhatsApp Image 2025-06-23 at 21.25.05_953ba7ac.jpg",
      title: "Commercial Flat Roof System",
      location: "Newark, NJ",
      description: "Commercial TPO roofing installation with energy-efficient membrane",
    },
    {
      image: "/media/WhatsApp Image 2025-06-23 at 21.25.06_f1981258.jpg",
      title: "Historic Chimney Restoration",
      location: "Morristown, NJ",
      description: "Comprehensive chimney and masonry restoration maintaining historic character",
    },
    {
      image: "/media/WhatsApp Image 2025-06-23 at 21.25.07_7e487b0c.jpg",
      title: "Storm Damage Restoration",
      location: "Trenton, NJ",
      description: "Complete restoration including roofing, siding, and structural repairs",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % detailedTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + detailedTestimonials.length) % detailedTestimonials.length)
  }

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/media/logo.jpg"
                alt="Home Express Construction LLC Logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain rounded-full bg-white shadow"
                priority
              />
              <div>
                <span className="text-2xl font-bold text-gray-900">Home Express Construction</span>
                <div className="text-sm text-gray-600">Roofing • Siding • Chimney • Masonry & More</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                About
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Services
              </Link>
              <Link href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Portfolio
              </Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Reviews
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Contact
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-blue-600">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">(555) 123-BUILD</span>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all">
                Free Estimate
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t">
              <nav className="flex flex-col space-y-4 mt-4">
                <Link href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
                  About
                </Link>
                <Link href="#services" className="text-gray-700 hover:text-blue-600 font-medium">
                  Services
                </Link>
                <Link href="#portfolio" className="text-gray-700 hover:text-blue-600 font-medium">
                  Portfolio
                </Link>
                <Link href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium">
                  Reviews
                </Link>
                <Link href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
                  Contact
                </Link>
                <div className="flex items-center space-x-2 text-blue-600 pt-2">
                  <Phone className="h-4 w-4" />
                  <span className="font-semibold">(555) 123-BUILD</span>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="space-y-4">
                <Badge className="bg-blue-500/20 text-blue-100 border-blue-400 animate-pulse">
                  #1 Construction Contractor in NJ
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Expert Construction Services in
                  <span className="text-blue-300"> New Jersey</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  From roofing and siding to chimney and masonry work - we're your one-stop construction solution. Licensed, insured, and trusted by thousands of New Jersey homeowners for over 25 years.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg transition-all transform hover:scale-105"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-blue-200 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">8000+</div>
                  <div className="text-blue-200 text-sm">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-blue-200 text-sm">Satisfaction</div>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="relative">
                <Image
                  src="/media/WhatsApp Image 2025-06-23 at 21.25.08_54330b57.jpg"
                  alt="Professional construction work by Home Express Construction LLC in New Jersey"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-lg shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Licensed & Insured</div>
                      <div className="text-sm text-gray-600">NJ License #HIC12345</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Marks Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted & Certified</h3>
            <p className="text-gray-600">Our certifications and awards speak to our commitment to excellence</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trustMarks.map((mark, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center group cursor-pointer transform hover:scale-105">
                <div className="text-3xl mb-2 group-hover:animate-bounce">{mark.icon}</div>
                <div className="text-sm font-semibold text-gray-900">{mark.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Sites Carousel */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">Highly Rated Across All Platforms</h3>
          </div>
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentReviewSite * (100 / reviewSites.length)}%)` }}
            >
              {[...reviewSites, ...reviewSites].map((site, index) => (
                <div key={index} className="flex-shrink-0 w-1/5 px-2">
                  <div className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                    <div className={`w-12 h-12 ${site.color} text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold text-lg`}>
                      {site.logo}
                    </div>
                    <div className="font-semibold text-gray-900">{site.name}</div>
                    <div className="flex items-center justify-center mt-1">
                      <span className="font-bold text-yellow-500">{site.rating}</span>
                      <Star className="w-4 h-4 text-yellow-400 ml-1 fill-current" />
                    </div>
                    <div className="text-sm text-gray-600">{site.reviews} reviews</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800">About Our Company</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  New Jersey's Most Trusted Construction Experts
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  For over 25 years, Home Express Construction LLC has been the premier choice for comprehensive construction services throughout New Jersey. From roofing and siding to chimney work and masonry, our commitment to excellence and extensive experience makes us the trusted partner for all your construction needs.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 group cursor-pointer">
                    <div className="bg-blue-100 p-2 rounded-full flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="relative">
              <Image
                src="/media/WhatsApp Image 2025-06-23 at 21.25.32_cea207a0.jpg"
                alt="Professional construction team from Home Express Construction LLC"
                width={600}
                height={500}
                className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -top-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">A+</div>
                  <div className="text-blue-100 text-sm">BBB Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Comprehensive Construction Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From emergency repairs to complete home renovations, we provide all the construction services you need with exceptional quality and reliability. Roofing, siding, chimney, masonry, and more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                    Get Free Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <Portfolio images={homepagePortfolioImages} />
          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800">Customer Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our construction services.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Testimonial */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={detailedTestimonials[currentTestimonial].avatar}
                      alt={detailedTestimonials[currentTestimonial].name}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{detailedTestimonials[currentTestimonial].name}</h3>
                      <p className="text-gray-600">{detailedTestimonials[currentTestimonial].location}</p>
                      <div className="flex items-center mt-1">
                        {[...Array(detailedTestimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">5.0</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Quote className="h-8 w-8 text-blue-300 absolute -top-2 -left-2" />
                    <p className="text-lg text-gray-700 leading-relaxed italic pl-6">
                      {detailedTestimonials[currentTestimonial].text}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold">Service:</span> {detailedTestimonials[currentTestimonial].service}
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold">Timeline:</span> {detailedTestimonials[currentTestimonial].timeframe}
                    </div>
                  </div>
                </div>

                {/* Testimonial Stats & Navigation */}
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h4 className="font-bold text-gray-900 mb-4">Project Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Project Value:</span>
                        <span className="font-semibold text-green-600">{detailedTestimonials[currentTestimonial].projectValue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Completion:</span>
                        <span className="font-semibold">{detailedTestimonials[currentTestimonial].timeframe}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Rating:</span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={prevTestimonial}
                      className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-110"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-110"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="flex justify-center space-x-2">
                    {detailedTestimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-400">Get In Touch</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Project?</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Contact Home Express Construction LLC today for a free estimate. Our experts will assess your construction needs and provide you with a detailed quote for your roofing, siding, chimney, masonry, or general construction project.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Call Us Today</div>
                    <div className="text-blue-300">(555) 123-BUILD</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-blue-300">info@homeexpressconstructionnj.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Service Areas</div>
                    <div className="text-blue-300">All of New Jersey & Surrounding Areas</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Get Your Free Estimate</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <Input placeholder="John" className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <Input placeholder="Doe" className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="john@example.com" className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <Input type="tel" placeholder="(555) 123-4567" className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500">
                    <option>Select a service...</option>
                    <option>Roofing</option>
                    <option>Siding</option>
                    <option>Chimney Services</option>
                    <option>Masonry Work</option>
                    <option>General Construction</option>
                    <option>Storm Damage Restoration</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
                  <Textarea placeholder="Tell us about your construction needs..." rows={4} className="border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="/media/logo.jpg"
                  alt="Home Express Construction LLC"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain rounded-full"
                />
                <div>
                  <div className="font-bold text-lg">Home Express Construction</div>
                  <div className="text-sm text-gray-400">LLC</div>
                </div>
              </div>
              <p className="text-gray-400">
                Your trusted partner for all construction needs in New Jersey. Roofing, siding, chimney, masonry, and more.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Roofing Services</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Siding Installation</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Chimney Services</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Masonry Work</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">General Construction</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(555) 123-BUILD</li>
                <li>info@homeexpressconstructionnj.com</li>
                <li>Licensed & Insured</li>
                <li>NJ License #HIC12345</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="bg-gray-700 p-2 rounded hover:bg-blue-600 transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="bg-gray-700 p-2 rounded hover:bg-blue-600 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="bg-gray-700 p-2 rounded hover:bg-blue-600 transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Home Express Construction LLC. All rights reserved. | Licensed & Insured in New Jersey</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
