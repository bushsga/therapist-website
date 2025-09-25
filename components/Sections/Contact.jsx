'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-100 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-green-500 mr-3"></div>
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <div className="w-12 h-0.5 bg-green-500 ml-3"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Visit <span className="bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">Our Practice</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience compassionate care at our tranquil therapy practice in the heart of NEW YORK
          </p>
        </div>

        {/* Contact Information Card - Centered */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">MindfulTherapy Practice</h3>
            <p className="text-gray-600">Where healing meets hope</p>
          </div>

          <div className="space-y-6">
            {/* Address */}
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-3 text-lg">📍 Practice Address</h4>
              <p className="text-gray-700">123 Serenity Lane, NY 10016</p>
              <p className="text-gray-700">NEW YORK, USA</p>
              <p className="text-sm text-gray-500 mt-2">Private entrance • Discreet location • Wheelchair accessible</p>
            </div>

            {/* Hours */}
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-3 text-lg">🕒 Session Hours</h4>
              <div className="space-y-1">
                <p className="text-gray-700"><span className="font-medium">Mon - Thu:</span> 9:00 AM - 7:00 PM</p>
                <p className="text-gray-700"><span className="font-medium">Friday:</span> 9:00 AM - 5:00 PM</p>
                <p className="text-gray-700"><span className="font-medium">Saturday:</span> <span className="text-green-600">By Appointment Only</span></p>
                <p className="text-gray-700"><span className="font-medium">Sunday:</span> <span className="text-green-600">Emergency Sessions Available</span></p>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-3 text-lg">📞 Contact Information</h4>
              <p className="text-blue-600 font-semibold text-xl mb-2">+1 812 345 6789</p>
              <p className="text-gray-600">Call, text, or email for appointments</p>
              <p className="text-gray-500 text-sm mt-1">confidential@mindfultherapy.com</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8 pt-6 border-t border-gray-200">
            <a
              href="https://calendly.com/ibrahimjamiuakeem/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
            >
              Schedule Consultation
            </a>
            <p className="text-sm text-gray-500 mt-3">Confidential online booking available</p>
          </div>
        </div>
      </div>
    </section>
  );
}