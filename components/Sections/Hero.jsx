'use client';

import BookingButton from '@/components/UI/BookingButton';

export default function Hero() {
  const calendlyUrl = "https://calendly.com/ibrahimjamiuakeem/30min";

  return (
    <section 
      id="home" 
      className="relative py-20 text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/therapy-bg-unsplash.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className='absolute inset-0 bg-black opacity-30'></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Professional Therapy Services in NEW YORK
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Where compassion meets expertise. Begin your journey to mental wellness with our licensed therapists.
        </p>
        
        <BookingButton 
          calendlyUrl={calendlyUrl}
          buttonText="Start Your Healing Journey"
          className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-green-500/30 border-2 border-green-400/30 hover:border-green-400/50"
        />
      </div>
    </section>
  );
}