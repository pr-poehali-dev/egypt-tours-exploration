import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
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

const ToursSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <section id="tours" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Наши экскурсии</h2>
          <p className="text-muted-foreground text-lg">Выберите идеальное приключение</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour, index) => (
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
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) => date < new Date()}
                          className="rounded-md border"
                        />
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
  );
};

export default ToursSection;
