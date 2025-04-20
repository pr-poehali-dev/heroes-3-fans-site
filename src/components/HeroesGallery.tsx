import { useState } from "react";

interface Hero {
  id: number;
  name: string;
  faction: string;
  imageUrl: string;
}

const heroes: Hero[] = [
  { id: 1, name: "Катерина", faction: "Замок", imageUrl: "/placeholder.svg" },
  { id: 2, name: "Джелу", faction: "Оплот", imageUrl: "/placeholder.svg" },
  { id: 3, name: "Раилаг", faction: "Темница", imageUrl: "/placeholder.svg" }
];

const HeroesGallery = () => {
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);

  return (
    <div className="my-8">
      <h2 className="font-pixel text-2xl text-homm3-gold text-center mb-6">
        Легендарные Герои
      </h2>
      
      <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
        {heroes.map((hero) => (
          <div 
            key={hero.id}
            className="pixel-card p-2 text-center cursor-pointer hover:bg-homm3-dark-blue transition-colors"
            onClick={() => setSelectedHero(hero)}
          >
            <img 
              src={hero.imageUrl} 
              alt={hero.name}
              className="w-20 h-20 mx-auto mb-2 border-2 border-homm3-purple"
            />
            <p className="font-pixel text-homm3-sky text-sm">{hero.name}</p>
          </div>
        ))}
      </div>
      
      {selectedHero && (
        <div className="pixel-card max-w-md mx-auto mt-6 p-4">
          <div className="flex">
            <img 
              src={selectedHero.imageUrl} 
              alt={selectedHero.name}
              className="w-24 h-24 border-2 border-homm3-gold mr-4"
            />
            <div>
              <h3 className="font-pixel text-xl text-homm3-gold mb-1">{selectedHero.name}</h3>
              <p className="text-homm3-sky mb-2">Фракция: {selectedHero.faction}</p>
              <p className="text-sm">Легендарный герой, известный своими подвигами и стратегическим мышлением.</p>
            </div>
          </div>
          <button 
            onClick={() => setSelectedHero(null)}
            className="pixel-button mt-4 text-sm"
          >
            Закрыть
          </button>
        </div>
      )}
    </div>
  );
};

export default HeroesGallery;
