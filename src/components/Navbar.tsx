import { Link } from "react-router-dom";
import { Sword, Crown, Shield } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLogoClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <nav className="bg-homm3-blue border-b-2 border-homm3-purple px-4 py-3">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div 
          className="flex items-center cursor-pointer relative"
          onClick={handleLogoClick}
        >
          <div className={`absolute -left-1 -top-2 transition-transform duration-300 ${isAnimating ? 'scale-110' : ''}`}>
            <Shield className="h-6 w-6 text-homm3-gold opacity-80" />
          </div>
          <div className={`transition-transform duration-300 ${isAnimating ? 'scale-110' : ''}`}>
            <Sword 
              className={`h-6 w-6 text-homm3-gold rotate-45 transform transition-transform duration-300 ${isAnimating ? 'rotate-[60deg]' : ''}`}
            />
          </div>
          <h1 className="text-homm3-gold text-xl md:text-2xl font-pixel tracking-wider uppercase mx-2 relative">
            Герои III
            <span className={`absolute -top-3 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${isAnimating ? '-top-5 opacity-100' : 'opacity-0'}`}>
              <Crown className="h-4 w-4 text-homm3-gold" />
            </span>
          </h1>
          <div className={`transition-transform duration-300 ${isAnimating ? 'scale-110' : ''}`}>
            <Sword 
              className={`h-6 w-6 text-homm3-gold -rotate-45 transform transition-transform duration-300 ${isAnimating ? '-rotate-[60deg]' : ''}`}
            />
          </div>
        </div>
        
        <ul className="flex space-x-1 md:space-x-4 mt-3 md:mt-0 font-pixel uppercase text-sm md:text-base">
          <li>
            <Link to="/" className="text-homm3-gold hover:text-homm3-sky px-2 py-1 transition-colors">
              Главная
            </Link>
          </li>
          <li>
            <Link to="/updates" className="text-homm3-gold hover:text-homm3-sky px-2 py-1 transition-colors">
              Обновления
            </Link>
          </li>
          <li>
            <Link to="/community" className="text-homm3-gold hover:text-homm3-sky px-2 py-1 transition-colors">
              Сообщество
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
