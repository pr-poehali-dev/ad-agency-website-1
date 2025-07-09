import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold">MediaPro</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-400 transition-colors">
                Главная
              </a>
              <a
                href="#about"
                className="hover:text-blue-400 transition-colors"
              >
                О нас
              </a>
              <a
                href="#services"
                className="hover:text-blue-400 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#portfolio"
                className="hover:text-blue-400 transition-colors"
              >
                Портфолио
              </a>
              <a
                href="#contact"
                className="hover:text-blue-400 transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Связаться с нами
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Профессиональная
            <br />
            <span className="text-blue-400">ТВ-реклама</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Создаем эффективные рекламные кампании для телевидения, которые
            увеличивают узнаваемость бренда и привлекают клиентов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
            >
              <Icon name="Play" className="mr-2" />
              Смотреть портфолио
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-slate-900"
            >
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">О нашем агентстве</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Более 10 лет создаем рекламные кампании для ведущих телеканалов
              России
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Target"
                  className="w-12 h-12 mx-auto mb-4 text-blue-600"
                />
                <CardTitle>Стратегия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Разрабатываем целевые стратегии для максимального охвата
                  аудитории
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Video"
                  className="w-12 h-12 mx-auto mb-4 text-blue-600"
                />
                <CardTitle>Производство</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Полный цикл создания рекламных роликов от идеи до эфира
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="BarChart"
                  className="w-12 h-12 mx-auto mb-4 text-blue-600"
                />
                <CardTitle>Аналитика</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Детальный анализ эффективности каждой рекламной кампании
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">
              Комплексные решения для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Tv" className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle>Реклама на ТВ</CardTitle>
                <CardDescription>
                  Размещение на федеральных и региональных каналах
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2">
                  <li>• Планирование рекламных блоков</li>
                  <li>• Выбор оптимального времени</li>
                  <li>• Мониторинг эфира</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Camera" className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle>Видеопродакшн</CardTitle>
                <CardDescription>
                  Создание рекламных роликов любой сложности
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2">
                  <li>• Разработка концепции</li>
                  <li>• Съемка и монтаж</li>
                  <li>• Звуковое оформление</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Users" className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle>Кастинг</CardTitle>
                <CardDescription>
                  Подбор актеров и ведущих для роликов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2">
                  <li>• База проверенных актеров</li>
                  <li>• Организация кастингов</li>
                  <li>• Работа с известными лицами</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Портфолио</h2>
            <p className="text-xl text-gray-600">Наши лучшие работы</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <Icon name="Play" className="w-16 h-16 text-white" />
              </div>
              <CardHeader>
                <CardTitle>Банк "Развитие"</CardTitle>
                <CardDescription>
                  Рекламная кампания на Первом канале
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Увеличение узнаваемости бренда на 45%
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center">
                <Icon name="Play" className="w-16 h-16 text-white" />
              </div>
              <CardHeader>
                <CardTitle>Сеть "Продукты"</CardTitle>
                <CardDescription>Региональная реклама на НТВ</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Рост продаж на 30% за месяц
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center">
                <Icon name="Play" className="w-16 h-16 text-white" />
              </div>
              <CardHeader>
                <CardTitle>Автосалон "Форвард"</CardTitle>
                <CardDescription>
                  Спонсорство программы на России 1
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Увеличение трафика на 60%
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600">Готовы обсудить ваш проект</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" className="w-5 h-5 text-blue-600 mr-3" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="w-5 h-5 text-blue-600 mr-3" />
                  <span>info@mediapro.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="w-5 h-5 text-blue-600 mr-3" />
                  <span>Москва, ул. Тверская, 10</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Время работы</h4>
                <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                <p className="text-gray-600">Сб-Вс: По договоренности</p>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Отправить заявку</CardTitle>
                  <CardDescription>
                    Мы свяжемся с вами в течение часа
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Ваше имя" />
                    <Input placeholder="Телефон" />
                  </div>
                  <Input placeholder="Email" />
                  <Input placeholder="Компания" />
                  <Textarea
                    placeholder="Расскажите о вашем проекте"
                    className="min-h-24"
                  />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">MediaPro</div>
              <p className="text-gray-400">
                Профессиональное рекламное агентство с фокусом на ТВ-рекламу
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Реклама на ТВ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Видеопродакшн
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Кастинг
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Команда
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Вакансии
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@mediapro.ru</p>
                <p>Москва, ул. Тверская, 10</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MediaPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
