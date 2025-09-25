'use client';

import { Facebook, Twitter, Instagram, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo/Brand */}
          <h3 className="text-2xl font-bold text-white mb-4">MindfulTherapy</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Professional therapy services promoting mental wellness and personal growth in NEW YORK
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="#"
              className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-blue-800 hover:transform hover:scale-110 transition-all duration-300 group shadow-lg"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-white" />
            </a>
            
            <a
              href="#"
              className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center hover:from-blue-500 hover:to-blue-600 hover:transform hover:scale-110 transition-all duration-300 group shadow-lg"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6 text-white" />
            </a>
            
            <a
              href="#"
              className="w-12 h-12 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center hover:from-pink-700 hover:to-purple-700 hover:transform hover:scale-110 transition-all duration-300 group shadow-lg"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
            
            <a
              href="#"
              className="w-12 h-12 bg-gradient-to-br from-green-600 to-teal-600 rounded-full flex items-center justify-center hover:from-green-700 hover:to-teal-700 hover:transform hover:scale-110 transition-all duration-300 group shadow-lg"
              aria-label="Wellness Blog"
            >
              <Heart className="w-6 h-6 text-white" />
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#home" className="text-gray-300 hover:text-green-400 transition duration-300 text-sm font-medium">
              Home
            </a>
            <a href="#services" className="text-gray-300 hover:text-green-400 transition duration-300 text-sm font-medium">
              Services
            </a>
            <a href="#about" className="text-gray-300 hover:text-green-400 transition duration-300 text-sm font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-300 hover:text-green-400 transition duration-300 text-sm font-medium">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-300 text-sm">
              &copy; 2024 MindfulTherapy Practice. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs mt-2">
              Professional mental health services in NEW YORK, USA
            </p>
          </div>

          {/* Optional: Business Info */}
          <div className="mt-4 text-gray-400 text-xs">
            <p>123 Peaceful Lane, NEW YORK, NY 10016, USA</p>
            <p className="mt-1">+1 812 345 6789</p>
          </div>
        </div>
      </div>
    </footer>
  );
}