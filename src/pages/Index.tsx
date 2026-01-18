import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

type Tour = {
  id: number;
  title: string;
  description: string;
  duration: string;
  price: number;
  difficulty: 'Легкая' | 'Средняя' | 'Сложная';
  popular: boolean;
  image: string;
  category: string;
};

const tours: Tour[] = [
  {
    id: 1,
    title: 'Пирамиды Гизы и Сфинкс',
    description: 'Посетите величественные пирамиды Хеопса, Хефрена и Микерина, а также загадочного Сфинкса',
    duration: '4 часа',
    price: 50,
    difficulty: 'Легкая',
    popular: true,
    image: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800',
    category: 'История'
  },
  {
    id: 2,
    title: 'Круиз по Нилу',
    description: 'Романтический круиз с ужином на традиционной египетской лодке',
    duration: '3 часа',
    price: 65,
    difficulty: 'Легкая',
    popular: true,
    image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800',
    category: 'Романтика'
  },
  {
    id: 3,
    title: 'Дайвинг в Красном море',
    description: 'Погружение к коралловым рифам и знакомство с подводным миром',
    duration: '6 часов',
    price: 85,
    difficulty: 'Средняя',
    popular: true,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    category: 'Активный отдых'
  },
  {
    id: 4,
    title: 'Храмы Луксора',
    description: 'Экскурсия по древним храмам Карнак и Луксор с профессиональным гидом',
    duration: '8 часов',
    price: 75,
    difficulty: 'Средняя',
    popular: false,
    image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800',
    category: 'История'
  },
  {
    id: 5,
    title: 'Сафари в пустыне',
    description: 'Приключение на квадроциклах с посещением бедуинской деревни',
    duration: '5 часов',
    price: 60,
    difficulty: 'Сложная',
    popular: false,
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800',
    category: 'Активный отдых'
  },
  {
    id: 6,
    title: 'Египетский музей',
    description: 'Знакомство с сокровищами фараонов и мумиями в главном музее страны',
    duration: '3 часа',
    price: 40,
    difficulty: 'Легкая',
    popular: true,
    image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800',
    category: 'История'
  }
];

const gallery = [
  'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=600',
  'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600',
  'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600',
  'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=600',
  'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600',
  'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600',
  'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=600',
  'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600'
];

