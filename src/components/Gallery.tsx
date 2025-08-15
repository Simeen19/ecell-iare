import { useState, useEffect } from 'react';
import teamCollaboration from '@/assets/team-collaboration.jpg';
import startupPitch from '@/assets/startup-pitch.jpg';
import innovationLab from '@/assets/innovation-lab.jpg';
import networkingEvent from '@/assets/networking-event.jpg';

const Gallery = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);

  const galleryItems = [
    {
      id: 1,
      image: teamCollaboration,
      title: 'Team Collaboration',
      description: 'Our dynamic teams working together to build innovative solutions',
      category: 'Teamwork'
    },
    {
      id: 2,
      image: startupPitch,
      title: 'Startup Pitch Event',
      description: 'Entrepreneurs presenting their groundbreaking ideas to investors',
      category: 'Events'
    },
    {
      id: 3,
      image: innovationLab,
      title: 'Innovation Lab',
      description: 'Cutting-edge workspace where creativity meets technology',
      category: 'Workspace'
    },
    {
      id: 4,
      image: networkingEvent,
      title: 'Networking Summit',
      description: 'Building connections that shape the future of entrepreneurship',
      category: 'Networking'
    },
    {
      id: 5,
      image: teamCollaboration,
      title: 'Mentorship Program',
      description: 'Experienced entrepreneurs guiding the next generation',
      category: 'Mentorship'
    },
    {
      id: 6,
      image: innovationLab,
      title: 'Tech Workshop',
      description: 'Hands-on learning experiences with latest technologies',
      category: 'Learning'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.gallery-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="py-20 bg-pure-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-green mb-6">
            Our Gallery
          </h2>
          <p className="text-xl text-deep-green/80 max-w-3xl mx-auto leading-relaxed">
            Capturing moments of innovation, collaboration, and entrepreneurial spirit 
            that define our journey at E-Cell IARE
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              data-index={index}
              className={`gallery-item group cursor-pointer transition-all duration-700 ${
                visibleItems[index] ? 'animate-fade-in-up' : 'opacity-0'
              } ${
                index % 3 === 1 ? 'md:mt-8' : index % 3 === 2 ? 'md:mt-16' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-hover smooth-hover">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-deep-green/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                    <div className="p-6 text-pure-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="inline-block px-3 py-1 bg-light-mint/20 rounded-full text-sm font-medium mb-3 backdrop-blur-sm">
                        {item.category}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-pure-white/90 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-light-mint rounded-2xl transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-deep-green mb-4">
              Want to be part of our story?
            </h3>
            <p className="text-deep-green/80 mb-6">
              Join E-Cell IARE and be featured in our next gallery of innovation and success stories.
            </p>
            <button>
             <a href="https://www.instagram.com/ecelliare?igsh=aG0wMnI1MjI0NGoz" target="_blank"rel="noopener noreferrer"
             className="bg-deep-green hover:bg-soft-teal text-pure-white px-8 py-3 rounded-full font-semibold smooth-hover hover:scale-105 shadow-soft inline-block transition">
              Join Our Community
              </a>
            </button>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-10 right-10 w-6 h-6 bg-light-mint rounded-full animate-float opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-4 h-4 bg-soft-teal rounded-full animate-pulse-soft opacity-40"></div>
      </div>
    </section>
  );
};

export default Gallery;