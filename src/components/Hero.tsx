import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20 relative overflow-hidden">
      {/* Математические символы как декор */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-6xl text-purple-500">
          ∑
        </div>
        <div className="absolute top-40 right-20 text-4xl text-blue-500">∫</div>
        <div className="absolute bottom-32 left-1/4 text-5xl text-purple-400">
          π
        </div>
        <div className="absolute bottom-20 right-1/3 text-3xl text-blue-400">
          √
        </div>
        <div className="absolute top-1/3 right-10 text-4xl text-purple-300">
          ∞
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-montserrat text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Светлана Виталиевна
            <span className="block text-purple-600">Мигачёва</span>
          </h1>

          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Преподаватель математики в старших классах. Помогаю ученикам понять
            красоту и логику математики, готовлю к ЕГЭ и поступлению в ВУЗы.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Мои курсы
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50"
            >
              <Icon name="User" size={20} className="mr-2" />
              Обо мне
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Icon name="Award" size={24} className="text-purple-600" />
              </div>
              <h3 className="font-montserrat font-semibold mb-2">
                15+ лет опыта
              </h3>
              <p className="text-gray-600 text-sm">
                Преподавания математики в старших классах
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Icon name="TrendingUp" size={24} className="text-blue-600" />
              </div>
              <h3 className="font-montserrat font-semibold mb-2">
                95% успешности
              </h3>
              <p className="text-gray-600 text-sm">
                Учеников поступают в желаемые ВУЗы
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Icon name="Users" size={24} className="text-green-600" />
              </div>
              <h3 className="font-montserrat font-semibold mb-2">
                200+ учеников
              </h3>
              <p className="text-gray-600 text-sm">
                Успешно подготовлены к экзаменам
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
