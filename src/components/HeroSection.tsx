import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-muted/10 -z-10" />
      <div className="container mx-auto text-center animate-fade-in">
        <Badge className="mb-4 text-lg px-4 py-2">Лучшие экскурсии 2026</Badge>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
          Откройте для себя Египет
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Незабываемые путешествия по древним памятникам, пустыням и коралловым рифам
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="text-lg" onClick={() => scrollToSection('tours')}>
            <Icon name="Search" size={20} className="mr-2" />
            Смотреть экскурсии
          </Button>
          <Button size="lg" variant="outline" className="text-lg" onClick={() => scrollToSection('contacts')}>
            <Icon name="Phone" size={20} className="mr-2" />
            Получить консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
