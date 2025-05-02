
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-homm3-blue border-b-2 border-homm3-purple px-4 py-3">
      <div className="container mx-auto flex flex-wrap justify-center md:justify-end items-center">
        <ul className="flex space-x-4 md:space-x-6 font-pixel uppercase text-sm md:text-base">
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
          <li>
            <Link to="/resources" className="text-homm3-gold hover:text-homm3-sky px-2 py-1 transition-colors">
              Ресурсы
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
