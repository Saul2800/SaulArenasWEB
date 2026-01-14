import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Row from './components/Row';
import Modal from './components/Modal';
import ContactModal from './components/ContactModal';
import AboutModal from './components/AboutModal';
import LoadingScreen from './components/LoadingScreen';
import { getExperienceData, getProjectsData, getSkillsData, getEducationData, getLanguageData } from './data';
import { PortfolioItem } from './types';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

// Internal component to use the context hooks
const MainApp = () => {
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const { language, t } = useLanguage();

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="relative bg-[#141414] min-h-screen text-[#b3b3b3] font-sans selection:bg-[#E50914] selection:text-white pb-20">
      
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <>
            <Navbar />
            <Hero 
              onContactClick={() => setIsContactOpen(true)} 
              onMoreInfoClick={() => setIsAboutOpen(true)}
            />
            
            {/* Main Content Area - Reduced negative margin to prevent overlap with expanded Hero content */}
            <div className="-mt-16 md:-mt-24 relative z-20 space-y-12 md:space-y-16 pb-12">
                <section id="skills" className="scroll-mt-24">
                    <Row section={getSkillsData(language)} onItemClick={handleItemClick} />
                </section>
                
                <section id="experience" className="scroll-mt-24">
                    <Row section={getExperienceData(language)} onItemClick={handleItemClick} />
                </section>
                
                <section id="projects" className="scroll-mt-24">
                    <Row 
                        section={getProjectsData(language)} 
                        onItemClick={handleItemClick} 
                        exploreLink="https://github.com/Saul2800?tab=repositories"
                    />
                </section>
                
                <section id="education" className="scroll-mt-24">
                    <Row section={getEducationData(language)} onItemClick={handleItemClick} />
                </section>

                <section id="language" className="scroll-mt-24">
                    <Row section={getLanguageData(language)} onItemClick={handleItemClick} />
                </section>
            </div>

            <footer className="w-full mt-20 px-4 py-10 bg-black/40 backdrop-blur-sm border-t border-[#333]">
                <div className="max-w-6xl mx-auto flex flex-col items-center">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-8 flex items-center gap-2">
                         <span>⚙️</span> GitHub Analytics
                    </h3>
                    
                    <a 
                      href="https://github.com/Saul2800" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col md:flex-row gap-4 items-center justify-center hover:opacity-90 transition-opacity"
                    >
                      <img 
                        src="https://github-readme-stats-eight-theta.vercel.app/api?username=Saul2800&show_icons=true&theme=algolia&include_all_commits=true&count_private=true" 
                        alt="Saul2800 GitHub Stats" 
                        className="h-auto max-w-full md:h-[180px] rounded-lg shadow-lg"
                      />
                      <img 
                        src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=Saul2800&layout=compact&langs_count=8&theme=algolia" 
                        alt="Saul2800 Top Languages" 
                        className="h-auto max-w-full md:h-[180px] rounded-lg shadow-lg"
                      />
                    </a>

                    <div className="mt-8 text-[#808080] text-[11px] text-center">
                        {t.footer.disclaimer}
                    </div>
                </div>
            </footer>

            <Modal item={selectedItem} onClose={handleCloseModal} />
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
            <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}

export default App;