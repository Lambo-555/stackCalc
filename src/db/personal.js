const persons = [
  {
    name: `Андрей Санников`,
    task: {
      question: `Шаурмячная - выгодная тема?`, answers: [
        {text: `А то`, isRight: true, disabled: false},
        {text: `Не, тухло`, isRight: false, disabled: false},
        {text: `Забудь`, isRight: false, disabled: false},
        {text: `Не факт`, isRight: false, disabled: false},
      ]
    }
  },
  {
    name: `Денис Малышев`,
    task: {
      question: `Когда будет готов домик?`, answers: [
        {text: `2024`, isRight: false, disabled: false},
        {text: `2023`, isRight: false, disabled: false},
        {text: `2022`, isRight: false, disabled: false},
        {text: `2021`, isRight: true, disabled: false},
      ]
    }
  },
  {
    name: `Анна Садыкова`,
    task: {
      question: `Ты люлюшка?`, answers: [
        {text: `Нихт, копф шверцен`, isRight: false, disabled: false},
        {text: `Да, лю!`, isRight: true, disabled: false},
        {text: `...обижунька`, isRight: false, disabled: false},
        {text: `Сам скажи`, isRight: false, disabled: false},
      ]
    }
  },
  {
    name: `Анастасия Деснева`,
    task: {
      question: `Максик у нас чемпион?`, answers: [
        {text: `Да`, isRight: true, disabled: false},
        {text: `Ессествннно!`, isRight: true, disabled: false},
        {text: `Оф корс`, isRight: true, disabled: false},
        {text: `Есс!`, isRight: true, disabled: false},
      ]
    }
  },
  {
    name: `Андрей Кириченко`,
    task: {
      question: `Хакнешь этот сайт?)`, answers: [
        {text: `Не хочу!`, isRight: false, disabled: false},
        {text: `Не, не буду!`, isRight: false, disabled: false},
        {text: `Не проси!`, isRight: false, disabled: false},
        {text: `Реакт? - изи`, isRight: true, disabled: false},
      ]
    }
  },
  {
    name: `Владислав Коновалов`,
    task: {
      question: `Твой Форд лучший не районе?`, answers: [
        {text: `Нееее`, isRight: false, disabled: false},
        {text: `Не смеши`, isRight: false, disabled: false},
        {text: `Риторический вопрос`, isRight: true, disabled: false},
        {text: `Что не в зале?`, isRight: false, disabled: false},
      ]
    }
  },
  {
    name: `Илья Безродный`,
    task: {
      question: `Дожал до сотки?`, answers: [
        {text: `Не`, isRight: false, disabled: false},
        {text: `Да`, isRight: false, disabled: false},
        {text: `О чем ты?`, isRight: false, disabled: false},
        {text: `Я в дипрессии`, isRight: true, disabled: false},
      ]
    }
  },
  {
    name: `Юлия Нестерова`,
    task: {
      question: `Будут новые рисунки в инсте?`, answers: [
        {text: `2`, isRight: false, disabled: false},
        {text: `3`, isRight: false, disabled: false},
        {text: `мноха да харно`, isRight: true, disabled: false},
        {text: `1`, isRight: false, disabled: false},
      ]
    }
  },
  {
    name: `Анастасия Кузьмина`,
    task: {
      question: `Мейк ит нейсти - это?`, answers: [
        {text: `Стих`, isRight: false, disabled: false},
        {text: `Улица`, isRight: false, disabled: false},
        {text: `Книга`, isRight: false, disabled: false},
        {text: `Песня`, isRight: true, disabled: false},
      ]
    }
  },
  {
    name: `Евгений Жигульский`,
    task: {
      question: `Цепи трогают твои руки?`, answers: [
        {text: `Неа`, isRight: false, disabled: false},
        {text: `Только если золотые`, isRight: true, disabled: false},
        {text: `Ток свинцовые`, isRight: false, disabled: false},
        {text: `Ток стальные`, isRight: false, disabled: false},
      ]
    }
  },
  {
    name: `Евгений Приходько`,
    task: {
      question: `Кто из них герой Марвел?`, answers: [
        {text: `Человек-зуб`, isRight: false, disabled: false},
        {text: `Зуб-человек`, isRight: false, disabled: false},
        {text: `Тони Старк`, isRight: true, disabled: false},
        {text: `Голова-ластик`, isRight: false, disabled: false},
      ]
    }
  },
  {
    name: `Павел`,
    task: {
      question: `Будем жаловаться на Влада в 2020?`, answers: [
        {text: `Да`, isRight: true, disabled: false},
        {text: `Конечно`, isRight: true, disabled: false},
        {text: `Почему нет`, isRight: true, disabled: false},
        {text: `Шепотом`, isRight: true, disabled: false},
      ]
    }
  },
  {
    name: `Александр Кочетков`,
    task: {
      question: `Какого цвета мяч UEFA 2020?`, answers: [
        {text: `Черный`, isRight: false, disabled: false},
        {text: `Белый`, isRight: true, disabled: false},
        {text: `Зеленый`, isRight: false, disabled: false},
        {text: `Красный`, isRight: false, disabled: false},
      ]
    }
  },
  {
    name: `Виктор Иванов`,
    task: {
      question: `Наведем жаришки в 2021`, answers: [
        {text: `В бой!`, isRight: true, disabled: false},
        {text: `Неа`, isRight: false, disabled: false},
        {text: `Отлежимся`, isRight: false, disabled: false},
        {text: `Отоспимся`, isRight: false, disabled: false},
      ]
    }
  },

];

export default persons;
