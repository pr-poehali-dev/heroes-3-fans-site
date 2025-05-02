
import { Crown, Sword, Wand } from "lucide-react";
import { useState, useEffect } from "react";

const ICONS = [
  { component: Crown, className: "text-homm3-gold w-24 h-24" },
  { component: Sword, className: "text-homm3-gold w-24 h-24" },
  { component: Wand, className: "text-homm3-gold w-24 h-24" }
];

const GameLogo = () => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    // Начальная анимация при загрузке
    setIsAnimating(true);
    
    // Интервал для смены иконки каждые 3 секунды
    const interval = setInterval(() => {
      setIsAnimating(false);
      
      // Небольшая задержка перед сменой иконки для плавности
      setTimeout(() => {
        setCurrentIconIndex((prev) => (prev + 1) % ICONS.length);
        setIsAnimating(true);
      }, 300);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Текущая иконка
  const CurrentIcon = ICONS[currentIconIndex].component;
  const iconClassName = ICONS[currentIconIndex].className;

  return (
    <div 
      className="flex flex-col items-center my-10 cursor-pointer relative" 
      onClick={() => {
        setIsAnimating(false);
        setTimeout(() => {
          setCurrentIconIndex((prev) => (prev + 1) % ICONS.length);
          setIsAnimating(true);
        }, 100);
      }}
    >
      <div className="pixel-frame p-10 bg-homm3-blue border-2 border-homm3-purple relative overflow-hidden">
        {/* Фоновый эффект */}
        <div className={`absolute inset-0 bg-homm3-purple opacity-0 blur-2xl ${isAnimating ? 'animate-logo-pulse' : ''}`}></div>
        
        <div className="flex flex-col items-center relative z-10">
          {/* Анимированная иконка */}
          <div className={`mb-6 transform ${isAnimating ? 'animate-logo-icon' : 'opacity-40'}`}>
            <CurrentIcon className={iconClassName} />
          </div>
          
          <h1 className="font-pixel text-center text-5xl text-homm3-gold mb-4">
            Герои <span className="text-homm3-purple">III</span>
          </h1>
          
          <div className="text-center text-homm3-sky text-xl font-pixel">
            Меча и Магии
          </div>
          
          <p className="text-center text-homm3-sky text-lg mt-4 opacity-80 max-w-md">
            Легендарная стратегия
          </p>
        </div>
      </div>
      
      <div className="mt-3 text-sm text-homm3-sky opacity-80 text-center font-pixel">
        Нажмите, чтобы сменить символ
      </div>
    </div>
  );
};

export default GameLogo;
