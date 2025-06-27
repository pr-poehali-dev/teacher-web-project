import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-4xl font-bold text-gray-900 mb-4">
              О моём подходе к преподаванию
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Математика — это не просто цифры и формулы, это логика мышления и
              красота закономерностей
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon
                      name="Lightbulb"
                      size={20}
                      className="text-purple-600"
                    />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg mb-2">
                      Индивидуальный подход
                    </h3>
                    <p className="text-gray-600">
                      Каждый ученик уникален. Подбираю методы обучения под
                      особенности восприятия и темп каждого студента.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Target" size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg mb-2">
                      Практическое применение
                    </h3>
                    <p className="text-gray-600">
                      Показываю, как математика применяется в реальной жизни,
                      делаю абстрактные понятия понятными.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon
                      name="CheckCircle"
                      size={20}
                      className="text-green-600"
                    />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg mb-2">
                      Системная подготовка
                    </h3>
                    <p className="text-gray-600">
                      Структурированная программа подготовки к ЕГЭ с постоянным
                      контролем прогресса и корректировкой плана.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-gray-900 mb-4">
                  Мои результаты
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">
                      Средний балл ЕГЭ моих учеников:
                    </span>
                    <span className="font-bold text-2xl text-purple-600">
                      82
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Поступили в топ-ВУЗы:</span>
                    <span className="font-bold text-2xl text-blue-600">
                      78%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Сдали на 80+ баллов:</span>
                    <span className="font-bold text-2xl text-green-600">
                      65%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
