import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                СМ
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-lg">
                  Светлана Мигачёва
                </h3>
                <p className="text-gray-400 text-sm">Учитель математики</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Помогаю ученикам старших классов понять математику и успешно сдать
              экзамены.
            </p>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={16} className="text-purple-400" />
                <span className="text-gray-300 text-sm">
                  +7 (xxx) xxx-xx-xx
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} className="text-purple-400" />
                <span className="text-gray-300 text-sm">
                  svetlana@example.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} className="text-purple-400" />
                <span className="text-gray-300 text-sm">Москва, Россия</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold mb-4">
              Социальные сети
            </h4>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <Icon name="MessageCircle" size={18} />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <Icon name="Send" size={18} />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <Icon name="Phone" size={18} />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Светлана Михайловна Мигачёва. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
