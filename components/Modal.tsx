import React, { useEffect } from 'react';
import { PortfolioItem } from '../types';
import { X, Play, Plus, ThumbsUp, Star, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Assets } from '../assets';

interface ModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ item, onClose }) => {
  const { t } = useLanguage();

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [item]);

  if (!item) return null;

  const isLogo = item.category === 'experience' || item.category === 'education';
  const isSkill = item.category === 'skill';
  const isEducation = item.category === 'education';
  const isExperience = item.category === 'experience';
  const isLanguage = item.category === 'language';
  const isProject = item.category === 'project';
  
  // Combine logic for Skills, Education, and Experience (for tech stack)
  const showTechAsButtons = isSkill || isEducation || isExperience;
  
  // Logic for footer stars/icons
  const showStarRating = isSkill || isEducation;
  
  // Specific logic for Language items
  const isEnglish = isLanguage && (item.title === 'English' || item.title === 'Inglés');
  const isSpanish = isLanguage && (item.title === 'Spanish' || item.title === 'Español');

  // Date logic - Hide for projects
  const dateDisplay = (isSkill || isLanguage) ? "2026" : (isProject ? null : (item.details?.duration || '2024'));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black/70 backdrop-blur-sm p-4 animate-fade-in" onClick={onClose}>
      <div 
        className="relative w-full max-w-4xl bg-[#181818] rounded-lg shadow-2xl overflow-hidden transform transition-all animate-scale-up mt-10 mb-10"
        onClick={(e) => e.stopPropagation()} 
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-[#181818] rounded-full p-2 hover:bg-[#2a2a2a] transition-colors"
        >
          <X className="text-white w-6 h-6" />
        </button>

        {/* Hero Image in Modal */}
        <div className="relative h-[300px] md:h-[450px] bg-[#2f2f2f]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent z-10" />
          <img 
            src={item.image} 
            alt={item.title} 
            className={`w-full h-full ${isLogo || isLanguage ? 'object-contain p-12' : 'object-cover grayscale opacity-80'}`}
          />
          
          <div className="absolute bottom-10 left-8 md:left-12 z-20 w-[90%]">
            
            {/* Title with optional Link (Experience only per request, or general if preferred) */}
            {item.details?.link && item.category === 'experience' ? (
                <a href={item.details.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 group hover:opacity-80 transition-opacity">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 netflix-shadow underline decoration-transparent group-hover:decoration-white transition-all">{item.title}</h2>
                    <ExternalLink className="w-6 h-6 md:w-8 md:h-8 text-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
            ) : (
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4 netflix-shadow">{item.title}</h2>
            )}
            
            {showTechAsButtons ? (
               /* Skills, Education & Experience: Show Tech Stack Tags instead of Buttons */
               <div className="flex flex-wrap gap-2">
                  {item.details?.techStack?.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-4 py-2 bg-white/10 backdrop-blur-md text-white font-bold rounded border border-white/20 text-sm md:text-base hover:bg-white/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
               </div>
            ) : (
              /* Standard (Projects): Show Buttons */
              <div className="flex space-x-3">
                <a 
                    href={item.details?.link || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-2 bg-white text-black font-bold rounded hover:bg-[#e6e6e6] transition"
                >
                  <Play className="w-5 h-5 mr-2" fill="currentColor" />
                  {t.modal.viewCode}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-4 text-sm md:text-base">
              <span className="text-[#46d369] font-bold">{item.subtitle}</span> 
              <span className="border border-[#b3b3b3]/40 px-2 py-0.5 text-xs text-[#b3b3b3] uppercase">{item.category}</span>
              {dateDisplay && <span className="text-[#b3b3b3]">{dateDisplay}</span>}
            </div>
            
            <p className="text-white text-lg leading-relaxed mb-6 font-light">
              {item.description}
            </p>

            {item.details?.role && (
               <div className="mb-4">
                 <h4 className="text-[#777] text-sm font-semibold">{t.modal.role}</h4>
                 <p className="text-[#b3b3b3]">{item.details.role}</p>
               </div>
            )}
          </div>

          <div className="md:col-span-1 space-y-4">
            <div>
              <span className="text-[#777] text-sm block mb-1">{t.modal.tags}</span>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="text-sm text-white hover:underline cursor-pointer">
                    {tag},
                  </span>
                ))}
              </div>
            </div>

            {/* If NOT (skill/education/experience), show tech stack here. */}
            {!showTechAsButtons && item.details?.techStack && (
              <div>
                <span className="text-[#777] text-sm block mb-1">{t.modal.techStack}</span>
                <div className="flex flex-wrap gap-2">
                  {item.details.techStack.map(stack => (
                     <span key={stack} className="text-sm text-[#b3b3b3] border border-[#b3b3b3]/20 px-2 py-1 rounded-sm">
                        {stack}
                     </span>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-[#404040]">
                {showStarRating ? (
                    /* Skills & Education: Only Stars, bigger */
                    <div>
                        <div className="flex items-center space-x-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-8 h-8 text-yellow-500 fill-current" />
                            ))}
                        </div>
                    </div>
                ) : isEnglish ? (
                    /* English Language: Duolingo + 120 */
                    <div className="flex items-center space-x-3">
                        <img src={Assets.languages.duolingo} alt="Duolingo" className="w-10 h-10 object-contain" />
                        <span className="text-xl font-bold text-[#58CC02]">120</span>
                    </div>
                ) : isSpanish ? (
                     /* Spanish Language: Mexico Flag Cartoon */
                    <div>
                        <img src={Assets.languages.mxCartoon} alt="Mexico" className="w-12 h-12 object-contain" />
                    </div>
                ) : (
                    /* Default (Experience & Projects) - Empty footer */
                    <></>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;