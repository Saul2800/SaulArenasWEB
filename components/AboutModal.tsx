import React from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div 
        className="relative w-full max-w-2xl bg-[#181818] rounded-lg shadow-2xl overflow-hidden transform transition-all animate-scale-up border border-gray-800"
        onClick={(e) => e.stopPropagation()} 
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12 overflow-y-auto max-h-[80vh]">
            <h2 className="text-3xl font-black text-white mb-6 text-center">{t.about.title}</h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed font-light text-base md:text-lg text-justify">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
                <p className="font-semibold text-white border-l-4 border-[#E50914] pl-4 italic">
                    {t.about.p4}
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;