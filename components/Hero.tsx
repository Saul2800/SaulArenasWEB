import React, { useState, useRef } from 'react';
import { Play, Info } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Assets } from '../assets';

interface HeroProps {
  onContactClick: () => void;
  onMoreInfoClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick, onMoreInfoClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useLanguage();

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
        videoRef.current.play().catch(e => console.log("Autoplay prevented", e));
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
        className="relative h-[90vh] w-full bg-[#141414] group overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
      {/* Background Image (Always visible as fallback/base) */}
      <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <img 
          src={Assets.heroBackground} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-60 grayscale-[80%]"
        />
      </div>

      {/* Background Video (Visible on Hover) */}
      <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
         {/* Using a tech-abstract video */}
         <video 
            ref={videoRef}
            src={Assets.heroVideo}
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-50"
         />
      </div>

      {/* Vignette Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-transparent to-transparent opacity-90 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent pointer-events-none"></div>

      {/* Hero Content */}
      <div className="absolute top-[20%] left-4 md:left-12 max-w-4xl z-20 pointer-events-none md:pointer-events-auto transition-all duration-500 w-[90%] md:w-auto">
        
        {/* Title & Mobile Profile Pic Container */}
        <div className="flex items-end mb-4 md:block">
            {/* Title */}
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter netflix-shadow transition-all duration-700">
              SAÚL<br/>ARENAS
            </h1>
            
            {/* Mobile Profile Pic - integrated next to name */}
            <img 
                src={Assets.profile} 
                alt="Saul Arenas" 
                className={`w-24 h-24 rounded-full object-cover border-2 border-[#E50914] ml-4 md:hidden shadow-lg transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`} 
            />
        </div>

        {/* Subtitle / Roles */}
        <div className="flex flex-wrap items-center space-x-4 text-white font-semibold text-lg md:text-xl mb-6 shadow-black drop-shadow-md">
            <span>{t.hero.role1}</span>
            <span className="text-[#E50914]">•</span>
            <span>{t.hero.role2}</span>
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button 
            onClick={onContactClick}
            className="flex items-center bg-white text-black px-6 py-2 md:px-8 md:py-3 rounded font-bold hover:bg-white/90 transition text-sm md:text-lg pointer-events-auto"
          >
            <Play className="w-5 h-5 md:w-6 md:h-6 mr-2 fill-current" />
            {t.hero.contactMe}
          </button>
          <button 
            onClick={onMoreInfoClick}
            className="flex items-center bg-[#6d6d6eb3] text-white px-6 py-2 md:px-8 md:py-3 rounded font-bold hover:bg-[#6d6d6e80] transition backdrop-blur-sm text-sm md:text-lg pointer-events-auto"
          >
            <Info className="w-5 h-5 md:w-6 md:h-6 mr-2" />
            {t.hero.moreInfo}
          </button>
        </div>
      </div>

      {/* Desktop Profile Picture - Absolute Right */}
      {/* Hidden on mobile, visible on MD+ (including landscape tablets/phones if they hit md breakpoint) */}
      <div 
        className={`hidden md:block absolute right-12 md:right-24 top-[20%] z-20 transition-all duration-700 ease-in-out transform ${isHovered ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'}`}
      >
        <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full p-1 bg-gradient-to-br from-[#E50914] to-transparent">
            <img 
                src={Assets.profile} 
                alt="Saul Arenas" 
                className="w-full h-full rounded-full object-cover border-4 border-[#141414]"
            />
        </div>
      </div>

    </div>
  );
};

export default Hero;