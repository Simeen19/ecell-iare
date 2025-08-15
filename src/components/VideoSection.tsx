import { useEffect, useRef, useState } from 'react';

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
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
      id="video" 
      ref={sectionRef}
      className="py-20 bg-pale-aqua relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-soft-teal rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-light-mint rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-green mb-6">
            Our Journey
          </h2>
          <p className="text-xl text-deep-green/80 max-w-3xl mx-auto leading-relaxed">
            Discover how E-Cell IARE is fostering innovation and entrepreneurship 
            among students through cutting-edge programs and initiatives
          </p>
        </div>

        <div 
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {/* Glassmorphism Video Container */}
          <div className="glass rounded-3xl p-8 relative overflow-hidden">
            <div className="aspect-video bg-deep-green/10 rounded-2xl overflow-hidden relative">
              {/* Placeholder Video - Replace with actual video */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-soft-teal to-deep-green relative">
                <div className="absolute inset-0 bg-deep-green/20"></div>
                
                {/* Play Button */}
                <button className="relative z-10 w-20 h-20 bg-pure-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-pure-white hover:scale-110 smooth-hover group">
                  <svg 
                    className="w-8 h-8 text-deep-green ml-1 group-hover:scale-110 transition-transform" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>

                {/* Video Placeholder Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-pure-white text-center p-8">
                  <h3 className="text-2xl font-bold mb-4">E-Cell IARE Introduction</h3>
                  <p className="text-lg opacity-90">Watch our story unfold</p>
                </div>
              </div>
              
              {/* Hidden video element for future implementation */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover hidden"
                muted
                playsInline
              >
                {/* Add your video source here */}
                <source src="#" type="video/mp4" />
              </video>
            </div>

            {/* Video Description */}
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-semibold text-deep-green mb-3">
                Innovation in Action
              </h3>
              <p className="text-deep-green/70 leading-relaxed">
                Experience the dynamic environment of E-Cell IARE where ideas come to life. 
                See how our community of passionate entrepreneurs is building the future, 
                one innovative solution at a time.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-light-mint rounded-full opacity-60 animate-pulse-soft"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-soft-teal rounded-full opacity-40 animate-float"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div 
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-600 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {[
            { number: '500+', label: 'Active Members' },
            { number: '50+', label: 'Successful Startups' },
            { number: '100+', label: 'Events Conducted' },
            { number: '₹10L+', label: 'Funding Raised' },
          ].map((stat, index) => (
            <div key={index} className="text-center glass rounded-2xl p-6 hover:scale-105 smooth-hover">
              <div className="text-3xl md:text-4xl font-bold text-deep-green mb-2">
                {stat.number}
              </div>
              <div className="text-deep-green/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;