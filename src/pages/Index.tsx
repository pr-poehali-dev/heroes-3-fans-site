
import Navbar from "@/components/Navbar";
import HeroesButton from "@/components/HeroesButton";
import NewsCard from "@/components/NewsCard";
import GameLogo from "@/components/GameLogo";
import HeroesGallery from "@/components/HeroesGallery";
import { Link } from "react-router-dom";
import { Download, Users, ScrollText, Gamepad2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section with Logo */}
        <section className="px-4 py-8 md:py-12 text-center relative">
          <div className="container mx-auto">
            <GameLogo />
            
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к легендарной стратегии! Объединяем любителей Heroes III 
              со всего мира и рассказываем об обновлениях любимой игры.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <HeroesButton size="large" animate>
                <Download className="mr-2" />
                Скачать игру
              </HeroesButton>
              
              <Link to="/game">
                <HeroesButton size="large" variant="secondary">
                  <Gamepad2 className="mr-2" />
                  Играть в мини-игру
                </HeroesButton>
              </Link>
            </div>
            
            {/* Heroes Gallery */}
            <HeroesGallery />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto mt-8">
              <div className="pixel-card">
                <h2 className="font-pixel text-xl text-homm3-gold mb-3">
                  Обновления
                </h2>
                <p className="mb-4">
                  Следите за последними обновлениями и модификациями игры.
                </p>
                <Link to="/updates" className="pixel-button inline-flex items-center">
                  <ScrollText className="mr-2" />
                  Подробнее
                </Link>
              </div>
              
              <div className="pixel-card">
                <h2 className="font-pixel text-xl text-homm3-gold mb-3">
                  Сообщество
                </h2>
                <p className="mb-4">
                  Присоединяйтесь к сообществу поклонников и найдите соратников.
                </p>
                <Link to="/community" className="pixel-button inline-flex items-center">
                  <Users className="mr-2" />
                  Вступить
                </Link>
              </div>
              
              <div className="pixel-card">
                <h2 className="font-pixel text-xl text-homm3-gold mb-3">
                  Ресурсы
                </h2>
                <p className="mb-4">
                  Гайды, карты, советы и стратегии для различных фракций.
                </p>
                <Link to="/resources" className="pixel-button inline-flex items-center">
                  <ScrollText className="mr-2" />
                  Изучить
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* News section */}
        <section className="px-4 py-12 bg-homm3-blue">
          <div className="container mx-auto">
            <h2 className="pixel-heading text-2xl md:text-3xl text-center mb-8">
              Последние новости
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <NewsCard title="Новая мини-игра на сайте!" date="2 мая 2025">
                <p>
                  Мы добавили мини-игру в стиле Heroes III прямо на наш сайт! Попробуйте свои 
                  силы в тактической стратегии прямо сейчас - никаких установок не требуется!
                </p>
              </NewsCard>
            
              <NewsCard title="Обновление HD мода" date="15 мая 2023">
                <p>
                  Вышло обновление HD-мода с поддержкой современных разрешений и улучшенной графикой.
                  Теперь игра выглядит еще лучше на современных мониторах!
                </p>
              </NewsCard>
              
              <NewsCard title="Турнир героев" date="3 мая 2023">
                <p>
                  Приглашаем принять участие в ежегодном турнире! Регистрация открыта 
                  до 20 мая. Победителей ждут ценные призы и слава в сообществе!
                </p>
              </NewsCard>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/updates" className="pixel-button">
                Все новости
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-homm3-blue border-t-2 border-homm3-purple px-4 py-6">
        <div className="container mx-auto text-center">
          <p className="text-homm3-gold font-pixel mb-2">
            © 2023-2025 Сообщество Героев III
          </p>
          <p className="text-sm text-homm3-sky">
            Heroes of Might and Magic III является зарегистрированной торговой маркой Ubisoft Entertainment
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
