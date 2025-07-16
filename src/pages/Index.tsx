import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pokemon-blue/10 to-golden/10">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pokemon-yellow to-pokemon-blue rounded-full"></div>
            <h1 className="text-2xl font-bold text-gray-900">PokéCards Store</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-pokemon-blue transition-colors">Главная</a>
            <a href="#products" className="text-gray-700 hover:text-pokemon-blue transition-colors">Товары</a>
            <a href="#tournaments" className="text-gray-700 hover:text-pokemon-blue transition-colors">Турниры</a>
            <a href="#reviews" className="text-gray-700 hover:text-pokemon-blue transition-colors">Отзывы</a>
            <a href="#news" className="text-gray-700 hover:text-pokemon-blue transition-colors">Новости</a>
          </nav>
          <Button className="bg-pokemon-blue hover:bg-pokemon-blue/80 text-white">
            <Icon name="ShoppingCart" size={16} className="mr-2" />
            Корзина
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pokemon-yellow/20 via-pokemon-blue/20 to-flame/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-pokemon-yellow text-black px-4 py-2">
                <Icon name="Star" size={16} className="mr-2" />
                Редкие карты Pokémon
              </Badge>
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Лучшие карты <span className="text-pokemon-blue">Pokémon</span> в одном месте
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Мы предлагаем самую большую коллекцию редких карт, организуем турниры и принимаем предзаказы на новые релизы.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-pokemon-blue hover:bg-pokemon-blue/80 text-white px-8">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть каталог
                </Button>
                <Button variant="outline" size="lg" className="border-pokemon-blue text-pokemon-blue hover:bg-pokemon-blue hover:text-white">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Наш магазин
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pokemon-yellow to-pokemon-blue rounded-3xl opacity-20 blur-3xl"></div>
              <img 
                src="/img/6c37cb7e-356f-4efa-9c27-6552c5c04fd8.jpg" 
                alt="Редкие карты Покемон" 
                className="relative z-10 w-full rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-pokemon-yellow/20 text-pokemon-blue mb-4">
              <Icon name="Package" size={16} className="mr-2" />
              Наши товары
            </Badge>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Популярные карты</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              От редких голографических карт до эксклюзивных коллекционных наборов
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Charizard GX", price: "15,000₽", rarity: "Ultra Rare", image: "/img/6c37cb7e-356f-4efa-9c27-6552c5c04fd8.jpg" },
              { name: "Pikachu VMAX", price: "8,500₽", rarity: "Secret Rare", image: "/img/1736ce8d-be73-4f85-9525-5d8f3303bdd1.jpg" },
              { name: "Набор Base Set", price: "45,000₽", rarity: "Vintage", image: "/img/6c37cb7e-356f-4efa-9c27-6552c5c04fd8.jpg" }
            ].map((card, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img src={card.image} alt={card.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <Badge className="absolute top-4 right-4 bg-pokemon-yellow text-black">
                    {card.rarity}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{card.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-pokemon-blue">{card.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-pokemon-blue hover:bg-pokemon-blue/80 text-white">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Добавить в корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tournaments Section */}
      <section id="tournaments" className="py-20 bg-gradient-to-r from-pokemon-blue/5 to-pokemon-yellow/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-flame/20 text-flame mb-4">
              <Icon name="Trophy" size={16} className="mr-2" />
              Турниры и события
            </Badge>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Предстоящие турниры</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2">Чемпионат города</CardTitle>
                    <CardDescription className="text-lg">25 июля 2025 • 10:00</CardDescription>
                  </div>
                  <Badge className="bg-pokemon-yellow text-black">Регистрация открыта</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={16} className="text-pokemon-blue" />
                  <span>Максимум 32 игрока</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Gift" size={16} className="text-pokemon-blue" />
                  <span>Призовой фонд: 50,000₽</span>
                </div>
                <Button className="w-full bg-flame hover:bg-flame/80 text-white">
                  Зарегистрироваться
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2">Draft турнир</CardTitle>
                    <CardDescription className="text-lg">2 августа 2025 • 19:00</CardDescription>
                  </div>
                  <Badge variant="outline" className="border-pokemon-blue text-pokemon-blue">Скоро</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={16} className="text-pokemon-blue" />
                  <span>Неограниченно</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Package" size={16} className="text-pokemon-blue" />
                  <span>Бустеры включены</span>
                </div>
                <Button variant="outline" className="w-full border-pokemon-blue text-pokemon-blue hover:bg-pokemon-blue hover:text-white">
                  Узнать больше
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pre-orders Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-pokemon-blue/20 text-pokemon-blue mb-4">
              <Icon name="Clock" size={16} className="mr-2" />
              Предзаказы
            </Badge>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Новые релизы</h3>
          </div>

          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-pokemon-yellow/10 to-pokemon-blue/10 border-2 border-pokemon-blue/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="bg-flame text-white mb-4">Предзаказ</Badge>
                  <h4 className="text-3xl font-bold mb-4">Scarlet & Violet: Surging Sparks</h4>
                  <p className="text-gray-600 mb-6">Новая серия с уникальными Tera-картами и эксклюзивными покемонами.</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span>Дата выхода:</span>
                      <span className="font-semibold">8 ноября 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Цена бустера:</span>
                      <span className="font-semibold text-pokemon-blue">350₽</span>
                    </div>
                  </div>
                  <Button className="bg-pokemon-blue hover:bg-pokemon-blue/80 text-white">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Оформить предзаказ
                  </Button>
                </div>
                <div>
                  <img src="/img/1736ce8d-be73-4f85-9525-5d8f3303bdd1.jpg" alt="Новая серия" className="w-full rounded-lg shadow-lg" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-r from-pokemon-yellow/5 to-flame/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-pokemon-yellow/20 text-pokemon-blue mb-4">
              <Icon name="Star" size={16} className="mr-2" />
              Отзывы клиентов
            </Badge>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Что говорят о нас</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Алексей", rating: 5, text: "Лучший магазин карт в городе! Огромный выбор и отличные цены." },
              { name: "Мария", rating: 5, text: "Турниры проходят на высшем уровне. Всегда интересно и весело!" },
              { name: "Дмитрий", rating: 5, text: "Быстрая доставка предзаказов. Получил карты раньше официального релиза." }
            ].map((review, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-pokemon-yellow fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{review.text}"</p>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-pokemon-blue rounded-full flex items-center justify-center text-white font-semibold">
                      {review.name[0]}
                    </div>
                    <span className="font-semibold">{review.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-flame/20 text-flame mb-4">
              <Icon name="Newspaper" size={16} className="mr-2" />
              Новости
            </Badge>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Последние новости</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Новые правила турниров", date: "15 июля 2025", image: "/img/6c37cb7e-356f-4efa-9c27-6552c5c04fd8.jpg" },
              { title: "Скидки на винтажные карты", date: "12 июля 2025", image: "/img/1736ce8d-be73-4f85-9525-5d8f3303bdd1.jpg" },
              { title: "Расширение ассортимента", date: "10 июля 2025", image: "/img/6c37cb7e-356f-4efa-9c27-6552c5c04fd8.jpg" }
            ].map((news, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img src={news.image} alt={news.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <CardHeader>
                  <CardDescription className="text-pokemon-blue">{news.date}</CardDescription>
                  <CardTitle className="group-hover:text-pokemon-blue transition-colors">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="text-pokemon-blue hover:bg-pokemon-blue hover:text-white">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pokemon-yellow to-pokemon-blue rounded-full"></div>
                <h4 className="text-xl font-bold">PokéCards Store</h4>
              </div>
              <p className="text-gray-400">Ваш надежный партнер в мире коллекционных карт Pokémon.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pokemon-blue transition-colors">Редкие карты</a></li>
                <li><a href="#" className="hover:text-pokemon-blue transition-colors">Наборы</a></li>
                <li><a href="#" className="hover:text-pokemon-blue transition-colors">Аксессуары</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pokemon-blue transition-colors">Турниры</a></li>
                <li><a href="#" className="hover:text-pokemon-blue transition-colors">Оценка карт</a></li>
                <li><a href="#" className="hover:text-pokemon-blue transition-colors">Предзаказы</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>ул. Покемон, 123</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (123) 456-78-90</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@pokecards.ru</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PokéCards Store. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;