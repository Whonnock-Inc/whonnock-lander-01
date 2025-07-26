import React from "react";
import { ArrowRight, Star } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="section-container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Stats section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-12">
            <div className="feature-card bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary fill-current" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">99.9%</h3>
              <p className="text-gray-600 text-sm">System Uptime</p>
            </div>
            
            <div className="feature-card bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-primary">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">100k+</h3>
              <p className="text-gray-600 text-sm">Students Safe Daily</p>
            </div>
            
            <div className="feature-card bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-primary">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-600 text-sm">Schools Trust Us</p>
            </div>
          </div>
          
          {/* CTA Content */}
          <div className="pulse-chip mx-auto mb-6">
            <span>Ready to Transform Your Transportation?</span>
          </div>
          
          <h2 className="section-title mb-6">
            Join Schools Nationwide<br />
            Making Transportation Safer
          </h2>
          
          <p className="section-subtitle mx-auto mb-8">
            Start your free trial today and see the difference real-time tracking makes for your school community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact" 
              className="flex items-center justify-center group w-full sm:w-auto text-center" 
              style={{
                backgroundColor: '#FE5C02',
                borderRadius: '1440px',
                boxSizing: 'border-box',
                color: '#FFFFFF',
                cursor: 'pointer',
                fontSize: '16px',
                lineHeight: '24px',
                padding: '16px 32px',
                border: '1px solid white',
                transition: 'all 0.3s ease',
              }}
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a 
              href="#features" 
              className="button-secondary text-center w-full sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;