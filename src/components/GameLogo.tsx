
import { Shield } from "lucide-react";

const GameLogo = () => {
  return (
    <div className="flex flex-col items-center my-8">
      <div className="relative mb-6">
        <img 
          src="/logo-b.svg" 
          alt="Heroes of Might and Magic III" 
          className="w-40 h-40 transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute -bottom-4 -right-4">
          <Shield className="text-homm3-gold w-12 h-12 animate-pulse" />
        </div>
      </div>
      <div className="pixel-frame p-5 bg-homm3-blue border-2 border-homm3-purple max-w-md">
        <h1 className="font-pixel text-center text-3xl text-homm3-gold mb-3">
          Герои Меча и Магии III
        </h1>
        <p className="text-center text-homm3-sky text-base">
          Легендарная пошаговая стратегия, покорившая сердца миллионов игроков по всему миру
        </p>
      </div>
    </div>
  );
};

export default GameLogo;
