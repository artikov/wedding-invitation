// All user-facing strings live here. No hardcoded copy anywhere in components.
// Languages: uz (default), ru, en.

export const LANGUAGES = [
  { code: 'uz', label: "O'zbekcha", short: 'UZ' },
  { code: 'ru', label: 'Русский', short: 'RU' },
  { code: 'en', label: 'English', short: 'EN' },
]

export const DEFAULT_LANGUAGE = 'uz'

export const translations = {
  uz: {
    envelope: {
      hint: 'Taklifnomani ochish uchun muhrni bosing',
      seal: 'Oching',
      to: 'Aziz mehmon',
    },
    hero: {
      eyebrow: 'Taklifnoma',
      together: 'turmush qurishmoqda',
      and: 'va',
      groom: 'Jasur',
      bride: 'Madina',
      intro:
        'Hayotimizdagi eng baxtli kunni biz bilan birga nishonlashga taklif qilamiz',
      dateLabel: 'Toʻy sanasi',
      date: '12 Sentyabr, 2026',
      time: '17:00 da',
      venueLabel: 'Manzil',
      venue: 'Navruz toʻyxonasi',
      city: 'Toshkent shahri',
    },
    calendar: {
      eyebrow: 'Sanani belgilang',
      title: 'Sentyabr 2026',
      note: 'Sizni shu kuni koʻrishdan baxtiyor boʻlamiz',
      weekdays: ['Du', 'Se', 'Cho', 'Pa', 'Ju', 'Sha', 'Ya'],
      months: [
        'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun',
        'Iyul', 'Avgust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr',
      ],
      countdownLabel: 'Bayramgacha qoldi',
      days: 'kun',
      hours: 'soat',
      minutes: 'daqiqa',
      seconds: 'soniya',
    },
    location: {
      eyebrow: 'Bizni qidiring',
      title: 'Toʻy manzili',
      venue: 'Navruz toʻyxonasi',
      address: 'Amir Temur shoh koʻchasi 21, Toshkent',
      time: 'Marosim 17:00 da boshlanadi',
      mapButton: 'Xaritada koʻrish',
      closing: 'Sizni kutib qolamiz',
      signature: 'Mehr bilan, Jasur va Madina',
    },
    footer: {
      madeWith: 'Sevgi bilan tayyorlandi',
    },
  },

  ru: {
    envelope: {
      hint: 'Нажмите на печать, чтобы открыть приглашение',
      seal: 'Открыть',
      to: 'Дорогой гость',
    },
    hero: {
      eyebrow: 'Приглашение',
      together: 'вступают в брак',
      and: 'и',
      groom: 'Жасур',
      bride: 'Мадина',
      intro:
        'Приглашаем вас разделить с нами самый счастливый день нашей жизни',
      dateLabel: 'Дата свадьбы',
      date: '12 сентября 2026',
      time: 'в 17:00',
      venueLabel: 'Место',
      venue: 'Ресторан «Навруз»',
      city: 'город Ташкент',
    },
    calendar: {
      eyebrow: 'Отметьте дату',
      title: 'Сентябрь 2026',
      note: 'Будем счастливы видеть вас в этот день',
      weekdays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      months: [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
      ],
      countdownLabel: 'До торжества осталось',
      days: 'дней',
      hours: 'часов',
      minutes: 'минут',
      seconds: 'секунд',
    },
    location: {
      eyebrow: 'Как нас найти',
      title: 'Место проведения',
      venue: 'Ресторан «Навруз»',
      address: 'проспект Амира Темура 21, Ташкент',
      time: 'Церемония начнётся в 17:00',
      mapButton: 'Открыть на карте',
      closing: 'Будем ждать вас',
      signature: 'С любовью, Жасур и Мадина',
    },
    footer: {
      madeWith: 'Сделано с любовью',
    },
  },

  en: {
    envelope: {
      hint: 'Tap the seal to open your invitation',
      seal: 'Open',
      to: 'Dear guest',
    },
    hero: {
      eyebrow: 'Invitation',
      together: 'are getting married',
      and: '&',
      groom: 'Jasur',
      bride: 'Madina',
      intro:
        'We joyfully invite you to share the happiest day of our lives with us',
      dateLabel: 'Wedding date',
      date: 'September 12, 2026',
      time: 'at 5:00 PM',
      venueLabel: 'Venue',
      venue: 'Navruz Banquet Hall',
      city: 'Tashkent',
    },
    calendar: {
      eyebrow: 'Save the date',
      title: 'September 2026',
      note: 'We would be delighted to see you on this day',
      weekdays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      months: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
      ],
      countdownLabel: 'Countdown to the celebration',
      days: 'days',
      hours: 'hours',
      minutes: 'minutes',
      seconds: 'seconds',
    },
    location: {
      eyebrow: 'Find us',
      title: 'The venue',
      venue: 'Navruz Banquet Hall',
      address: '21 Amir Temur Avenue, Tashkent',
      time: 'The ceremony begins at 5:00 PM',
      mapButton: 'Open in maps',
      closing: 'We will be waiting for you',
      signature: 'With love, Jasur & Madina',
    },
    footer: {
      madeWith: 'Made with love',
    },
  },
}

// Shared, language-independent event facts.
export const EVENT = {
  // Wedding day, used by the calendar highlight and the countdown.
  date: new Date('2026-09-12T17:00:00'),
  year: 2026,
  monthIndex: 8, // September (0-based)
  day: 12,
  mapEmbed:
    'https://www.google.com/maps?q=Amir%20Temur%20Avenue%2021%2C%20Tashkent&output=embed',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Amir+Temur+Avenue+21+Tashkent',
}
