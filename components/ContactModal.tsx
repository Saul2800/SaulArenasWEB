import React, { useState } from 'react';
import { X, Mail, Phone, Linkedin, Github, ExternalLink, Copy, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);
  const { t } = useLanguage();

  if (!isOpen) return null;

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopyFeedback(type);
    setTimeout(() => setCopyFeedback(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div 
        className="relative w-full max-w-md bg-[#181818] rounded-lg shadow-2xl overflow-hidden transform transition-all animate-scale-up border border-gray-800"
        onClick={(e) => e.stopPropagation()} 
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-8">
            <h2 className="text-3xl font-black text-white mb-8 text-center">{t.contact.title}</h2>
            
            <div className="space-y-4">
                {/* Email - Copyable */}
                <div 
                  onClick={() => handleCopy('saul00arenas@gmail.com', 'email')}
                  className="flex items-center group p-4 rounded-md hover:bg-white/10 transition-colors cursor-pointer relative"
                >
                    <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                        <Mail size={24} />
                    </div>
                    <div className="ml-4 flex-1">
                        <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">{t.contact.emailLabel}</p>
                        <p className="text-white font-medium break-all">saul00arenas@gmail.com</p>
                    </div>
                    {copyFeedback === 'email' ? (
                        <div className="absolute right-4 bg-green-500 text-white text-xs px-2 py-1 rounded flex items-center animate-pulse">
                             <Check size={12} className="mr-1" /> {t.contact.copied}
                        </div>
                    ) : (
                        <Copy size={16} className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity absolute right-4" />
                    )}
                </div>

                {/* Phone - Copyable */}
                <div 
                  onClick={() => handleCopy('+52 3311504261', 'phone')}
                  className="flex items-center group p-4 rounded-md hover:bg-white/10 transition-colors cursor-pointer relative"
                >
                    <div className="w-12 h-12 rounded-full bg-green-600/20 flex items-center justify-center text-green-500 group-hover:bg-green-600 group-hover:text-white transition-colors">
                        <Phone size={24} />
                    </div>
                    <div className="ml-4 flex-1">
                         <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">{t.contact.phoneLabel}</p>
                        <p className="text-white font-medium">+52 3311504261</p>
                    </div>
                    {copyFeedback === 'phone' ? (
                        <div className="absolute right-4 bg-green-500 text-white text-xs px-2 py-1 rounded flex items-center animate-pulse">
                             <Check size={12} className="mr-1" /> {t.contact.copied}
                        </div>
                    ) : (
                         <Copy size={16} className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity absolute right-4" />
                    )}
                </div>

                <a href="https://www.linkedin.com/in/sa%C3%BAl-arenas-53a873141/es/" target="_blank" rel="noopener noreferrer" className="flex items-center group p-4 rounded-md hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Linkedin size={24} />
                    </div>
                    <div className="ml-4 flex-1">
                        <div className="flex items-center">
                            <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold mr-2">{t.contact.linkedinLabel}</p>
                            <ExternalLink size={12} className="text-gray-500" />
                        </div>
                        <p className="text-white font-medium">Saúl Arenas</p>
                    </div>
                </a>

                 <a href="https://github.com/Saul2800" target="_blank" rel="noopener noreferrer" className="flex items-center group p-4 rounded-md hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-gray-600/20 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-black transition-colors">
                        <Github size={24} />
                    </div>
                    <div className="ml-4 flex-1">
                         <div className="flex items-center">
                            <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold mr-2">{t.contact.githubLabel}</p>
                             <ExternalLink size={12} className="text-gray-500" />
                        </div>
                        <p className="text-white font-medium">Saul2800</p>
                    </div>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;