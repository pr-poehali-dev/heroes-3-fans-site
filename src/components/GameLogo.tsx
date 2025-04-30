
import { Crown, Sword, Wand } from "lucide-react";
import { useState, useEffect } from "react";

const GameLogo = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    // Запускаем анимацию при загрузке
    setIsAnimating(true);
    
    // Интервал для повторения анимации каждые 10 секунд
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => setIsAnimating(true), 100);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="flex flex-col items-center my-8 cursor-pointer" 
      onClick={() => {
        setIsAnimating(false);
        setTimeout(() => setIsAnimating(true), 50);
      }}
    >
      <div className="pixel-frame p-5 bg-homm3-blue border-2 border-homm3-purple max-w-md overflow-hidden relative">
        {/* Магический круг подсветки */}
        <div className={`absolute inset-0 bg-homm3-purple opacity-0 rounded-full scale-0 ${isAnimating ? 'animate-logo-pulse' : ''}`}></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className={`transition-transform ${isAnimating ? 'animate-sword-rotate' : ''}`}>
              <Sword className="text-homm3-gold w-7 h-7 transform -rotate-45" />
            </div>
            
            <h1 className="font-pixel text-center text-3xl text-homm3-gold">
              <span className={`inline-block ${isAnimating ? 'animate-char-bounce' : ''}`}>Г</span>
              <span className={`inline-block ${isAnimating ? 'animate-char-bounce delay-75' : ''}`}>е</span>
              <span className={`inline-block ${isAnimating ? 'animate-char-bounce delay-100' : ''}`}>р</span>
              <span className={`inline-block ${isAnimating ? 'animate-char-bounce delay-150' : ''}`}>о</span>
              <span className={`inline-block ${isAnimating ? 'animate-char-bounce delay-200' : ''}`}>и</span>
              <span className="inline-block px-2">III</span>
            </h1>
            
            <div className={`transition-transform ${isAnimating ? 'animate-wand-rotate' : ''}`}>
              <Wand className="text-homm3-gold w-7 h-7 transform rotate-45" />
            </div>
          </div>
          
          <div className="flex justify-center gap-1 mb-2">
            {['М', 'е', 'ч', 'а', ' ', 'и', ' ', 'М', 'а', 'г', 'и', 'и'].map((char, index) => (
              <span 
                key={index} 
                className={`font-pixel text-homm3-sky text-lg inline-block 
                ${char !== ' ' && isAnimating ? 'animate-char-fade delay-' + (index * 50) : ''}`}
              >
                {char}
              </span>
            ))}
          </div>
          
          <p className="text-center text-homm3-sky text-sm mt-2 opacity-80">
            Легендарная стратегия, покорившая сердца миллионов
          </p>

          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className={`absolute top-0 left-1/4 transform -translate-y-full ${isAnimating ? 'animate-star-fall delay-500' : ''}`}>
              <Crown className="text-homm3-gold w-5 h-5" />
            </div>
            <div className={`absolute top-0 right-1/4 transform -translate-y-full ${isAnimating ? 'animate-star-fall delay-1000' : ''}`}>
              <Crown className="text-homm3-gold w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-2 text-xs text-homm3-sky opacity-70">
        Нажмите на лого, чтобы увидеть анимацию
      </div>
    </div>
  );
};

export default GameLogo;
