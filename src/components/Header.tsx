import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
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
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
