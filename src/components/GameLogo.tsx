
import { Crown, Sword, Wand, Castle, Dices } from "lucide-react";
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
      className="flex flex-col items-center my-10 cursor-pointer relative" 
      onClick={() => {
        setIsAnimating(false);
        setTimeout(() => setIsAnimating(true), 50);
      }}
    >
      {/* Фоновый эффект */}
      <div className={`absolute -z-10 inset-0 bg-homm3-purple blur-2xl opacity-0 scale-0 ${isAnimating ? 'animate-logo-pulse' : ''}`}></div>
      
      <div className="pixel-frame p-6 bg-homm3-blue border-2 border-homm3-purple max-w-lg overflow-hidden relative">
        {/* Магический круг подсветки */}
        <div className={`absolute inset-0 bg-homm3-purple opacity-0 rounded-full scale-0 ${isAnimating ? 'animate-logo-pulse' : ''}`}></div>
        
        {/* Замки по краям */}
        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
          <Castle className={`text-homm3-gold w-8 h-8 opacity-40 ${isAnimating ? 'animate-castle-glow' : ''}`} />
        </div>
        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
          <Castle className={`text-homm3-gold w-8 h-8 opacity-40 ${isAnimating ? 'animate-castle-glow' : ''}`} />
        </div>
        
        <div className="relative z-10">
          {/* Звезды/руны вокруг названия вместо драконов */}
          <div className="absolute -top-6 left-1/4 transform -translate-x-1/2 opacity-30">
            <Dices className={`text-homm3-gold w-12 h-12 transform rotate-45 ${isAnimating ? 'animate-dragon-float' : ''}`} />
          </div>
          <div className="absolute -top-6 right-1/4 transform translate-x-1/2 opacity-30">
            <Dices className={`text-homm3-gold w-12 h-12 transform -rotate-45 ${isAnimating ? 'animate-dragon-float delay-500' : ''}`} />
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className={`transition-transform ${isAnimating ? 'animate-sword-rotate' : ''}`}>
              <Sword className="text-homm3-gold w-10 h-10 transform -rotate-45" />
            </div>
            
            <h1 className="font-pixel text-center text-5xl text-homm3-gold">
              <span className={`inline-block ${isAnimating ? 'animate-char-bounce' : ''}`}>Г</span>
              <span className={`inline-block ${isAnimating ? 'animate-char-bounce delay-75' : ''}`}>е</span>
              <span className={`inline-block ${isAnimating ? 'animate-char-bounce delay-100' : ''}`}>р</span>
              <span className={`inline-block ${isAnimating ? 'animate-char-bounce delay-150' : ''}`}>о</span>
              <span className={`inline-block ${isAnimating ? 'animate-char-bounce delay-200' : ''}`}>и</span>
              <span className={`inline-block px-2 text-homm3-purple ${isAnimating ? 'animate-char-pulse' : ''}`}>III</span>
            </h1>
            
            <div className={`transition-transform ${isAnimating ? 'animate-wand-rotate' : ''}`}>
              <Wand className="text-homm3-gold w-10 h-10 transform rotate-45" />
            </div>
          </div>
          
          <div className="flex justify-center gap-1 mb-3">
            {['М', 'е', 'ч', 'а', ' ', 'и', ' ', 'М', 'а', 'г', 'и', 'и'].map((char, index) => (
              <span 
                key={index} 
                className={`font-pixel text-homm3-sky text-2xl inline-block 
                ${char !== ' ' && isAnimating ? 'animate-char-fade delay-' + (index * 50) : ''}`}
              >
                {char}
              </span>
            ))}
          </div>
          
          <p className="text-center text-homm3-sky text-lg mt-3 opacity-80 max-w-md mx-auto">
            Легендарная стратегия, покорившая сердца миллионов игроков по всему миру
          </p>

          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className={`absolute top-0 left-1/4 transform -translate-y-full ${isAnimating ? 'animate-star-fall delay-500' : ''}`}>
              <Crown className="text-homm3-gold w-6 h-6" />
            </div>
            <div className={`absolute top-0 right-1/4 transform -translate-y-full ${isAnimating ? 'animate-star-fall delay-1000' : ''}`}>
              <Crown className="text-homm3-gold w-6 h-6" />
            </div>
            <div className={`absolute top-0 left-2/4 transform -translate-y-full ${isAnimating ? 'animate-star-fall delay-1500' : ''}`}>
              <Crown className="text-homm3-gold w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-3 text-sm text-homm3-sky opacity-80 text-center font-pixel">
        Нажмите на лого, чтобы активировать магию
      </div>
    </div>
  );
};

export default GameLogo;
