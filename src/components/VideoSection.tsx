import { useEffect, useRef, useState } from 'react';
import ecell_video1 from '@/assets/ecell_video1.mp4';

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
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src={ecell_video1}
                muted
                playsInline
                controls
                poster="/path-to-your-poster-image.jpg" // optional
              />
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
      </div>
    </section>
  );
};

export default VideoSection;