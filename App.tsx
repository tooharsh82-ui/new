import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PortfolioSection } from './components/PortfolioSection';
import { SpecialitiesSection } from './components/SpecialitiesSection';
import { ContactSection } from './components/ContactSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'works', 'specialities', 'contact', 'testimonials'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#130722] text-white flex flex-col selection:bg-[#7C3AED] selection:text-white relative">
      {/* Fixed Sticky Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* 1. HERO SECTION */}
        <Hero />

        {/* 2. ABOUT / STORY SECTION */}
        <AboutSection />

        {/* 3. PORTFOLIO / SELECTED WORKS SECTION */}
        <PortfolioSection />

        {/* 4. SPECIALITIES / SERVICES SECTION */}
        <SpecialitiesSection />

        {/* 5. CONTACT & LOCATION SECTION */}
        <ContactSection />

        {/* 6. TESTIMONIALS SECTION */}
        <TestimonialsSection />
      </main>

      {/* 7. FOOTER */}
      <Footer />

      {/* Persistent Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
