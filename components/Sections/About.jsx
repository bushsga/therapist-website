'use client';

import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  // Animation for numbers
  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  // Your Calendly URL
  const calendlyUrl = "https://calendly.com/ibrahimjamiuakeem/30min";

  // Simple counting function compatible with older browsers
  const animateNumber = (target, setter, duration) => {
    const steps = 60; // Number of steps for the animation
    const stepDuration = duration / steps;
    const stepValue = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= target) {
        setter(target);
        clearInterval(timer);
      } else {
        setter(Math.floor(current));
      }
    }, stepDuration);
  };

  useEffect(() => {
    // Use a simpler visibility detection for older browsers
    const checkVisibility = () => {
      if (!sectionRef.current || hasAnimated.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const isInView = (
        rect.top <= (window.innerHeight * 0.7) &&
        rect.bottom >= (window.innerHeight * 0.3)
      );
      
      if (isInView && !hasAnimated.current) {
        setIsVisible(true);
        hasAnimated.current = true;
        
        // Start all animations
        animateNumber(8, setYears, 2000);
        animateNumber(1500, setClients, 2000);
        animateNumber(98, setSatisfaction, 2000);
        
        // Remove the scroll listener after animation
        window.removeEventListener('scroll', checkVisibility);
      }
    };

    // Check on mount and on scroll
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
    
    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  const handleBookNow = () => {
    window.open(calendlyUrl, '_blank');
  };

  return (
    <section ref={sectionRef} id="about" className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-green-500 mr-3"></div>
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Approach</span>
            <div className="w-12 h-0.5 bg-green-500 ml-3"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-green-600 bg-clip-text text-transparent">
              Redefining Mental Wellness
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Where compassion meets expertise in the journey to emotional well-being
          </p>
        </div>

        {/* Modern Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Animated Stats */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-8 text-white text-center shadow-2xl">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {years}+
                  </div>
                  <div className="text-sm uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {clients}+
                  </div>
                  <div className="text-sm uppercase tracking-wider">Clients Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {satisfaction}%
                  </div>
                  <div className="text-sm uppercase tracking-wider">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">5★</div>
                  <div className="text-sm uppercase tracking-wider">Professional Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed">
                At <span className="font-semibold text-green-600">MindfulTherapy</span>, we don't just provide therapy – 
                we <span className="bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent font-bold">cultivate resilience</span>. 
                Our licensed therapists are trained in evidence-based techniques, blending compassionate care 
                with clinical excellence.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Founded in 2016, we've supported thousands of clients across NEW YORK in their mental health journeys. 
                Our commitment to <span className="font-semibold">empathy, expertise, and personalized care</span> has 
                established us as a trusted destination for those seeking meaningful change and emotional wellness.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mt-8 border-l-4 border-green-500">
                <p className="text-gray-700 italic text-lg">
                  "We believe that therapy is not just a service, but a transformative journey 
                  that empowers individuals to live more fulfilling and balanced lives."
                </p>
              </div>
            </div>

            {/* Premium Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <span className="text-gray-700 font-medium">Evidence-Based Methods</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <span className="text-gray-700 font-medium">Licensed Therapists</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <span className="text-gray-700 font-medium">Personalized Care</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <span className="text-gray-700 font-medium">Safe & Confidential</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button 
            onClick={handleBookNow}
            className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
          >
            Begin Your Healing Journey
          </button>
          <p className="text-gray-500 text-sm mt-3">
            Click to schedule your confidential consultation
          </p>
        </div>
      </div>
    </section>
  );
}