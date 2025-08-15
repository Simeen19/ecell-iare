import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import Gallery from '@/components/Gallery';
import Quote from '@/components/Quote';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <VideoSection />
      <Gallery />
      <Quote />
    </div>
  );
};

export default Index;