import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>
      
      {!isLoading && (
        <div className="min-h-screen">
          <Header />
          <Hero />
          <Services />
          <About />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}