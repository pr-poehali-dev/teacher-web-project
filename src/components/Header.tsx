import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            СМ
          </div>
          <div>
            <h1 className="font-montserrat font-bold text-lg text-gray-900">
              Светлана Мигачёва
            </h1>
            <p className="text-sm text-gray-600">Учитель математики</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#home"
            className="text-gray-700 hover:text-purple-600 transition-colors"
          >
            Главная
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-purple-600 transition-colors"
          >
            О себе
          </a>
          <a
            href="#portfolio"
            className="text-gray-700 hover:text-purple-600 transition-colors"
          >
            Портфолио
          </a>
          <a
            href="#courses"
            className="text-gray-700 hover:text-purple-600 transition-colors"
          >
            Курсы
          </a>
        </nav>

        <Button className="md:hidden" variant="ghost" size="sm">
          <Icon name="Menu" size={20} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
