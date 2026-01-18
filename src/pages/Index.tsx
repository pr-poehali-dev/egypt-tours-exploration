import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ToursSection from '@/components/ToursSection';
import ContentSections from '@/components/ContentSections';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ToursSection />
      <ContentSections />
    </div>
  );
};

export default Index;
