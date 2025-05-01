
import { Crown } from "lucide-react";

const GameLogo = () => {
  return (
    <div className="flex flex-col items-center my-8">
      <div className="pixel-frame p-5 bg-homm3-blue border-2 border-homm3-purple max-w-md">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Crown className="text-homm3-gold w-8 h-8" />
          <h1 className="font-pixel text-center text-3xl text-homm3-gold">
            Герои Меча и Магии III
          </h1>
          <Crown className="text-homm3-gold w-8 h-8" />
        </div>
        <p className="text-center text-homm3-sky text-base">
          Легендарная пошаговая стратегия, покорившая сердца миллионов игроков по всему миру
        </p>
      </div>
    </div>
  );
};

export default GameLogo;
