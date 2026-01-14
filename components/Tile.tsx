import React from 'react';
import { PortfolioItem } from '../types';
import { ChevronDown, Play, Plus } from 'lucide-react';

interface TileProps {
  item: PortfolioItem;
  onClick: (item: PortfolioItem) => void;
  isFirst?: boolean;
  isLast?: boolean;
}

const Tile: React.FC<TileProps> = ({ item, onClick, isFirst = false, isLast = false }) => {
  const isLogo = item.category === 'experience' || item.category === 'education';

  // Determine origin for scale effect to prevent clipping
  const originClass = isFirst ? 'origin-left' : isLast ? 'origin-right' : 'origin-center';

  return (
    <div 
      className={`group relative flex-none w-[200px] md:w-[280px] aspect-video mr-4 cursor-pointer transition-all duration-300 ease-in-out hover:scale-125 hover:z-20 ${originClass}`}
      onClick={() => onClick(item)}
    >
      {/* Background Image/Logo */}
      <div className={`w-full h-full rounded-md transition-all duration-300 bg-[#2f2f2f] overflow-hidden`}>
         <img 
            src={item.image} 
            alt={item.title} 
            className={`w-full h-full ${isLogo ? 'object-contain p-8' : 'object-cover group-hover:brightness-110'} transition-all duration-300`}
        />
      </div>
      
      {/* Fallback Overlay (Darkness) - Only for non-logos or if desired */}
      {!isLogo && <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors rounded-md" />}

      {/* Hover Info Content */}
      <div className="absolute inset-0 bg-[#181818] rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 shadow-xl flex flex-col justify-between p-3 overflow-hidden translate-y-4 group-hover:translate-y-0 invisible group-hover:visible">
        
        {/* Image Preview in expanded card */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#2f2f2f]">
             <img src={item.image} alt="" className={`w-full h-full ${isLogo ? 'object-contain p-2' : 'object-cover opacity-60'}`} />
        </div>

        <div className="z-10 mt-auto">
            <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center hover:bg-[#e6e6e6] transition-colors">
                    <Play size={10} fill="black" className="text-black ml-0.5" />
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-[#b3b3b3] flex items-center justify-center hover:border-white transition-colors">
                    <Plus size={12} className="text-white" />
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-[#b3b3b3] flex items-center justify-center hover:border-white transition-colors ml-auto">
                    <ChevronDown size={12} className="text-white" />
                </div>
            </div>

            <h3 className="text-xs font-bold text-[#e5e5e5] mb-1 truncate">{item.title}</h3>
            
            <div className="flex items-center space-x-2 text-[10px] text-[#b3b3b3]">
                <span className="text-[#46d369] font-bold">{item.subtitle}</span>
                <span className="border border-[#b3b3b3] px-1 rounded text-[8px]">{item.category.toUpperCase()}</span>
            </div>

            <div className="flex items-center space-x-1 mt-1 flex-wrap">
                {item.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="text-[9px] text-[#e5e5e5] before:content-['•'] before:mr-1 first:before:content-['']">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Tile;