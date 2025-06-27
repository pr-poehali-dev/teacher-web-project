import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Courses = () => {
  const courses = [
    {
      title: "Подготовка к ЕГЭ",
      description:
        "Комплексная подготовка к единому государственному экзамену по математике профильного уровня",
      duration: "9 месяцев",
      level: "10-11 класс",
      price: "от 3000₽/месяц",
      features: [
        "Разбор всех типов заданий",
        "Регулярные пробные экзамены",
        "Индивидуальный план подготовки",
      ],
      color: "purple",
    },
    {
      title: "Углублённая математика",
      description:
        "Курс для учеников, желающих изучать математику на продвинутом уровне",
      duration: "Весь учебный год",
      level: "9-11 класс",
      price: "от 2500₽/месяц",
      features: [
        "Олимпиадные задачи",
        "Дополнительные разделы",
        "Подготовка к вступительным",
      ],
      color: "blue",
    },
    {
      title: "Устранение пробелов",
      description:
        "Индивидуальная работа с учениками для восполнения пробелов в знаниях",
      duration: "По необходимости",
      level: "8-11 класс",
      price: "от 2000₽/занятие",
      features: ["Диагностика знаний", "Персональный план", "Гибкий график"],
      color: "green",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "purple":
        return {
          bg: "bg-purple-50",
          border: "border-purple-200",
          icon: "bg-purple-100 text-purple-600",
          accent: "text-purple-600",
        };
      case "blue":
        return {
          bg: "bg-blue-50",
          border: "border-blue-200",
          icon: "bg-blue-100 text-blue-600",
          accent: "text-blue-600",
        };
      case "green":
        return {
          bg: "bg-green-50",
          border: "border-green-200",
          icon: "bg-green-100 text-green-600",
          accent: "text-green-600",
        };
      default:
        return {
          bg: "bg-gray-50",
          border: "border-gray-200",
          icon: "bg-gray-100 text-gray-600",
          accent: "text-gray-600",
        };
    }
  };

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl font-bold text-gray-900 mb-4">
            Мои курсы и программы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите подходящий формат обучения для достижения ваших целей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => {
            const colors = getColorClasses(course.color);
            return (
              <div
                key={index}
                className={`${colors.bg} ${colors.border} border rounded-2xl p-8 hover:shadow-lg transition-shadow`}
              >
                <div
                  className={`w-16 h-16 ${colors.icon} rounded-xl flex items-center justify-center mb-6`}
                >
                  <Icon name="BookOpen" size={28} />
                </div>

                <h3 className="font-montserrat font-bold text-xl text-gray-900 mb-3">
                  {course.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {course.duration}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {course.level}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon
                      name="CreditCard"
                      size={16}
                      className="text-gray-500"
                    />
                    <span className={`text-sm font-semibold ${colors.accent}`}>
                      {course.price}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-8">
                  {course.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <Icon name="Check" size={16} className={colors.accent} />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full" variant="outline">
                  Узнать подробнее
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
