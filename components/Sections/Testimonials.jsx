'use client';

import { useEffect, useState } from 'react';
import TestimonialCard from '@/components/UI/TestimonialCard';

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Therapy Client",
    comment: "MindfulTherapy changed my life. After struggling with anxiety for years, I finally found the tools and support I needed. My therapist is incredibly compassionate and professional.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Couples Counseling",
    comment: "My partner and I were on the verge of separation. Through couples counseling, we learned to communicate effectively and rediscovered our connection. Forever grateful.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Anxiety Treatment",
    comment: "The anxiety treatment program gave me my life back. I went from daily panic attacks to feeling in control. The evidence-based approach really works.",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "Trauma Therapy",
    comment: "EMDR therapy helped me process trauma I'd carried for decades. The safe, supportive environment made all the difference in my healing journey.",
    rating: 5
  }
];

export default function Testimonials() {
  // Animation for numbers - SIMPLIFIED VERSION
  const [retention, setRetention] = useState(0);
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(0);

  // Your Calendly URL
  const calendlyUrl = "https://calendly.com/ibrahimjamiuakeem/30min";

  const animateNumber = (target, setter, duration, decimals = 0) => {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setter(target);
        clearInterval(timer);
      } else {
        const value = decimals === 0 ? Math.floor(start) : parseFloat(start.toFixed(decimals));
        setter(value);
      }
    }, 16);
  };

  useEffect(() => {
    // SIMPLE TIMER instead of Intersection Observer (works on all devices)
    const timer = setTimeout(() => {
      // Animate numbers with simple increments
      animateNumber(95, setRetention, 2000);
      animateNumber(4.9, setRating, 2000, 1);
      animateNumber(300, setReviews, 2000);
    }, 500); // Start animation after 0.5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleBookAppointment = () => {
    window.open(calendlyUrl, '_blank');
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-teal-100 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-green-500 mr-3"></div>
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Client Stories</span>
            <div className="w-12 h-0.5 bg-green-500 ml-3"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stories of <span className="bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">Healing & Growth</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our clients have transformed their lives through professional therapy
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              comment={testimonial.comment}
              rating={testimonial.rating}
            />
          ))}
        </div>

        {/* Trust Indicators with Animated Numbers */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Join Our Community of Thriving Clients
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {retention}%
                </div>
                <div className="text-sm text-gray-600">Client Progress</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {rating}★
                </div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {reviews}+
                </div>
                <div className="text-sm text-gray-600">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Crisis Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Begin Your Healing Journey?
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of clients who have found hope, healing, and personal growth through MindfulTherapy
            </p>
            <button 
              onClick={handleBookAppointment}
              className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </button>
            <p className="text-green-100 text-sm mt-3">
              Confidential consultation • Licensed therapists • Evidence-based care
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}