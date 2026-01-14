import React, { useRef, useState } from 'react';
import { SectionData, PortfolioItem } from '../types';
import Tile from './Tile';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface RowProps {
  section: SectionData;
  onItemClick: (item: PortfolioItem) => void;
  exploreLink?: string;
}

const Row: React.FC<RowProps> = ({ section, onItemClick, exploreLink }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);
  const { t } = useLanguage();

  const handleClick = (direction: 'left' | 'right') => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth + 200
        : scrollLeft + clientWidth - 200;

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
      
      if (direction === 'left' && scrollTo <= 0) {
          setIsMoved(false);
      }
    }
  };

  return (
    <div className="h-60 md:h-72 pl-4 md:pl-12 my-4 md:my-8 relative group">
      <h2 className="text-[#e5e5e5] font-semibold text-lg md:text-xl transition-colors hover:text-white mb-2 md:mb-4 z-10 relative flex items-center">
        {section.title}
        {exploreLink && (
            <a 
              href={exploreLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-[#54b9c5] ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:inline-block hover:underline cursor-pointer font-bold"
            >
              {t.row.exploreAll}
            </a>
        )}
      </h2>

      <div className="group/row relative">
        <ChevronLeft 
            className={`absolute top-0 bottom-0 left-0 z-40 m-auto h-full w-12 cursor-pointer opacity-0 transition group-hover/row:opacity-100 hover:scale-125 bg-black/50 text-white p-2 ${!isMoved && "hidden"}`}
            onClick={() => handleClick("left")}
        />

        <div 
            ref={rowRef}
            className="flex items-center space-x-4 overflow-x-scroll no-scrollbar scroll-smooth py-8 pl-4 pr-12 -ml-4"
        >
            {section.items.map((item, index) => (
              <Tile 
                key={item.id} 
                item={item} 
                onClick={onItemClick}
                isFirst={index === 0}
                isLast={index === section.items.length - 1}
              />
            ))}
        </div>

        <ChevronRight 
            className="absolute top-0 bottom-0 right-0 z-40 m-auto h-full w-12 cursor-pointer opacity-0 transition group-hover/row:opacity-100 hover:scale-125 bg-black/50 text-white p-2"
            onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default Row;