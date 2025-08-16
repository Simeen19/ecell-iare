import { useEffect, useState, useRef } from "react";

const Quote = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayed, setDisplayed] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);

  const quote = "Innovation distinguishes between a leader and a follower.";
  const author = "Steve Jobs";

  // Intersection Observer for fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!isVisible) return;
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(quote.slice(0, i + 1));
      i++;
      if (i === quote.length) clearInterval(interval);
    }, 60); // <-- slower speed (was 30)
    return () => clearInterval(interval);
  }, [isVisible, quote]);

  return (
    <section
      id="quote"
      ref={sectionRef}
      className="py-16 bg-deep-green relative overflow-hidden"
    >
      {/* Decorative BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-60 h-60 bg-soft-teal/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-light-mint/20 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-2xl mx-auto px-4 sm:px-8 relative z-10 text-center">
        {/* Quote Icon */}
        <div
          className={`mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <svg
            className="w-12 h-12 text-light-mint mx-auto opacity-70"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
          </svg>
        </div>

        {/* Quote Text */}
        <blockquote
          className={`font-bold text-pure-white text-xl sm:text-2xl md:text-3xl leading-snug break-words max-w-full mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ wordBreak: "break-word" }}
        >
          <span
            className="block min-h-[2.5em] text-balance"
            style={{
              borderRight: displayed.length < quote.length ? "2px solid #fff" : "none",
              whiteSpace: "pre-wrap",
              margin: "0 auto",
              maxWidth: "100%",
              overflowWrap: "break-word",
            }}
          >
            "{displayed}"
          </span>
        </blockquote>

        {/* Author */}
        <div
          className={`mt-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg sm:text-xl text-light-mint font-medium">
            — {author}
          </p>
          <div className="h-0.5 w-24 bg-gradient-to-r from-soft-teal to-light-mint mx-auto mt-2 rounded"></div>
        </div>

        {/* Contact Info */}
        <div
          className={`mt-10 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-pure-white/80 text-base">
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
              <span>+91 9398692463</span>
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
    </section>
  );
};

export default Quote;

//this was supporsed to change. 