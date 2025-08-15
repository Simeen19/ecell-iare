import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
    }> = [];
    const colors = ['#A5EAD4', '#66B49F', '#1A9B74'];
    const createParticle = (x: number, y: number) => {
      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 8 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1
      };
    };

    // Create initial particles
    for (let i = 0; i < 15; i++) {
      particles.push(createParticle(Math.random() * canvas.width, Math.random() * canvas.height));
    }
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    canvas.addEventListener('mousemove', handleMouseMove);
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Mouse interaction
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          particle.vx += dx * 0.0001;
          particle.vy += dy * 0.0001;
        }
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.001;

        // Boundary bounce
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -0.8;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -0.8;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.life * 50).toString(16).padStart(2, '0');
        ctx.fill();

        // Remove dead particles
        if (particle.life <= 0) {
          particles.splice(index, 1);
          particles.push(createParticle(Math.random() * canvas.width, Math.random() * canvas.height));
        }
      });
      requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-bg">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        
        {/* Gradient Waves */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-wave animate-wave opacity-30"></div>
          <div className="absolute top-10 left-0 w-full h-2 bg-gradient-wave animate-wave opacity-20" style={{
          animationDelay: '1s'
        }}></div>
          <div className="absolute top-20 left-0 w-full h-2 bg-gradient-wave animate-wave opacity-10" style={{
          animationDelay: '2s'
        }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-pure-white drop-shadow-lg">
            <span className="block">E - Cell</span>
            <span className="block text-4xl md:text-5xl mt-2 text-light-mint font-bold drop-shadow-lg">IARE</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-pure-white/90 mb-8 animate-fade-in-up font-light tracking-wide" style={{
          animationDelay: '0.3s'
        }}>
            Ideate • Impact • Evolve
          </p>
          
          <p className="text-lg md:text-xl text-pure-white/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{
          animationDelay: '0.6s'
        }}>
            Empowering the next generation of entrepreneurs to transform innovative ideas into impactful ventures
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{
          animationDelay: '0.9s'
        }}>
            <Button size="lg" className="bg-deep-green hover:bg-soft-teal text-pure-white px-8 py-4 text-lg font-semibold rounded-full smooth-hover hover:scale-105 shadow-hover">
              <a href="https://www.instagram.com/ecelliare?igsh=aG0wMnI1MjI0NGoz" target="_blank" rel="noopener noreferrer"> 
              Join Our Community
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-light-mint bg-light-mint/10 backdrop-blur-sm text-light-mint hover:bg-light-mint hover:text-deep-green px-8 py-4 text-lg font-semibold rounded-full smooth-hover hover:scale-105 shadow-soft">
              Explore Programs
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-light-mint rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-soft-teal rounded-full animate-pulse-soft opacity-50"></div>
        <div className="absolute bottom-20 left-20 w-8 h-8 bg-pale-aqua rounded-full animate-float opacity-40" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute bottom-40 right-10 w-5 h-5 bg-light-mint rounded-full animate-pulse-soft opacity-50" style={{
        animationDelay: '1s'
      }}></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-pure-white animate-bounce">
        <svg className="w-6 h-6 mx-auto" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>;
};
export default Hero;