import { useEffect, useState, useRef } from 'react';

const Quote = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const quote = "Innovation distinguishes between a leader and a follower.";
  const author = "Steve Jobs";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsTyping(true), 500);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="quote" 
      ref={sectionRef}
      className="py-20 bg-deep-green relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-soft-teal/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-light-mint/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="w-4 h-4 bg-pure-white/10 rounded-full animate-float absolute top-20 left-1/4"></div>
          <div className="w-6 h-6 bg-pure-white/10 rounded-full animate-pulse-soft absolute bottom-20 right-1/4"></div>
          <div className="w-3 h-3 bg-pure-white/10 rounded-full animate-float absolute top-1/3 right-1/3" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote Icon */}
          <div 
            className={`mb-8 transition-all duration-1000 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <svg 
              className="w-16 h-16 text-light-mint mx-auto opacity-60" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
          </div>

          {/* Quote Text */}
          <div 
            className={`mb-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <blockquote className="text-3xl md:text-5xl font-bold text-pure-white leading-tight">
              {isTyping ? (
                <span className="animate-typewriter inline-block">
                  "{quote}"
                </span>
              ) : (
                <span className="opacity-0">"{quote}"</span>
              )}
            </blockquote>
          </div>

          {/* Author */}
          <div 
            className={`transition-all duration-1000 delay-1000 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <div className="inline-block">
              <p className="text-xl md:text-2xl text-light-mint font-medium relative">
                — {author}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-soft-teal to-deep-green transform scale-x-0 origin-left transition-transform duration-1000 delay-1500 group-hover:scale-x-100"></span>
              </p>
              <div 
                className="h-0.5 bg-gradient-to-r from-soft-teal to-light-mint mt-2 transform scale-x-0 origin-left transition-transform duration-1000 delay-1500"
                style={{ 
                  animation: isVisible ? 'scaleX 1s ease-out 1.5s forwards' : 'none' 
                }}
              ></div>
            </div>
          </div>

          {/* Call to Action */}
          <div 
            className={`mt-12 transition-all duration-1000 delay-1000 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <div className="glass rounded-3xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-pure-white mb-4">
                Ready to Lead Innovation?
              </h3>
              <p className="text-pure-white/80 mb-6 leading-relaxed">
                Join E-Cell IARE and transform your innovative ideas into impactful ventures. 
                Connect with like-minded entrepreneurs and build the future together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-light-mint hover:bg-pale-aqua text-deep-green px-8 py-3 rounded-full font-semibold smooth-hover hover:scale-105 shadow-soft">
                  Get Started Today
                </button>
                <button className="border-2 border-pure-white text-pure-white hover:bg-pure-white hover:text-deep-green px-8 py-3 rounded-full font-semibold smooth-hover hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div 
            className={`mt-12 transition-all duration-1000 delay-1200 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-pure-white/70">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>ecell@iare.ac.in</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>IARE, Hyderabad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add the scaleX keyframe animation
const style = document.createElement('style');
style.textContent = `
  @keyframes scaleX {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
  }
`;
document.head.appendChild(style);

export default Quote;