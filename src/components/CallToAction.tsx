import React from "react";

const CallToAction = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements - made more visible */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/25 rounded-full blur-2xl translate-x-1/2"></div>
      <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-primary/15 rounded-full blur-xl"></div>
      
      {/* More visible geometric shapes */}
      <div className="absolute top-20 left-20 w-8 h-8 bg-primary/40 rotate-45 animate-pulse"></div>
      <div className="absolute top-32 right-32 w-12 h-12 bg-primary/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 right-20 w-6 h-6 bg-primary/50 rotate-12"></div>
      <div className="absolute bottom-40 left-16 w-10 h-10 bg-primary/35 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-primary/45 rotate-45 -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Additional scattered elements */}
      <div className="absolute top-16 right-1/4 w-3 h-12 bg-primary/20 rotate-12"></div>
      <div className="absolute bottom-16 left-1/4 w-12 h-3 bg-primary/25"></div>
      
      {/* More visible pattern overlay */}
      <div className="absolute inset-0 opacity-[0.08]" 
           style={{
             backgroundImage: `radial-gradient(circle at 2px 2px, rgba(254,92,2,0.3) 1px, transparent 0)`,
             backgroundSize: '20px 20px'
           }}>
      </div>
      
      <div className="section-container relative">
        {/* Empty content area with just visual spacing */}
        <div className="h-32"></div>
      </div>
    </section>
  );
};

export default CallToAction;