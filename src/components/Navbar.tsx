import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-homm3-blue border-b-2 border-homm3-purple px-4 py-3">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/placeholder.svg" 
            alt="Heroes III Logo" 
            className="h-10 w-10 mr-3" 
          />
          <h1 className="text-homm3-gold text-xl md:text-2xl font-pixel tracking-wider uppercase">
            Герои III
          </h1>
        </div>
        
        <ul className="flex space-x-1 md:space-x-4 mt-3 md:mt-0 font-pixel uppercase text-sm md:text-base">
          <li>
            <Link to="/" className="text-homm3-gold hover:text-homm3-sky px-2 py-1">
              Главная
            </Link>
          </li>
          <li>
            <Link to="/updates" className="text-homm3-gold hover:text-homm3-sky px-2 py-1">
              Обновления
            </Link>
          </li>
          <li>
            <Link to="/community" className="text-homm3-gold hover:text-homm3-sky px-2 py-1">
              Сообщество
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
