const GameLogo = () => {
  return (
    <div className="flex flex-col items-center my-6">
      <img 
        src="/logo-b.svg" 
        alt="Heroes of Might and Magic III" 
        className="w-32 h-32 mb-4"
      />
      <div className="pixel-frame p-4 bg-homm3-blue border-2 border-homm3-purple max-w-sm">
        <h2 className="font-pixel text-center text-2xl text-homm3-gold mb-2">
          Герои Меча и Магии III
        </h2>
        <p className="text-center text-homm3-sky text-sm">
          Легендарная пошаговая стратегия, покорившая сердца миллионов игроков по всему миру
        </p>
      </div>
    </div>
  );
};

export default GameLogo;
