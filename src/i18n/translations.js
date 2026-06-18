// All user-facing strings live here. No hardcoded copy anywhere in components.
// Languages: uz (default), ru, en.
//
// The celebration spans two events: the girls' party ("party") and the wedding
// day ("wedding"). Each language describes both under `events`.

export const LANGUAGES = [
	{ code: "uz", label: "O'zbekcha", short: "UZ" },
	{ code: "ru", label: "Русский", short: "RU" },
	{ code: "en", label: "English", short: "EN" },
];

export const DEFAULT_LANGUAGE = "uz";

export const translations = {
	uz: {
		envelope: {
			invited: "SIZ TO'YIMIZGA",
			toWedding: "taklif qilindingiz",
			seal: "BOSING",
			intro:
				"Siz bu taklifnomani bejizga olmadingiz! Biz uchun shu alohida kunda yonimizda boʻlishingizni juda istaymiz!",
		},
		names: {
			groom: "Oybek",
			bride: "Charos",
			connector: "va",
			intro: "Quvonchli xabarni yetkazishga oshiqamiz – biz turmush quramiz!",
		},
		events: {
			party: {
				label: "Qiz bazmi",
				date: "25 Iyun 2026",
				time: "19:00 da",
				venue: "Asr toʻyxonasi",
				address: "Urganch, Gurlan koʻchasi, 111",
			},
			wedding: {
				label: "Toʻy kuni",
				date: "26 Iyun 2026",
				time: "12:00 da",
				venue: "Shohjaxon toʻyxonasi",
				address: "Urganch, Alpomish ko'chasi, 4",
			},
		},
		guests: {
			title: "Aziz mehmonlar!",
			body1:
				"Sizni biz uchun eng baxtli kunni – oila boʻladigan kunimizni biz bilan birga nishonlashga taklif qilamiz.",
			body2:
				"Bu sehrli kunda biz bir-birimizga «Ha» deymiz va eng yaqin insonlar davrasida qalblarimizni bogʻlaymiz.",
		},
		calendar: {
			note: "Sizni shu kuni koʻrishdan baxtiyor boʻlamiz",
			monthLabel: "Bizning Iyun",
			weekdays: ["Du", "Se", "Cho", "Pa", "Ju", "Sha", "Ya"],
			months: [
				"Yanvar",
				"Fevral",
				"Mart",
				"Aprel",
				"May",
				"Iyun",
				"Iyul",
				"Avgust",
				"Sentyabr",
				"Oktyabr",
				"Noyabr",
				"Dekabr",
			],
		},
		venues: {
			eyebrow: "Bizni qidiring",
			title: "Tadbir manzillari",
			timePrefix: "Boshlanishi",
			mapButton: "Xaritada koʻrish",
		},
		quote: {
			text: "Hayot – goʻzal sayohat. Sevgidan boʻlmagan narsaga bebaho vaqtni sarflash – ahmoqlik.",
		},
		countdown: {
			title: "Biz «Ha» deymiz...",
			days: "kun",
			hours: "soat",
			minutes: "daqiqa",
			seconds: "soniya",
			closing: "Sizni kutib qolamiz",
			signature: "Mehr bilan, Oybek va Charos",
		},
		footer: {
			madeWith: "Sevgi bilan tayyorlandi",
		},
	},

	ru: {
		envelope: {
			invited: "ВЫ ПРИГЛАШЕНЫ",
			toWedding: "на свадьбу",
			seal: "НАЖМИТЕ",
			intro:
				"Вы не просто так получили это приглашение! В особенный для нас день мы очень хотим, чтобы вы были рядом!",
		},
		names: {
			groom: "Ойбек",
			bride: "Чарос",
			connector: "и",
			intro: "Спешим сообщить радостную новость – мы женимся!",
		},
		events: {
			party: {
				label: "Девичник",
				date: "25 июня 2026",
				time: "в 19:00",
				venue: "Ресторан «Аср»",
				address: "улица Гурленг 111, Ургенч",
			},
			wedding: {
				label: "День свадьбы",
				date: "26 июня 2026",
				time: "в 12:00",
				venue: "Ресторан «Щахжахан»",
				address: "улица Алпомиш 4, Ургенч",
			},
		},
		guests: {
			title: "Дорогие гости!",
			body1:
				"Мы приглашаем вас разделить с нами радостный день, в который мы станем семьёй!",
			body2:
				"В этот волшебный день мы скажем друг другу «Да» и соединим наши сердца и судьбы в окружении самых близких и родных людей.",
		},
		calendar: {
			note: "Будем счастливы видеть вас в этот день",
			monthLabel: "Наш Июнь",
			weekdays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
			months: [
				"Январь",
				"Февраль",
				"Март",
				"Апрель",
				"Май",
				"Июнь",
				"Июль",
				"Август",
				"Сентябрь",
				"Октябрь",
				"Ноябрь",
				"Декабрь",
			],
		},
		venues: {
			eyebrow: "Как нас найти",
			title: "Места проведения",
			timePrefix: "Начало",
			mapButton: "Открыть на карте",
		},
		quote: {
			text: "Жизнь – прекрасное путешествие. Глупо тратить бесценное время на то, что не про любовь.",
		},
		countdown: {
			title: "Мы скажем «Да» через...",
			days: "дней",
			hours: "часов",
			minutes: "минут",
			seconds: "секунд",
			closing: "Будем ждать вас",
			signature: "С любовью, Ойбек и Чарос",
		},
		footer: {
			madeWith: "Сделано с любовью",
		},
	},

	en: {
		envelope: {
			invited: "YOU ARE INVITED",
			toWedding: "to the wedding",
			seal: "PRESS",
			intro:
				"You did not receive this invitation by chance! On this special day, we truly want you by our side.",
		},
		names: {
			groom: "Oybek",
			bride: "Charos",
			connector: "&",
			intro: "We can't wait to share the joyful news – we're getting married!",
		},
		events: {
			party: {
				label: "Girls' Party",
				date: "June 25, 2026",
				time: "at 7:00 PM",
				venue: "Asr Banquet Hall",
				address: "111 Gurlen Street, Urgench",
			},
			wedding: {
				label: "Wedding Day",
				date: "June 26, 2026",
				time: "at 12:00 PM",
				venue: "Shojhahon Banquet Hall",
				address: "4 Alpomish Street, Urgench",
			},
		},
		guests: {
			title: "Dear guests!",
			body1:
				"We invite you to share with us the joyful day on which we will become a family.",
			body2:
				'On this magical day we will say "Yes" to each other and unite our hearts and destinies, surrounded by our nearest and dearest.',
		},
		calendar: {
			note: "We would be delighted to see you on this day",
			monthLabel: "Our June",
			weekdays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			months: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December",
			],
		},
		venues: {
			eyebrow: "Find us",
			title: "Event venues",
			timePrefix: "Starts",
			mapButton: "Open in maps",
		},
		quote: {
			text: "Life is a beautiful journey. It is foolish to waste precious time on anything that isn't about love.",
		},
		countdown: {
			title: 'We will say "Yes" in...',
			days: "days",
			hours: "hours",
			minutes: "minutes",
			seconds: "seconds",
			closing: "We will be waiting for you",
			signature: "With love, Oybek & Charos",
		},
		footer: {
			madeWith: "Made with love",
		},
	},
};

// Shared, language-independent event facts: the girls' party and the wedding.
export const EVENTS = {
	party: {
		key: "party",
		// Girls' party — Urgench.
		date: new Date("2026-06-25T19:00:00"),
		mapEmbed:
			"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d451.4439161046809!2d60.6083369313182!3d41.574272596484086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1781783978990!5m2!1sen!2s",
		mapLink:
			"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d451.4439161046809!2d60.6083369313182!3d41.574272596484086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1781783978990!5m2!1sen!2s",
	},
	wedding: {
		key: "wedding",
		// Wedding day — Tashkent. Drives the calendar highlight and countdown.
		date: new Date("2026-06-26T12:00:00"),
		year: 2026,
		monthIndex: 5, // September (0-based)
		day: 26,
		mapEmbed:
			"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d595.9934732748924!2d60.59920376590808!3d41.54067808643485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1781783794992!5m2!1sen!2s",
		mapLink:
			"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d595.9934732748924!2d60.59920376590808!3d41.54067808643485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1781783794992!5m2!1sen!2s",
	},
};

export const EVENT_ORDER = ["party", "wedding"];
