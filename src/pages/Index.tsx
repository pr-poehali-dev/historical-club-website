import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [bookingDay, setBookingDay] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingActivity, setBookingActivity] = useState('');

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Заявка принята!\nИмя: ${bookingName}\nТелефон: ${bookingPhone}\nДень: ${bookingDay}\nВремя: ${bookingTime}\nЗанятие: ${bookingActivity}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-bronze bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="https://cdn.poehali.dev/projects/e9302522-d6d8-4521-a044-7b8c38a74bbd/files/9d75c271-f0cc-4e4c-9ecc-5c7024f86430.jpg" 
                alt="Эмблема клуба" 
                className="w-16 h-16 rounded-full border-2 border-bronze"
              />
              <div>
                <h1 className="text-3xl font-bold text-secondary">Клуб Исторической Реконструкции</h1>
                <p className="text-sm text-muted-foreground">Музей • Центр мастерства • Традиции</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#museum" className="text-foreground hover:text-secondary transition-colors">Музей</a>
              <a href="#center" className="text-foreground hover:text-secondary transition-colors">Центр мастерства</a>
              <a href="#instructors" className="text-foreground hover:text-secondary transition-colors">Инструкторы</a>
              <a href="#events" className="text-foreground hover:text-secondary transition-colors">Мероприятия</a>
              <a href="#contacts" className="text-foreground hover:text-secondary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/e9302522-d6d8-4521-a044-7b8c38a74bbd/files/444aee43-d2d7-42c3-af37-b3c9b2819a2f.jpg)',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h2 className="text-6xl font-bold text-secondary mb-6 animate-fade-in">
            История Живёт Здесь
          </h2>
          <p className="text-xl text-foreground/90 mb-8 leading-relaxed">
            Музей исторических экспонатов, выставки старинного оружия и артефактов археологии. 
            Многофункциональная тренировочная площадка для военно-прикладных и традиционных видов спорта.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <a href="#booking">Записаться на занятие</a>
            </Button>
            <Button size="lg" variant="outline" className="border-bronze text-secondary hover:bg-bronze/10">
              <a href="#museum">Посетить музей</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="museum" className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-secondary mb-4">Музей Клуба</h2>
            <p className="text-xl text-muted-foreground">Коллекция исторических экспонатов, оружия и археологических находок</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card border-bronze/30 hover:border-bronze transition-all">
              <CardHeader>
                <Icon name="Sword" size={40} className="text-bronze mb-2" />
                <CardTitle className="text-2xl">Старинное оружие</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Коллекция холодного оружия: мечи, шашки, сабли, кинжалы различных эпох и народов</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-bronze/30 hover:border-bronze transition-all">
              <CardHeader>
                <Icon name="Crown" size={40} className="text-bronze mb-2" />
                <CardTitle className="text-2xl">Археология</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Археологические находки: монеты, украшения, предметы быта древних цивилизаций</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-bronze/30 hover:border-bronze transition-all">
              <CardHeader>
                <Icon name="Clock" size={40} className="text-bronze mb-2" />
                <CardTitle className="text-2xl">Реставрация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Восстановленные зеркала, часы, резьба по дереву, предметы старинного интерьера</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/80 border-bronze">
            <CardHeader>
              <CardTitle className="text-2xl">Расписание работы музея</CardTitle>
              <CardDescription>График посещения и экскурсий</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-secondary">Будние дни</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Понедельник-Пятница:</strong> 10:00 - 18:00</p>
                    <p><strong>Экскурсии:</strong> 11:00, 14:00, 16:00</p>
                    <p><strong>Перерыв:</strong> 13:00 - 14:00</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-secondary">Выходные</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Суббота-Воскресенье:</strong> 11:00 - 17:00</p>
                    <p><strong>Экскурсии:</strong> 12:00, 15:00</p>
                    <p><strong>Санитарный день:</strong> Последний понедельник месяца</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="center" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-secondary mb-4">Центр Мастерства</h2>
            <p className="text-xl text-muted-foreground">Тренировочная площадка для военно-прикладных и традиционных видов спорта</p>
          </div>

          <Tabs defaultValue="archery" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8 bg-card">
              <TabsTrigger value="archery">Стрельба из лука</TabsTrigger>
              <TabsTrigger value="darts">Дартс</TabsTrigger>
              <TabsTrigger value="knives">Метание ножей</TabsTrigger>
              <TabsTrigger value="weapons">Разборка автоматов</TabsTrigger>
              <TabsTrigger value="flanking">Фланкировка</TabsTrigger>
              <TabsTrigger value="medicine">Тактическая медицина</TabsTrigger>
            </TabsList>

            <TabsContent value="archery">
              <Card className="bg-card border-bronze/30">
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center gap-2">
                    <Icon name="Target" className="text-bronze" />
                    Стрельба из лука
                  </CardTitle>
                  <CardDescription>Традиционная и спортивная стрельба</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-xl mb-3 text-secondary">О занятиях</h4>
                    <p className="text-muted-foreground mb-4">
                      Обучение технике стрельбы из традиционного и спортивного лука. Развитие координации, 
                      концентрации внимания и дыхательных техник. Занятия проводятся на оборудованной площадке 
                      с мишенями на различные дистанции (10-30 метров).
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline" className="border-bronze text-bronze">Для взрослых 18+</Badge>
                      <Badge variant="outline" className="border-bronze text-bronze">1.5 часа</Badge>
                      <Badge variant="outline" className="border-bronze text-bronze">Инвентарь предоставляется</Badge>
                    </div>
                  </div>
                  
                  <Separator className="bg-bronze/20" />
                  
                  <div>
                    <h4 className="font-semibold text-xl mb-3 text-secondary">Техника безопасности</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={20} className="text-bronze mt-1" />
                        <span>Стрельба разрешена только по команде инструктора</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={20} className="text-bronze mt-1" />
                        <span>Запрещено направлять лук на людей даже без стрелы</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={20} className="text-bronze mt-1" />
                        <span>Натягивать тетиву только при наличии стрелы на луке</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={20} className="text-bronze mt-1" />
                        <span>Подход к мишеням только после команды "линия свободна"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={20} className="text-bronze mt-1" />
                        <span>Обязательное использование защиты для предплечья и пальцев</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-xl mb-3 text-secondary">Полезные материалы</h4>
                    <div className="flex gap-3">
                      <Button variant="outline" className="border-bronze text-bronze hover:bg-bronze/10">
                        <Icon name="Youtube" className="mr-2" size={20} />
                        Видео: Основы техники
                      </Button>
                      <Button variant="outline" className="border-bronze text-bronze hover:bg-bronze/10">
                        <Icon name="Youtube" className="mr-2" size={20} />
                        Видео: Дыхание при стрельбе
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="darts">
              <Card className="bg-card border-bronze/30">
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center gap-2">
                    <Icon name="CircleDot" className="text-bronze" />
                    Дартс
                  </CardTitle>
                  <CardDescription>Профессиональный и любительский дартс</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-xl mb-3 text-secondary">О занятиях</h4>
                    <p className="text-muted-foreground mb-4">
                      Обучение технике броска, стойке, прицеливанию. Изучение основных игр (301, 501, Cricket). 
                      Развитие точности, концентрации и стратегического мышления. Профессиональные мишени с электронным счетом.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline" className="border-bronze text-bronze">Для взрослых 18+</Badge>
                      <Badge variant="outline" className="border-bronze text-bronze">1 час</Badge>
                      <Badge variant="outline" className="border-bronze text-bronze">Дротики предоставляются</Badge>
                    </div>
                  </div>
                  
                  <Separator className="bg-bronze/20" />
                  
                  <div>
                    <h4 className="font-semibold text-xl mb-3 text-secondary">Техника безопасности</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={20} className="text-bronze mt-1" />
                        <span>Броски только с установленной линии (237 см от мишени)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={20} className="text-bronze mt-1" />
                        <span>Не подходить к мишени пока другие участники не закончили броски</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={20} className="text-bronze mt-1" />
                        <span>Бросать только в направлении мишени, не размахивать дротиками</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={20} className="text-bronze mt-1" />
                        <span>Проверять остроту наконечников перед началом игры</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={20} className="text-bronze mt-1" />
                        <span>Не использовать поврежденные дротики</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-xl mb-3 text-secondary">Полезные материалы</h4>
                    <div className="flex gap-3">
                      <Button variant="outline" className="border-bronze text-bronze hover:bg-bronze/10">
                        <Icon name="Youtube" className="mr-2" size={20} />
                        Видео: Правильная стойка
                      </Button>
                      <Button variant="outline" className="border-bronze text-bronze hover:bg-bronze/10">
                        <Icon name="Youtube" className="mr-2" size={20} />
                        Видео: Техника броска
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="knives">
              <Card className="bg-card border-bronze/30">
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center gap-2">
                    <Icon name="Swords" className="text-bronze" />
                    Метание ножей
                  </CardTitle>
                  <CardDescription>Спортивное и тактическое метание</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-xl mb-3 text-secondary">О занятиях</h4>
                    <p className="text-muted-foreground mb-4">
                      Обучение технике метания ножей на различные дистанции. Безоборотное и оборотное метание. 
                      Работа со специальными метательными ножами различного веса и баланса. Развитие координации и глазомера.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline" className="border-bronze text-bronze">Строго 18+</Badge>
                      <Badge variant="outline" className="border-bronze text-bronze">1.5 часа</Badge>
                      <Badge variant="outline" className="border-bronze text-bronze">Ножи предоставляются</Badge>
                    </div>
                  </div>
                  
                  <Separator className="bg-bronze/20" />
                  
                  <div>
                    <h4 className="font-semibold text-xl mb-3 text-secondary">Техника безопасности</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={20} className="text-bronze mt-1" />
                        <span>Метание только по команде инструктора с обозначенной линии</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={20} className="text-bronze mt-1" />
                        <span>Запрещено метать в направлении людей или незащищенных поверхностей</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={20} className="text-bronze mt-1" />
                        <span>Подбор ножей только после разрешения инструктора</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={20} className="text-bronze mt-1" />
                        <span>Проверка состояния ножей перед каждым броском</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={20} className="text-bronze mt-1" />
                        <span>Обязательное соблюдение безопасной дистанции между участниками</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={20} className="text-bronze mt-1" />
                        <span>Запрещено использовать личные ножи без разрешения инструктора</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-xl mb-3 text-secondary">Полезные материалы</h4>
                    <div className="flex gap-3">
                      <Button variant="outline" className="border-bronze text-bronze hover:bg-bronze/10">
                        <Icon name="Youtube" className="mr-2" size={20} />
                        Видео: Хват и бросок
                      </Button>
                      <Button variant="outline" className="border-bronze text-bronze hover:bg-bronze/10">
                        <Icon name="Youtube" className="mr-2" size={20} />
                        Видео: Безоборотное метание
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="weapons">
              <Card className="bg-card border-bronze/30">
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center gap-2">
                    <Icon name="Wrench" className="text-bronze" />
                    Разборка и сборка автоматов
                  </CardTitle>
                  <CardDescription>АК-74, АК-12 - техника и скорость</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-xl mb-3 text-secondary">О занятиях</h4>
                    <p className="text-muted-foreground mb-4">
                      Изучение устройства автоматов Калашникова АК-74 и АК-12. Отработка навыков неполной и полной 
                      разборки/сборки. Нормативы на время. Изучение принципов работы механизмов. Учебное оружие с 
                      полностью исправными механизмами.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline" className="border-bronze text-bronze">Строго 18+</Badge>
                      <Badge variant="outline" className="border-bronze text-bronze">2 часа</Badge>
                      <Badge variant="outline" className="border-bronze text-bronze">Учебное оружие</Badge>
                    </div>
                  </div>
                  
                  <Separator className="bg-bronze/20" />
                  
                  <div>
                    <h4 className="font-semibold text-xl mb-3 text-secondary">Техника безопасности</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={20} className="text-bronze mt-1" />
                        <span>Перед началом работы обязательная проверка на отсутствие патронов</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={20} className="text-bronze mt-1" />
                        <span>Строго следовать последовательности разборки/сборки</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={20} className="text-bronze mt-1" />
                        <span>Не направлять оружие на людей даже в учебном варианте</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={20} className="text-bronze mt-1" />
                        <span>Работать на специальном мате для предотвращения потери деталей</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={20} className="text-bronze mt-1" />
                        <span>Не применять чрезмерных усилий при разборке/сборке</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={20} className="text-bronze mt-1" />
                        <span>Обязательная проверка правильности сборки инструктором</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-xl mb-3 text-secondary">Полезные материалы</h4>
                    <div className="flex gap-3">
                      <Button variant="outline" className="border-bronze text-bronze hover:bg-bronze/10">
                        <Icon name="Youtube" className="mr-2" size={20} />
                        Видео: Неполная разборка АК-74
                      </Button>
                      <Button variant="outline" className="border-bronze text-bronze hover:bg-bronze/10">
                        <Icon name="Youtube" className="mr-2" size={20} />
                        Видео: Устройство АК-12
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="flanking">
              <Card className="bg-card border-bronze/30">
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center gap-2">
                    <Icon name="Sword" className="text-bronze" />
                    Фланкировка шашкой и посохом
                  </CardTitle>
                  <CardDescription>Традиционное казачье искусство владения оружием</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-xl mb-3 text-secondary">О занятиях</h4>
                    <p className="text-muted-foreground mb-4">
                      Обучение традиционному искусству фланкировки - вращению шашкой и посохом. Изучение базовых 
                      и сложных элементов: вертикальная и горизонтальная восьмерки, мельницы, броски и перехваты. 
                      Развитие координации, силы и выносливости. Традиционные казачьи техники.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline" className="border-bronze text-bronze">Для взрослых 18+</Badge>
                      <Badge variant="outline" className="border-bronze text-bronze">2 часа</Badge>
                      <Badge variant="outline" className="border-bronze text-bronze">Учебное оружие</Badge>
                    </div>
                  </div>
                  
                  <Separator className="bg-bronze/20" />
                  
                  <div>
                    <h4 className="font-semibold text-xl mb-3 text-secondary">Техника безопасности</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={20} className="text-bronze mt-1" />
                        <span>Обязательная проверка состояния шашки/посоха перед занятием</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={20} className="text-bronze mt-1" />
                        <span>Соблюдение безопасной дистанции между участниками (минимум 3 метра)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={20} className="text-bronze mt-1" />
                        <span>Начинать с учебных деревянных шашек, переход на боевые только с разрешения</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={20} className="text-bronze mt-1" />
                        <span>Не выполнять элементы вблизи стен, оборудования и других людей</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={20} className="text-bronze mt-1" />
                        <span>При потере контроля над оружием немедленно отойти</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="AlertCircle" size={20} className="text-bronze mt-1" />
                        <span>Обязательная разминка запястий и плечевого пояса перед занятием</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-xl mb-3 text-secondary">Полезные материалы</h4>
                    <div className="flex gap-3">
                      <Button variant="outline" className="border-bronze text-bronze hover:bg-bronze/10">
                        <Icon name="Youtube" className="mr-2" size={20} />
                        Видео: Базовые восьмерки
                      </Button>
                      <Button variant="outline" className="border-bronze text-bronze hover:bg-bronze/10">
                        <Icon name="Youtube" className="mr-2" size={20} />
                        Видео: Техника мельницы
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="medicine">
              <Card className="bg-card border-bronze/30">
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center gap-2">
                    <Icon name="HeartPulse" className="text-bronze" />
                    Тактическая медицина
                  </CardTitle>
                  <CardDescription>Первая помощь в экстремальных условиях</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-xl mb-3 text-secondary">О занятиях</h4>
                    <p className="text-muted-foreground mb-4">
                      Обучение навыкам оказания первой помощи в условиях ограниченного времени и ресурсов. 
                      Работа с кровотечениями, переломами, травмами. Использование жгутов, бинтов, иммобилизация. 
                      Транспортировка пострадавших. Практические занятия на манекенах и в полевых условиях.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="outline" className="border-bronze text-bronze">Для взрослых 18+</Badge>
                      <Badge variant="outline" className="border-bronze text-bronze">2.5 часа</Badge>
                      <Badge variant="outline" className="border-bronze text-bronze">Сертификат по окончании</Badge>
                    </div>
                  </div>
                  
                  <Separator className="bg-bronze/20" />
                  
                  <div>
                    <h4 className="font-semibold text-xl mb-3 text-secondary">Программа курса</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-bronze mt-1" />
                        <span>Оценка состояния пострадавшего и приоритизация действий</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-bronze mt-1" />
                        <span>Остановка кровотечений: жгуты, давящие повязки, тампонада</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-bronze mt-1" />
                        <span>Обеспечение проходимости дыхательных путей</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-bronze mt-1" />
                        <span>Иммобилизация переломов подручными средствами</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-bronze mt-1" />
                        <span>Противошоковые мероприятия</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-bronze mt-1" />
                        <span>Транспортировка пострадавших в различных условиях</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-xl mb-3 text-secondary">Полезные материалы</h4>
                    <div className="flex gap-3">
                      <Button variant="outline" className="border-bronze text-bronze hover:bg-bronze/10">
                        <Icon name="Youtube" className="mr-2" size={20} />
                        Видео: Наложение жгута
                      </Button>
                      <Button variant="outline" className="border-bronze text-bronze hover:bg-bronze/10">
                        <Icon name="Youtube" className="mr-2" size={20} />
                        Видео: Транспортировка
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card className="mt-8 bg-card/80 border-bronze">
            <CardHeader>
              <CardTitle className="text-2xl">Расписание занятий Центра Мастерства</CardTitle>
              <CardDescription>График тренировок на неделю</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="border-b border-bronze/30">
                    <tr>
                      <th className="py-3 px-4 font-semibold text-secondary">Время</th>
                      <th className="py-3 px-4 font-semibold text-secondary">Понедельник</th>
                      <th className="py-3 px-4 font-semibold text-secondary">Среда</th>
                      <th className="py-3 px-4 font-semibold text-secondary">Пятница</th>
                      <th className="py-3 px-4 font-semibold text-secondary">Суббота</th>
                      <th className="py-3 px-4 font-semibold text-secondary">Воскресенье</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-bronze/10">
                      <td className="py-3 px-4 font-medium">10:00-12:00</td>
                      <td className="py-3 px-4">Стрельба из лука</td>
                      <td className="py-3 px-4">Фланкировка</td>
                      <td className="py-3 px-4">Стрельба из лука</td>
                      <td className="py-3 px-4">Тактическая медицина</td>
                      <td className="py-3 px-4">Метание ножей</td>
                    </tr>
                    <tr className="border-b border-bronze/10">
                      <td className="py-3 px-4 font-medium">14:00-16:00</td>
                      <td className="py-3 px-4">Разборка автоматов</td>
                      <td className="py-3 px-4">Метание ножей</td>
                      <td className="py-3 px-4">Дартс</td>
                      <td className="py-3 px-4">Фланкировка</td>
                      <td className="py-3 px-4">Стрельба из лука</td>
                    </tr>
                    <tr className="border-b border-bronze/10">
                      <td className="py-3 px-4 font-medium">18:00-20:00</td>
                      <td className="py-3 px-4">Дартс</td>
                      <td className="py-3 px-4">Разборка автоматов</td>
                      <td className="py-3 px-4">Тактическая медицина</td>
                      <td className="py-3 px-4">Разборка автоматов</td>
                      <td className="py-3 px-4">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">* Вторник и четверг - выездные мероприятия, индивидуальные занятия по записи</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="instructors" className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-secondary mb-4">Инструкторы и Руководство</h2>
            <p className="text-xl text-muted-foreground">Профессиональная команда экспертов</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-bronze/30 hover:border-bronze transition-all">
              <CardHeader className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <Icon name="User" size={64} className="text-bronze" />
                </div>
                <CardTitle className="text-2xl">Александр Петрович Соколов</CardTitle>
                <CardDescription className="text-lg">Руководитель клуба</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Историк, реставратор. Стаж работы 25 лет. Кандидат исторических наук. 
                  Эксперт по холодному оружию и археологии.
                </p>
                <div className="flex gap-2 justify-center flex-wrap">
                  <Badge className="bg-bronze/20 text-bronze border-bronze">Реставрация</Badge>
                  <Badge className="bg-bronze/20 text-bronze border-bronze">Археология</Badge>
                  <Badge className="bg-bronze/20 text-bronze border-bronze">История</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-bronze/30 hover:border-bronze transition-all">
              <CardHeader className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <Icon name="User" size={64} className="text-bronze" />
                </div>
                <CardTitle className="text-2xl">Дмитрий Игоревич Волков</CardTitle>
                <CardDescription className="text-lg">Главный инструктор</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Мастер спорта по стрельбе из лука. Инструктор тактической медицины. 
                  Стаж преподавания 15 лет. Ветеран боевых действий.
                </p>
                <div className="flex gap-2 justify-center flex-wrap">
                  <Badge className="bg-bronze/20 text-bronze border-bronze">Стрельба</Badge>
                  <Badge className="bg-bronze/20 text-bronze border-bronze">Медицина</Badge>
                  <Badge className="bg-bronze/20 text-bronze border-bronze">Тактика</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-bronze/30 hover:border-bronze transition-all">
              <CardHeader className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <Icon name="User" size={64} className="text-bronze" />
                </div>
                <CardTitle className="text-2xl">Сергей Владимирович Казаков</CardTitle>
                <CardDescription className="text-lg">Инструктор фланкировки</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Потомственный казак. Мастер фланкировки шашкой и посохом. 
                  Чемпион России по джигитовке. Стаж 20 лет.
                </p>
                <div className="flex gap-2 justify-center flex-wrap">
                  <Badge className="bg-bronze/20 text-bronze border-bronze">Фланкировка</Badge>
                  <Badge className="bg-bronze/20 text-bronze border-bronze">Джигитовка</Badge>
                  <Badge className="bg-bronze/20 text-bronze border-bronze">Традиции</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-bronze/30 hover:border-bronze transition-all">
              <CardHeader className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <Icon name="User" size={64} className="text-bronze" />
                </div>
                <CardTitle className="text-2xl">Михаил Андреевич Борисов</CardTitle>
                <CardDescription className="text-lg">Инструктор по оружию</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Военный инженер. Эксперт по стрелковому оружию. 
                  Разборка/сборка автоматов, метание ножей. Стаж 18 лет.
                </p>
                <div className="flex gap-2 justify-center flex-wrap">
                  <Badge className="bg-bronze/20 text-bronze border-bronze">Оружие</Badge>
                  <Badge className="bg-bronze/20 text-bronze border-bronze">Метание</Badge>
                  <Badge className="bg-bronze/20 text-bronze border-bronze">Техника</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-bronze/30 hover:border-bronze transition-all">
              <CardHeader className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <Icon name="User" size={64} className="text-bronze" />
                </div>
                <CardTitle className="text-2xl">Елена Викторовна Романова</CardTitle>
                <CardDescription className="text-lg">Инструктор медицины</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Врач-хирург. Инструктор тактической медицины. 
                  Опыт работы в полевых условиях. Стаж 12 лет.
                </p>
                <div className="flex gap-2 justify-center flex-wrap">
                  <Badge className="bg-bronze/20 text-bronze border-bronze">Медицина</Badge>
                  <Badge className="bg-bronze/20 text-bronze border-bronze">Хирургия</Badge>
                  <Badge className="bg-bronze/20 text-bronze border-bronze">Тактика</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-bronze/30 hover:border-bronze transition-all">
              <CardHeader className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <Icon name="User" size={64} className="text-bronze" />
                </div>
                <CardTitle className="text-2xl">Иван Николаевич Смирнов</CardTitle>
                <CardDescription className="text-lg">Инструктор дартс</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Профессиональный игрок в дартс. Чемпион региона. 
                  Тренер высшей категории. Стаж 10 лет.
                </p>
                <div className="flex gap-2 justify-center flex-wrap">
                  <Badge className="bg-bronze/20 text-bronze border-bronze">Дартс</Badge>
                  <Badge className="bg-bronze/20 text-bronze border-bronze">Точность</Badge>
                  <Badge className="bg-bronze/20 text-bronze border-bronze">Спорт</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="events" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-secondary mb-4">Мероприятия и Выступления</h2>
            <p className="text-xl text-muted-foreground">Календарь выездных мероприятий и соревнований</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card border-bronze/30">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2">Фестиваль "Русская Застава"</CardTitle>
                    <CardDescription className="text-lg">Показательные выступления</CardDescription>
                  </div>
                  <Badge className="bg-secondary text-secondary-foreground">15 Декабря</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Показательные выступления по фланкировке шашкой, стрельбе из лука, метанию ножей. 
                  Мастер-классы для посетителей.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="MapPin" size={16} className="text-bronze" />
                  <span>Парк "Патриот", Москва</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-bronze/30">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2">Чемпионат по стрельбе из лука</CardTitle>
                    <CardDescription className="text-lg">Соревнование</CardDescription>
                  </div>
                  <Badge className="bg-secondary text-secondary-foreground">22 Декабря</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Участие членов клуба в региональном чемпионате по традиционной стрельбе из лука.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="MapPin" size={16} className="text-bronze" />
                  <span>Стрелковый комплекс "Лучник"</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-bronze/30">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2">Историческая реконструкция</CardTitle>
                    <CardDescription className="text-lg">Выставка и мастер-классы</CardDescription>
                  </div>
                  <Badge className="bg-secondary text-secondary-foreground">10 Января</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Выставка исторических экспонатов музея. Реконструкция боя. Мастер-классы по резьбе 
                  и реставрации.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="MapPin" size={16} className="text-bronze" />
                  <span>Исторический музей</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-bronze/30">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2">Турнир по дартс</CardTitle>
                    <CardDescription className="text-lg">Соревнование</CardDescription>
                  </div>
                  <Badge className="bg-secondary text-secondary-foreground">18 Января</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Открытый турнир по дартс среди клубов города. Призовой фонд. Регистрация до 15 января.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="MapPin" size={16} className="text-bronze" />
                  <span>Центр мастерства клуба</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-bronze/30">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2">Курс тактической медицины</CardTitle>
                    <CardDescription className="text-lg">Мастер-класс для новичков</CardDescription>
                  </div>
                  <Badge className="bg-secondary text-secondary-foreground">25 Января</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Интенсивный курс основ тактической медицины. Выдача сертификатов участникам.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="MapPin" size={16} className="text-bronze" />
                  <span>Центр мастерства клуба</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-bronze/30">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2">День открытых дверей</CardTitle>
                    <CardDescription className="text-lg">Бесплатное посещение</CardDescription>
                  </div>
                  <Badge className="bg-secondary text-secondary-foreground">1 Февраля</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Бесплатное посещение музея и Центра мастерства. Пробные занятия по всем направлениям. 
                  Консультации инструкторов.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="MapPin" size={16} className="text-bronze" />
                  <span>Территория клуба</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="booking" className="py-16 bg-card/30">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-secondary mb-4">Онлайн-запись</h2>
            <p className="text-xl text-muted-foreground">Забронируйте занятие в удобное время</p>
          </div>

          <Card className="bg-card border-bronze">
            <CardHeader>
              <CardTitle className="text-2xl">Заявка на посещение</CardTitle>
              <CardDescription>Заполните форму, и мы свяжемся с вами для подтверждения</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя и Фамилия</Label>
                  <Input 
                    id="name" 
                    placeholder="Иван Иванов" 
                    value={bookingName}
                    onChange={(e) => setBookingName(e.target.value)}
                    required 
                    className="bg-background border-bronze/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+7 (999) 123-45-67" 
                    value={bookingPhone}
                    onChange={(e) => setBookingPhone(e.target.value)}
                    required 
                    className="bg-background border-bronze/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="activity">Вид занятия</Label>
                  <Select value={bookingActivity} onValueChange={setBookingActivity} required>
                    <SelectTrigger className="bg-background border-bronze/30">
                      <SelectValue placeholder="Выберите занятие" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="archery">Стрельба из лука</SelectItem>
                      <SelectItem value="darts">Дартс</SelectItem>
                      <SelectItem value="knives">Метание ножей</SelectItem>
                      <SelectItem value="weapons">Разборка автоматов</SelectItem>
                      <SelectItem value="flanking">Фланкировка</SelectItem>
                      <SelectItem value="medicine">Тактическая медицина</SelectItem>
                      <SelectItem value="museum">Посещение музея</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="day">День недели</Label>
                    <Select value={bookingDay} onValueChange={setBookingDay} required>
                      <SelectTrigger className="bg-background border-bronze/30">
                        <SelectValue placeholder="Выберите день" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monday">Понедельник</SelectItem>
                        <SelectItem value="tuesday">Вторник</SelectItem>
                        <SelectItem value="wednesday">Среда</SelectItem>
                        <SelectItem value="thursday">Четверг</SelectItem>
                        <SelectItem value="friday">Пятница</SelectItem>
                        <SelectItem value="saturday">Суббота</SelectItem>
                        <SelectItem value="sunday">Воскресенье</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Время</Label>
                    <Select value={bookingTime} onValueChange={setBookingTime} required>
                      <SelectTrigger className="bg-background border-bronze/30">
                        <SelectValue placeholder="Выберите время" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10:00">10:00 - 12:00</SelectItem>
                        <SelectItem value="14:00">14:00 - 16:00</SelectItem>
                        <SelectItem value="18:00">18:00 - 20:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Дополнительная информация (опционально)</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Укажите дополнительные пожелания или вопросы" 
                    className="bg-background border-bronze/30 min-h-24"
                  />
                </div>

                <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="gallery" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-secondary mb-4">Галерея</h2>
            <p className="text-xl text-muted-foreground">Фото и видео с наших мероприятий</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-bronze/30 overflow-hidden hover:border-bronze transition-all">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <Icon name="Image" size={64} className="text-bronze" />
              </div>
              <CardContent className="pt-4">
                <h4 className="font-semibold text-lg mb-2">Фестиваль реконструкции 2024</h4>
                <p className="text-sm text-muted-foreground">Показательные выступления и мастер-классы</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-bronze/30 overflow-hidden hover:border-bronze transition-all">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <Icon name="Video" size={64} className="text-bronze" />
              </div>
              <CardContent className="pt-4">
                <h4 className="font-semibold text-lg mb-2">Обучение фланкировке</h4>
                <p className="text-sm text-muted-foreground">Видео с тренировочного процесса</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-bronze/30 overflow-hidden hover:border-bronze transition-all">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <Icon name="Image" size={64} className="text-bronze" />
              </div>
              <CardContent className="pt-4">
                <h4 className="font-semibold text-lg mb-2">Экспонаты музея</h4>
                <p className="text-sm text-muted-foreground">Коллекция старинного оружия</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-bronze/30 overflow-hidden hover:border-bronze transition-all">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <Icon name="Video" size={64} className="text-bronze" />
              </div>
              <CardContent className="pt-4">
                <h4 className="font-semibold text-lg mb-2">Чемпионат по стрельбе</h4>
                <p className="text-sm text-muted-foreground">Репортаж с соревнований</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-bronze/30 overflow-hidden hover:border-bronze transition-all">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <Icon name="Image" size={64} className="text-bronze" />
              </div>
              <CardContent className="pt-4">
                <h4 className="font-semibold text-lg mb-2">Тренировки на площадке</h4>
                <p className="text-sm text-muted-foreground">Центр мастерства в действии</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-bronze/30 overflow-hidden hover:border-bronze transition-all">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <Icon name="Video" size={64} className="text-bronze" />
              </div>
              <CardContent className="pt-4">
                <h4 className="font-semibold text-lg mb-2">Курс тактической медицины</h4>
                <p className="text-sm text-muted-foreground">Практические занятия</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer id="contacts" className="py-12 bg-card border-t border-bronze">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Контакты</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={20} className="text-bronze" />
                  <span>г. Москва, ул. Историческая, д. 15</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={20} className="text-bronze" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={20} className="text-bronze" />
                  <span>info@recon-club.ru</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Режим работы</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Музей:</strong> Пн-Пт 10:00-18:00, Сб-Вс 11:00-17:00</p>
                <p><strong>Центр мастерства:</strong> Пн-Сб 10:00-20:00</p>
                <p><strong>Воскресенье:</strong> 10:00-16:00</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Мы в соцсетях</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="border-bronze text-bronze hover:bg-bronze/10">
                  <Icon name="Facebook" size={24} />
                </Button>
                <Button variant="outline" size="icon" className="border-bronze text-bronze hover:bg-bronze/10">
                  <Icon name="Instagram" size={24} />
                </Button>
                <Button variant="outline" size="icon" className="border-bronze text-bronze hover:bg-bronze/10">
                  <Icon name="Youtube" size={24} />
                </Button>
                <Button variant="outline" size="icon" className="border-bronze text-bronze hover:bg-bronze/10">
                  <Icon name="Send" size={24} />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Следите за нашими новостями, расписанием мероприятий и обучающими материалами
              </p>
            </div>
          </div>

          <Separator className="my-8 bg-bronze/20" />

          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Клуб Исторической Реконструкции. Все права защищены.</p>
            <p className="text-sm mt-2">История живёт в наших руках</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
