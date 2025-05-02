
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

// Типы местности
type TerrainType = "grass" | "forest" | "mountain" | "water" | "road" | "town";

// Тип объекта на карте
type MapObject = {
  type: "resource" | "hero" | "town" | "monster" | "artifact" | "none";
  subtype?: string;
  owner?: number;
  strength?: number;
};

// Ячейка карты
type MapCell = {
  terrain: TerrainType;
  object: MapObject;
  x: number;
  y: number;
};

// Герой
type Hero = {
  name: string;
  movePoints: number;
  maxMovePoints: number;
  army: { type: string; count: number }[];
  owner: number;
  x: number;
  y: number;
};

// Настройки игры
const MAP_SIZE = 10;
const PLAYERS = 2;
const MOVE_COST = {
  road: 0.5,
  grass: 1,
  forest: 2,
  mountain: 3,
  water: Infinity,
  town: 1,
};

const Game = () => {
  // Состояние игры
  const [map, setMap] = useState<MapCell[][]>([]);
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
  const [day, setDay] = useState(1);
  const [resources, setResources] = useState([
    { gold: 1000, wood: 10, ore: 10 },
    { gold: 1000, wood: 10, ore: 10 },
  ]);

  // Инициализация игры
  useEffect(() => {
    initGame();
  }, []);

  // Инициализация карты и героев
  const initGame = () => {
    // Создаем пустую карту
    const newMap = Array(MAP_SIZE)
      .fill(null)
      .map((_, y) =>
        Array(MAP_SIZE)
          .fill(null)
          .map((_, x) => {
            // Определяем местность с преобладанием травы
            let terrain: TerrainType = "grass";
            const rnd = Math.random();
            
            if (rnd < 0.15) terrain = "forest";
            else if (rnd < 0.2) terrain = "mountain";
            else if (rnd < 0.25) terrain = "water";
            else if (rnd < 0.3) terrain = "road";
            
            // Пустой объект по умолчанию
            const object: MapObject = { type: "none" };

            // Добавляем случайные ресурсы
            if (rnd > 0.8 && terrain !== "water") {
              object.type = "resource";
              const resources = ["gold", "wood", "ore", "gems", "crystal"];
              object.subtype = resources[Math.floor(Math.random() * resources.length)];
            }
            
            // Добавляем монстров
            if (rnd > 0.9 && terrain !== "water") {
              object.type = "monster";
              object.strength = Math.floor(Math.random() * 5) + 1;
            }

            return { terrain, object, x, y };
          })
      );

    // Добавляем города для игроков
    newMap[1][1].object = { type: "town", owner: 0 };
    newMap[1][1].terrain = "town";
    
    newMap[MAP_SIZE - 2][MAP_SIZE - 2].object = { type: "town", owner: 1 };
    newMap[MAP_SIZE - 2][MAP_SIZE - 2].terrain = "town";

    // Создаем героев для игроков
    const newHeroes = [
      {
        name: "Рыцарь",
        movePoints: 20,
        maxMovePoints: 20,
        army: [{ type: "мечники", count: 10 }],
        owner: 0,
        x: 2,
        y: 1,
      },
      {
        name: "Маг",
        movePoints: 20,
        maxMovePoints: 20,
        army: [{ type: "гремлины", count: 15 }],
        owner: 1,
        x: MAP_SIZE - 3,
        y: MAP_SIZE - 2,
      },
    ];

    setMap(newMap);
    setHeroes(newHeroes);
    setSelectedHero(newHeroes[0]);
  };

  // Ход героя
  const moveHero = (hero: Hero, x: number, y: number) => {
    if (hero.owner !== currentPlayer) return;
    if (hero.movePoints <= 0) return;

    // Проверка возможности хода
    const dx = Math.abs(hero.x - x);
    const dy = Math.abs(hero.y - y);
    
    // Разрешаем ходить только на соседние клетки
    if (dx + dy !== 1) return;
    
    // Проверяем стоимость хода
    const terrain = map[y][x].terrain;
    const moveCost = MOVE_COST[terrain];
    
    if (moveCost > hero.movePoints || moveCost === Infinity) return;

    // Обрабатываем объект на клетке
    const object = map[y][x].object;
    let canMove = true;
    
    if (object.type === "monster") {
      // Простая боевая система - автоматическая победа, если монстры слабее
      if (hero.army[0].count > object.strength! * 2) {
        // Победа с потерями
        const newArmy = [...hero.army];
        newArmy[0].count -= Math.ceil(object.strength! / 2);
        setHeroes(heroes.map(h => (h === hero ? { ...h, army: newArmy } : h)));
        
        // Убираем монстра с карты
        const newMap = [...map];
        newMap[y][x] = { ...newMap[y][x], object: { type: "none" } };
        setMap(newMap);
      } else {
        // Герой слишком слаб для победы
        canMove = false;
        alert("Ваш герой слишком слаб для этого боя!");
      }
    } else if (object.type === "resource") {
      // Собираем ресурс
      const newResources = [...resources];
      const playerResources = newResources[currentPlayer];
      
      if (object.subtype === "gold") playerResources.gold += 500;
      else if (object.subtype === "wood") playerResources.wood += 5;
      else if (object.subtype === "ore") playerResources.ore += 5;
      
      setResources(newResources);
      
      // Убираем ресурс с карты
      const newMap = [...map];
      newMap[y][x] = { ...newMap[y][x], object: { type: "none" } };
      setMap(newMap);
    } else if (object.type === "town" && object.owner !== hero.owner) {
      // Захватываем город
      const newMap = [...map];
      newMap[y][x] = { ...newMap[y][x], object: { ...object, owner: hero.owner } };
      setMap(newMap);
      
      alert(`Игрок ${hero.owner + 1} захватил город!`);
      
      // Проверяем победу (все города захвачены)
      const enemyCities = newMap.flat().filter(cell => 
        cell.object.type === "town" && cell.object.owner !== hero.owner
      );
      
      if (enemyCities.length === 0) {
        alert(`Игрок ${hero.owner + 1} победил, захватив все города!`);
      }
    }

    // Перемещаем героя, если возможно
    if (canMove) {
      const newHeroes = heroes.map(h => {
        if (h === hero) {
          return {
            ...h,
            x,
            y,
            movePoints: h.movePoints - moveCost
          };
        }
        return h;
      });
      
      setHeroes(newHeroes);
      setSelectedHero(newHeroes.find(h => h === hero) || null);
    }
  };

  // Обработка клика по клетке
  const handleCellClick = (x: number, y: number) => {
    if (!selectedHero) return;
    moveHero(selectedHero, x, y);
  };

  // Завершение хода
  const endTurn = () => {
    const nextPlayer = (currentPlayer + 1) % PLAYERS;
    setCurrentPlayer(nextPlayer);
    
    // Если ход вернулся к первому игроку, начинаем новый день
    if (nextPlayer === 0) {
      setDay(day + 1);
      
      // Восстанавливаем очки хода героев
      const newHeroes = heroes.map(hero => ({
        ...hero,
        movePoints: hero.maxMovePoints
      }));
      
      setHeroes(newHeroes);
      
      // Добавляем ресурсы от городов
      const newResources = [...resources];
      
      map.flat().forEach(cell => {
        if (cell.object.type === "town") {
          const owner = cell.object.owner!;
          newResources[owner].gold += 500;
          newResources[owner].wood += 2;
          newResources[owner].ore += 2;
        }
      });
      
      setResources(newResources);
    }
    
    // Выбираем героя нового игрока
    const playerHeroes = heroes.filter(h => h.owner === nextPlayer);
    setSelectedHero(playerHeroes.length > 0 ? playerHeroes[0] : null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-homm3-blue">
      <Navbar />
      
      <main className="flex-grow p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-pixel text-homm3-gold">Мини-героическая стратегия</h1>
            <Link to="/" className="pixel-button">
              <Icon name="ChevronLeft" className="mr-1" />
              На главную
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Игровая информация */}
            <div className="lg:col-span-3 pixel-card">
              <h2 className="font-pixel text-xl text-homm3-gold mb-3">Игровая информация</h2>
              
              <div className="mb-4">
                <p className="text-homm3-sky">День: {day}</p>
                <p className="text-homm3-gold">Ход игрока {currentPlayer + 1}</p>
              </div>
              
              <Separator className="my-3 bg-homm3-purple/40" />
              
              <h3 className="font-pixel text-lg text-homm3-gold mb-2">Ресурсы</h3>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="flex items-center">
                  <Icon name="Coins" className="text-yellow-300 mr-2" />
                  <span className="text-homm3-sky">Золото: {resources[currentPlayer].gold}</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Trees" className="text-green-500 mr-2" />
                  <span className="text-homm3-sky">Дерево: {resources[currentPlayer].wood}</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mountain" className="text-gray-400 mr-2" />
                  <span className="text-homm3-sky">Руда: {resources[currentPlayer].ore}</span>
                </div>
              </div>
              
              <Separator className="my-3 bg-homm3-purple/40" />
              
              {selectedHero && (
                <div className="mb-4">
                  <h3 className="font-pixel text-lg text-homm3-gold mb-2">Выбранный герой</h3>
                  <p className="text-homm3-sky">Имя: {selectedHero.name}</p>
                  <p className="text-homm3-sky">Очки хода: {selectedHero.movePoints}</p>
                  <div className="mt-2">
                    <h4 className="font-pixel text-homm3-gold mb-1">Армия:</h4>
                    {selectedHero.army.map((unit, index) => (
                      <p key={index} className="text-homm3-sky">
                        {unit.type}: {unit.count} ед.
                      </p>
                    ))}
                  </div>
                </div>
              )}
              
              <Separator className="my-3 bg-homm3-purple/40" />
              
              <div className="flex flex-col space-y-2">
                <Button 
                  onClick={endTurn} 
                  className="font-pixel bg-homm3-purple hover:bg-homm3-light-purple text-white"
                >
                  <Icon name="Forward" className="mr-2" />
                  Завершить ход
                </Button>
                
                <Button 
                  onClick={initGame} 
                  variant="outline" 
                  className="font-pixel border-homm3-purple text-homm3-gold"
                >
                  <Icon name="RefreshCw" className="mr-2" />
                  Новая игра
                </Button>
              </div>
            </div>
            
            {/* Игровая карта */}
            <div className="lg:col-span-9 pixel-card overflow-auto">
              <h2 className="font-pixel text-xl text-homm3-gold mb-3">Карта</h2>
              
              <div className="grid grid-cols-10 gap-1 max-w-fit mx-auto">
                {map.map((row, y) =>
                  row.map(({ terrain, object, x }) => (
                    <div
                      key={`${x}-${y}`}
                      className={`w-12 h-12 border border-homm3-purple cursor-pointer relative ${
                        terrain === "grass"
                          ? "bg-green-600"
                          : terrain === "forest"
                          ? "bg-green-800"
                          : terrain === "mountain"
                          ? "bg-gray-600"
                          : terrain === "water"
                          ? "bg-blue-600"
                          : terrain === "road"
                          ? "bg-yellow-700"
                          : "bg-gray-400"
                      }`}
                      onClick={() => handleCellClick(x, y)}
                    >
                      {/* Объект на карте */}
                      {object.type !== "none" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          {object.type === "resource" && (
                            <div className="text-white text-xl">
                              {object.subtype === "gold" ? "💰" : 
                               object.subtype === "wood" ? "🌲" : 
                               object.subtype === "ore" ? "⛏️" : 
                               object.subtype === "gems" ? "💎" : "🔮"}
                            </div>
                          )}
                          {object.type === "monster" && (
                            <div className="text-white text-xl">👹</div>
                          )}
                          {object.type === "town" && (
                            <div className={`text-white text-xl ${
                              object.owner === 0 ? "text-blue-300" : "text-red-300"
                            }`}>
                              🏰
                            </div>
                          )}
                        </div>
                      )}
                      
                      {/* Герой на карте */}
                      {heroes.some(hero => hero.x === x && hero.y === y) && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`text-xl ${
                            heroes.find(hero => hero.x === x && hero.y === y)?.owner === 0
                              ? "text-blue-300"
                              : "text-red-300"
                          }`}>
                            🧙
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
              
              <div className="mt-4 text-sm text-homm3-sky">
                <p>👆 Нажмите на соседнюю клетку, чтобы переместить героя</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pixel-card">
            <h2 className="font-pixel text-xl text-homm3-gold mb-3">Правила игры</h2>
            <ul className="list-disc list-inside space-y-2 text-homm3-sky">
              <li>Игроки ходят по очереди. Герои могут перемещаться на соседние клетки.</li>
              <li>Разные типы местности требуют разные очки хода: дорога (0.5), трава (1), лес (2), горы (3), вода (непроходима).</li>
              <li>Собирайте ресурсы (💰, 🌲, ⛏️) для развития своей армии.</li>
              <li>Сражайтесь с монстрами (👹) для получения опыта.</li>
              <li>Захватывайте города противника (🏰) для победы в игре.</li>
              <li>В конце каждого дня города приносят ресурсы своим владельцам.</li>
            </ul>
          </div>
        </div>
      </main>
      
      <footer className="bg-homm3-blue border-t-2 border-homm3-purple px-4 py-6">
        <div className="container mx-auto text-center">
          <p className="text-homm3-gold font-pixel mb-2">
            © 2023-2025 Мини-героическая стратегия
          </p>
          <p className="text-sm text-homm3-sky">
            Вдохновлено Heroes of Might and Magic III
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Game;
