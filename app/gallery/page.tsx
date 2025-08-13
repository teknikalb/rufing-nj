"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight
} from "lucide-react";

// Gallery images (add more as needed)
const galleryImages = [
  "/media/WhatsApp Image 2025-06-23 at 21.26.00_f3ab5d80.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.37_f0165984.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.37_bbcdd99e.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.37_3227bbf5.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.37_06d23d90.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.36_c3e69011.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.36_20f6f511.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.32_ea8c087e.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.32_cea207a0.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.32_5a9c11a9.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.31_c31a4ad7.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.09_8104c5e5.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.09_1086af8e.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.08_99d27c3e.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.08_889d36d7.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.08_54330b57.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.08_523f57cd.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.08_0a66d48f.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.07_a8fb4f11.jpg",
  "/media/WhatsApp Image 2025-06-23 at 21.25.07_7e487b0c.jpg",
];

export default function GalleryPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo: image only on mobile, image+text on desktop, clickable */}
            <Link href="/" className="flex items-center space-x-3 group focus:outline-none">
              <Image
                src="/media/logo.jpg"
                alt="Home Express Construction LLC Logo"
                width={56}
                height={56}
                className="h-14 w-14 object-contain rounded-full bg-white shadow transition-all duration-200 md:h-12 md:w-12 group-hover:scale-105"
                priority
              />
              {/* Hide text on mobile, show on md+ */}
              <div className="hidden md:block">
                <span className="text-2xl font-bold text-gray-900">Home Express Construction</span>
                <div className="text-sm text-gray-600">Roofing • Siding • Chimney • Masonry & More</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium border-b-2 border-transparent hover:border-blue-600">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium border-b-2 border-transparent hover:border-blue-600">About</Link>
              <Link href="/gallery" className="text-gray-700 hover:text-blue-600 transition-colors font-medium border-b-2 border-blue-600">Gallery</Link>
              <Link href="/#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium border-b-2 border-transparent hover:border-blue-600">Services</Link>
              <Link href="/#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium border-b-2 border-transparent hover:border-blue-600">Portfolio</Link>
              <Link href="/#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors font-medium border-b-2 border-transparent hover:border-blue-600">Reviews</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium border-b-2 border-transparent hover:border-blue-600">Contact</Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-blue-600">
                <Phone className="h-4 w-4" />
                <a href="tel:+12017536453" className="font-semibold hover:text-green-600 transition-colors">+1 (201) 753-6453</a>
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
                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link href="/gallery" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
                <Link href="/#services" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Services</Link>
                <Link href="/#portfolio" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
                <Link href="/#testimonials" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
                <Link href="/#contact" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                <div className="flex items-center space-x-2 text-blue-600 pt-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+12017536453" className="font-semibold hover:text-green-600 transition-colors">+1 (201) 753-6453</a>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                  Free Estimate
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
      {/* Gallery Section */}
      <main className="bg-white pb-20">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-10">
              <Badge className="bg-blue-100 text-blue-800">Gallery</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Project Gallery</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our completed projects and see the quality of our work across New Jersey.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {galleryImages.map((src, idx) => (
                <Card key={idx} className="overflow-hidden shadow hover:shadow-lg transition-shadow">
                  <Image
                    src={src}
                    alt={`Gallery image ${idx + 1}`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-56 md:h-64 transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
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
                <li><a href="tel:+12017536453" className="hover:text-white transition-colors">+1 (201) 753-6453</a></li>
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

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        {/* Call Button */}
        <a 
                      href="tel:+12017536453"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 group"
          title="Call +1 (201) 753-6453"
        >
          <Phone className="h-6 w-6 group-hover:animate-pulse" />
        </a>
        
        {/* Email Button */}
        <a 
          href="mailto:expressconstruction113@gmail.com"
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 group"
          title="Email expressconstruction113@gmail.com"
        >
          <Mail className="h-6 w-6 group-hover:animate-pulse" />
        </a>
      </div>
    </div>
  );
}