const Index = () => {
  const [sortBy, setSortBy] = useState<string>('popular');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');
  const [filterPrice, setFilterPrice] = useState<string>('all');

  const filteredTours = tours
    .filter(tour => {
      if (filterDifficulty !== 'all' && tour.difficulty !== filterDifficulty) return false;
      if (filterPrice === 'low' && tour.price > 50) return false;
      if (filterPrice === 'medium' && (tour.price <= 50 || tour.price > 70)) return false;
      if (filterPrice === 'high' && tour.price <= 70) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'popular') return b.popular ? 1 : -1;
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'duration') return parseInt(a.duration) - parseInt(b.duration);
      return 0;
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 animate-fade-in">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Pyramid" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">EgyptTours</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#tours" className="hover:text-primary transition-colors">Экскурсии</a>
              <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
              <a href="#about" className="hover:text-primary transition-colors">О нас</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
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
            <Button size="lg" className="text-lg">
              <Icon name="Search" size={20} className="mr-2" />
              Смотреть экскурсии
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      <section id="tours" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Наши экскурсии</h2>
            <p className="text-muted-foreground text-lg">Выберите идеальное приключение</p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-8 animate-scale-in">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[200px]">
                <Icon name="ArrowUpDown" size={16} className="mr-2" />
                <SelectValue placeholder="Сортировка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Популярные</SelectItem>
                <SelectItem value="price-asc">Цена: низкая</SelectItem>
                <SelectItem value="price-desc">Цена: высокая</SelectItem>
                <SelectItem value="duration">Длительность</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterDifficulty} onValueChange={setFilterDifficulty}>
              <SelectTrigger className="w-[200px]">
                <Icon name="TrendingUp" size={16} className="mr-2" />
                <SelectValue placeholder="Сложность" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все уровни</SelectItem>
                <SelectItem value="Легкая">Легкая</SelectItem>
                <SelectItem value="Средняя">Средняя</SelectItem>
                <SelectItem value="Сложная">Сложная</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterPrice} onValueChange={setFilterPrice}>
              <SelectTrigger className="w-[200px]">
                <Icon name="DollarSign" size={16} className="mr-2" />
                <SelectValue placeholder="Цена" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все цены</SelectItem>
                <SelectItem value="low">До $50</SelectItem>
                <SelectItem value="medium">$50-$70</SelectItem>
                <SelectItem value="high">От $70</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.map((tour, index) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative h-48 overflow-hidden">
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  {tour.popular && (
                    <Badge className="absolute top-4 right-4 bg-secondary">
                      <Icon name="Star" size={14} className="mr-1" />
                      Популярно
                    </Badge>
                  )}
                  <Badge className="absolute top-4 left-4">{tour.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{tour.title}</CardTitle>
                  <CardDescription>{tour.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {tour.duration}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Icon name="TrendingUp" size={14} />
                      {tour.difficulty}
                    </Badge>
                  </div>
                  <div className="text-3xl font-bold text-primary">${tour.price}</div>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">
                        <Icon name="Calendar" size={16} className="mr-2" />
                        Забронировать
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Бронирование: {tour.title}</DialogTitle>
                        <DialogDescription>Заполните форму, и мы свяжемся с вами в ближайшее время</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="name">Имя</Label>
                          <Input id="name" placeholder="Ваше имя" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="example@mail.com" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="phone">Телефон</Label>
                          <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="date">Желаемая дата</Label>
                          <Input id="date" type="date" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="message">Комментарий</Label>
                          <Textarea id="message" placeholder="Дополнительные пожелания..." />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit" className="w-full">Отправить заявку</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Галерея</h2>
            <p className="text-muted-foreground text-lg">Впечатления наших туристов</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((img, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
                <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <Icon name="Maximize2" size={24} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">О компании EgyptTours</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Мы организуем незабываемые путешествия по Египту с 2010 года. За это время более 50 000 туристов доверили нам свой отдых.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Наши профессиональные гиды, комфортабельный транспорт и индивидуальный подход к каждому клиенту гарантируют безопасность и максимум впечатлений.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <Card className="text-center p-4">
                  <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground">Туристов</div>
                </Card>
                <Card className="text-center p-4">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </Card>
                <Card className="text-center p-4">
                  <div className="text-3xl font-bold text-primary mb-2">4.9</div>
                  <div className="text-sm text-muted-foreground">Рейтинг</div>
                </Card>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img src="https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800" alt="Egypt" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-muted-foreground text-lg">Ответим на все ваши вопросы</p>
          </div>
          <Card className="p-8 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-medium">Адрес</div>
                      <div className="text-muted-foreground">г. Каир, ул. Тахрир, 123</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-medium">Телефон</div>
                      <div className="text-muted-foreground">+20 123 456 7890</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">info@egypttours.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-medium">Режим работы</div>
                      <div className="text-muted-foreground">Ежедневно 9:00 - 21:00</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Напишите нам</h3>
                <form className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input type="email" placeholder="Email" />
                  <Textarea placeholder="Ваше сообщение..." rows={4} />
                  <Button className="w-full">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить
                  </Button>
                </form>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Pyramid" size={28} className="text-primary" />
                <h3 className="text-xl font-bold">EgyptTours</h3>
              </div>
              <p className="text-background/70">Лучшие экскурсии по Египту с 2010 года</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Экскурсии</h4>
              <ul className="space-y-2 text-background/70">
                <li>История</li>
                <li>Активный отдых</li>
                <li>Романтика</li>
                <li>Все туры</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-background/70">
                <li>О нас</li>
                <li>Галерея</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Icon name="Facebook" size={24} className="text-background/70 hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Instagram" size={24} className="text-background/70 hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Twitter" size={24} className="text-background/70 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>© 2026 EgyptTours. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
