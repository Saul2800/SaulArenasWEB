import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 500); // Wait for fade out
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!show) return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-opacity duration-500 ${show ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-[#E50914] animate-pulse">
          SAÚL
        </h1>
      </div>
      <div className="mt-8 w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div className="h-full bg-[#E50914] animate-[width_2s_ease-in-out_forwards]" style={{ width: '0%' }}></div>
      </div>
      <style>{`
        @keyframes width {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;