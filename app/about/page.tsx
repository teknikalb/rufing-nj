"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
  Building,
  Hammer,
  Paintbrush,
  FileCheck,
  TrendingUp,
  Calendar,
  DollarSign,
  Heart,
  Zap
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Michael Rodriguez",
      role: "Founder & CEO",
      experience: "25+ Years",
      specialty: "Project Management & Customer Relations",
      image: "/placeholder-user.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "Lead Roofing Specialist",
      experience: "18 Years",
      specialty: "Residential & Commercial Roofing",
      image: "/placeholder-user.jpg"
    },
    {
      name: "David Chen",
      role: "Master Craftsman",
      experience: "20 Years",
      specialty: "Siding & Exterior Renovation",
      image: "/placeholder-user.jpg"
    },
    {
      name: "Maria Garcia",
      role: "Quality Control Manager",
      experience: "15 Years",
      specialty: "Inspection & Quality Assurance",
      image: "/placeholder-user.jpg"
    }
  ]

  const certifications = [
    { name: "NJ Contractor License", number: "13VH12144700", authority: "State of New Jersey" },
    { name: "GAF Master Elite Contractor", number: "Certified", authority: "GAF Materials Corporation" },
    { name: "Owens Corning Preferred Contractor", number: "Certified", authority: "Owens Corning" },
    { name: "Better Business Bureau A+", number: "A+ Rating", authority: "BBB of Metropolitan NY" },
    { name: "Home Advisor Elite Service", number: "Elite Badge", authority: "Home Advisor" },
    { name: "Angie's List Super Service Award", number: "2023 Winner", authority: "Angie's List" }
  ]

  const services = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Residential Roofing",
      description: "Complete roofing solutions for homes including installation, repair, and replacement.",
      features: ["Asphalt Shingles", "Metal Roofing", "Tile Roofing", "Emergency Repairs", "Roof Inspections"]
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Commercial Roofing",
      description: "Professional commercial roofing services for businesses and industrial facilities.",
      features: ["Flat Roofing", "TPO Membrane", "EPDM Systems", "Maintenance Programs", "Leak Detection"]
    },
    {
      icon: <Paintbrush className="h-8 w-8" />,
      title: "Siding Installation",
      description: "Expert siding installation and repair to protect and beautify your property exterior.",
      features: ["Vinyl Siding", "Fiber Cement", "Wood Siding", "Aluminum Siding", "Siding Repair"]
    },
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Chimney Services",
      description: "Comprehensive chimney repair, cleaning, and maintenance for safety and efficiency.",
      features: ["Chimney Cleaning", "Cap Installation", "Flashing Repair", "Liner Installation", "Inspection"]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Masonry Work",
      description: "Professional masonry services for residential and commercial properties.",
      features: ["Brick Repair", "Stone Work", "Retaining Walls", "Concrete Work", "Restoration"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Emergency Services",
      description: "24/7 emergency response for storm damage, leaks, and urgent construction needs.",
      features: ["Storm Damage", "Emergency Tarping", "Leak Repair", "24/7 Response", "Insurance Claims"]
    }
  ]

  const stats = [
    { number: "25+", label: "Years in Business", icon: <Calendar className="h-8 w-8" /> },
    { number: "5,000+", label: "Projects Completed", icon: <CheckCircle className="h-8 w-8" /> },
    { number: "98%", label: "Customer Satisfaction", icon: <Heart className="h-8 w-8" /> },
    { number: "$50M+", label: "Projects Value", icon: <DollarSign className="h-8 w-8" /> }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group focus:outline-none">
              <Image
                src="/media/logo.jpg"
                alt="Home Express Construction LLC Logo"
                width={56}
                height={56}
                className="h-14 w-14 object-contain rounded-full bg-white shadow transition-all duration-200 md:h-12 md:w-12 group-hover:scale-105"
                priority
              />
              <div className="hidden md:block">
                <span className="text-2xl font-bold text-gray-900">Home Express Construction</span>
                <div className="text-sm text-gray-600">Roofing • Siding • Chimney • Masonry & More</div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium border-b-2 border-transparent hover:border-blue-600">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium border-b-2 border-blue-600">About</Link>
              <Link href="/#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium border-b-2 border-transparent hover:border-blue-600">Services</Link>
              <Link href="/#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium border-b-2 border-transparent hover:border-blue-600">Portfolio</Link>
              <Link href="/#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors font-medium border-b-2 border-transparent hover:border-blue-600">Reviews</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium border-b-2 border-transparent hover:border-blue-600">Contact</Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-blue-600">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">(201) 753-6453</span>
              </div>
              <Link href="/#contact">
                <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all">
                  Free Estimate
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-500/20 text-blue-100 border-blue-400 animate-pulse mb-6">About Us</Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Building Excellence for Over
              <span className="text-blue-300"> 25 Years</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Home Express Construction LLC has been New Jersey's premier choice for comprehensive construction services since 1998. From residential roofing to commercial projects, we deliver exceptional craftsmanship and unmatched customer service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:2017536453">
                <Button size="lg" variant="outline" className="border-blue text-blue-900 hover:bg-white hover:text-blue-900 px-8 py-4 text-lg transition-all transform hover:scale-105">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-800">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                New Jersey's Most Trusted Construction Experts
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 1998, Home Express Construction LLC began as a small family business with a simple mission: to provide honest, reliable construction services to New Jersey homeowners and businesses. Over the past 25 years, we've grown into one of the region's most respected construction companies while maintaining our commitment to quality, integrity, and customer satisfaction.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of certified professionals brings decades of combined experience to every project. Whether it's a simple roof repair or a complete commercial renovation, we approach each job with the same attention to detail and dedication to excellence that has made us a trusted name in New Jersey construction.
              </p>
              
              {/* Contact Info Card */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <a href="tel:2017536453" className="text-blue-600 font-semibold hover:underline">(201) 753-6453</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <a href="mailto:expressconstruction113@gmail.com" className="text-blue-600 font-semibold hover:underline">expressconstruction113@gmail.com</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">24 Central Avenue, Ridgefield Park, NJ 07066</span>
                  </div>
                </div>
              </div>
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

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-6">Licenses & Certifications</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Fully Licensed, Certified & Insured
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to professionalism is backed by proper licensing, industry certifications, and comprehensive insurance coverage for your complete peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{cert.name}</h3>
                  <p className="text-blue-600 font-bold">{cert.number}</p>
                  <p className="text-gray-600 text-sm">{cert.authority}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-6">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Construction Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From emergency repairs to complete renovations, we provide all the construction services you need with exceptional quality and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate. Let's bring your construction vision to life with our expertise and dedication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                Get Free Estimate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:2017536453">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-800 px-8 py-4 text-lg transition-all transform hover:scale-105">
                <Phone className="mr-2 h-5 w-5" />
                Call (201) 753-6453
              </Button>
            </a>
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
                <li>(201) 753-6453</li>
                <li>expressconstruction113@gmail.com</li>
                <li>24 Central Avenue</li>
                <li>Ridgefield Park, NJ 07066</li>
                <li>Licensed & Insured</li>
                <li>NJ License #13VH12144700</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="bg-gray-700 p-2 rounded hover:bg-blue-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </Link>
                <Link href="#" className="bg-gray-700 p-2 rounded hover:bg-blue-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </Link>
                <Link href="#" className="bg-gray-700 p-2 rounded hover:bg-blue-600 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.753-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Home Express Construction LLC. All rights reserved. | Licensed & Insured in New Jersey | NJ License #13VH12144700</p>
          </div>
        </div>
      </footer>
    </div>
  )
}