import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 animate-fade-in">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Pyramid" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-primary">EgyptTours</h1>
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('tours')} className="hover:text-primary transition-colors">Экскурсии</button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-primary transition-colors">Галерея</button>
            <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button>
            <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
          </div>
          <Button className="hidden md:inline-flex">
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button 
              onClick={() => handleMobileNavClick('tours')} 
              className="text-left py-2 hover:text-primary transition-colors flex items-center gap-2"
            >
              <Icon name="Compass" size={20} />
              Экскурсии
            </button>
            <button 
              onClick={() => handleMobileNavClick('gallery')} 
              className="text-left py-2 hover:text-primary transition-colors flex items-center gap-2"
            >
              <Icon name="Image" size={20} />
              Галерея
            </button>
            <button 
              onClick={() => handleMobileNavClick('reviews')} 
              className="text-left py-2 hover:text-primary transition-colors flex items-center gap-2"
            >
              <Icon name="MessageSquare" size={20} />
              Отзывы
            </button>
            <button 
              onClick={() => handleMobileNavClick('about')} 
              className="text-left py-2 hover:text-primary transition-colors flex items-center gap-2"
            >
              <Icon name="Info" size={20} />
              О нас
            </button>
            <button 
              onClick={() => handleMobileNavClick('contacts')} 
              className="text-left py-2 hover:text-primary transition-colors flex items-center gap-2"
            >
              <Icon name="Mail" size={20} />
              Контакты
            </button>
            <Button className="w-full mt-2" onClick={() => handleMobileNavClick('contacts')}>
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;