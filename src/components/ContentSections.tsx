import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

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

const reviews = [
  {
    name: 'Анна Петрова',
    initials: 'АП',
    location: 'Москва • Декабрь 2025',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    title: 'Незабываемые впечатления!',
    text: 'Пирамиды просто поразили! Гид был невероятно знающим, рассказал столько интересных фактов. Организация на высшем уровне, все прошло гладко.',
    delay: '0ms'
  },
  {
    name: 'Дмитрий Соколов',
    initials: 'ДС',
    location: 'Санкт-Петербург • Ноябрь 2025',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    title: 'Лучший дайвинг в моей жизни',
    text: 'Красное море превзошло все ожидания! Коралловые рифы, рыбы, черепахи - это что-то невероятное. Инструкторы профессионалы, чувствовал себя в безопасности.',
    delay: '100ms'
  },
  {
    name: 'Елена Васильева',
    initials: 'ЕВ',
    location: 'Казань • Октябрь 2025',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    title: 'Романтичный круиз по Нилу',
    text: 'Отмечали годовщину свадьбы - получилось волшебно! Закат над Нилом, ужин на палубе, живая музыка. Спасибо за такой прекрасный вечер!',
    delay: '200ms'
  },
  {
    name: 'Максим Кузнецов',
    initials: 'МК',
    location: 'Екатеринбург • Сентябрь 2025',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    title: 'Адреналин в пустыне!',
    text: 'Сафари на квадроциклах - это мощно! Скорость, песок, закат в пустыне. Визит в бедуинскую деревню добавил колорита. Рекомендую всем любителям экстрима!',
    delay: '300ms'
  },
  {
    name: 'Ольга Смирнова',
    initials: 'ОС',
    location: 'Новосибирск • Август 2025',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
    title: 'Магия древнего Луксора',
    text: 'Храмы Карнак и Луксор оставили неизгладимое впечатление. История оживает на глазах! Экскурсовод настоящий профессионал, было очень познавательно.',
    delay: '400ms'
  },
  {
    name: 'Андрей Морозов',
    initials: 'АМ',
    location: 'Краснодар • Июль 2025',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
    title: 'Египетский музей - восторг!',
    text: 'Увидеть сокровища Тутанхамона вживую - бесценно! Коллекция музея поражает масштабом. Три часа пролетели незаметно, хотелось остаться дольше.',
    delay: '500ms'
  }
];

const ContentSections = () => {
  return (
    <>
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

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Отзывы наших туристов</h2>
            <p className="text-muted-foreground text-lg">Реальные впечатления от путешествий</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="overflow-hidden animate-fade-in" style={{ animationDelay: review.delay }}>
                <div className="relative h-64">
                  <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardTitle>{review.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {review.text}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-semibold">{review.initials}</span>
                    </div>
                    <div>
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
    </>
  );
};

export default ContentSections;
