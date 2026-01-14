import React, { useEffect, useState } from 'react';
import { Download, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Assets } from '../assets';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar roughly
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-500 ease-in-out px-4 md:px-12 py-4 flex items-center justify-between ${isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      
      {/* Left Side */}
      <div className="flex items-center space-x-8">
        <div 
            onClick={scrollToTop}
            className="text-[#E50914] font-black text-2xl md:text-3xl tracking-tighter cursor-pointer hover:scale-105 transition-transform"
        >
            SAÚL
        </div>
        <ul className="hidden md:flex space-x-6 text-sm text-white/80 font-normal">
            {/* Ordered according to App.tsx layout */}
            <li onClick={() => scrollToSection('skills')} className="cursor-pointer hover:text-gray-300 transition">{t.navbar.skills}</li>
            <li onClick={() => scrollToSection('experience')} className="cursor-pointer hover:text-gray-300 transition">{t.navbar.experience}</li>
            <li onClick={() => scrollToSection('projects')} className="cursor-pointer hover:text-gray-300 transition">{t.navbar.projects}</li>
            <li onClick={() => scrollToSection('education')} className="cursor-pointer hover:text-gray-300 transition">{t.navbar.education}</li>
            <li onClick={() => scrollToSection('language')} className="cursor-pointer hover:text-gray-300 transition">{t.navbar.languages}</li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-2 md:space-x-4">
        {/* Language Switcher */}
        <button 
          onClick={toggleLanguage}
          className="flex items-center space-x-1 text-white bg-black/40 border border-white/30 px-3 py-1.5 rounded hover:bg-white/10 transition backdrop-blur-sm"
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm font-semibold">{language.toUpperCase()}</span>
        </button>

        <a 
          href={Assets.cvLink} 
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center bg-[#E50914] text-white px-4 py-2 rounded text-sm font-bold hover:bg-[#b2070f] transition shadow-lg"
        >
          <Download className="w-4 h-4 mr-2" />
          {t.navbar.downloadCv}
        </a>
        
        {/* Mobile Download Icon (Only icon to save space) */}
         <a 
          href={Assets.cvLink}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden flex items-center bg-[#E50914] text-white p-2 rounded hover:bg-[#b2070f] transition shadow-lg"
        >
          <Download className="w-4 h-4" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;