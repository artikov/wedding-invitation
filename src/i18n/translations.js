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
			invited: "SIZ TAKLIF QILINDINGIZ",
			toWedding: "toʻyga",
			seal: "BOSING",
			intro:
				"Siz bu taklifnomani bejizga olmadingiz! Biz uchun shu alohida kunda yoningizda boʻlishingizni juda istaymiz!",
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
				address: "Al-Xorazmiy koʻchasi 5, Urganch",
			},
			wedding: {
				label: "Toʻy kuni",
				date: "12 Sentyabr 2026",
				time: "17:00 da",
				venue: "Navruz toʻyxonasi",
				address: "Amir Temur shoh koʻchasi 21, Toshkent",
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
			monthLabel: "Bizning sentyabr",
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
		wishes: {
			title: "Tilaklar",
			items: [
				"Agar orzularimizni roʻyobga chiqarishga yordam bersangiz – tilaklaringizni konvertda taqdim etsangiz – minnatdor boʻlamiz.",
				"Bayramimiz 18+ formatida, shuning uchun farzandlaringiz kim bilan qolishini oldindan rejalashtirib qoʻyishingizni soʻraymiz.",
				"Bayramimiz uchun telegram-chat yaratdik. U yerda qoʻshimcha maʼlumot olishingiz hamda surat va videolarni ulashishingiz mumkin.",
			],
			joinLabel: "Qoʻshilish",
		},
		organizer: {
			text: "Toʻy kuni juda hayajonlanamiz, shuning uchun barcha savollarni toʻy tashkilotchimiz Olgaga ishonib topshirdik.",
			role: "Toʻy tashkilotchisi",
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
				address: "улица Аль-Хорезми 5, Ургенч",
			},
			wedding: {
				label: "День свадьбы",
				date: "12 сентября 2026",
				time: "в 17:00",
				venue: "Ресторан «Навруз»",
				address: "проспект Амира Темура 21, Ташкент",
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
			monthLabel: "Наш сентябрь",
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
		wishes: {
			title: "Пожелания",
			items: [
				"Мы будем признательны, если Вы поможете осуществить наши мечты, подарив Ваши пожелания в конверте.",
				"Наш праздник имеет формат 18+, поэтому просим заранее предусмотреть, с кем останутся ваши детки, пока вы будете отдыхать на празднике.",
				"Мы создали телеграм-чат нашего праздника, где можно узнать дополнительную информацию, а также поделиться фотографиями и видео в день свадьбы и после.",
			],
			joinLabel: "Вступить",
		},
		organizer: {
			text: "Мы будем очень волноваться на свадьбе, поэтому все вопросы доверили в руки нашего свадебного организатора Ольги.",
			role: "Свадебный организатор",
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
				address: "5 Al-Khorezmi Street, Urgench",
			},
			wedding: {
				label: "Wedding Day",
				date: "September 12, 2026",
				time: "at 5:00 PM",
				venue: "Navruz Banquet Hall",
				address: "21 Amir Temur Avenue, Tashkent",
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
			monthLabel: "Our September",
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
		wishes: {
			title: "Wishes",
			items: [
				"We would be grateful if you helped make our dreams come true by giving your wishes in an envelope.",
				"Our celebration is an 18+ event, so please arrange in advance who will look after your little ones while you enjoy the party.",
				"We've created a Telegram chat for our celebration where you can find extra details and share photos and videos on the wedding day and after.",
			],
			joinLabel: "Join",
		},
		organizer: {
			text: "We'll be quite nervous on the wedding day, so we've entrusted all questions to our wedding planner, Olga.",
			role: "Wedding planner",
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
			"https://www.google.com/maps?q=Al-Khorezmi%20Street%205%2C%20Urgench&output=embed",
		mapLink:
			"https://www.google.com/maps/search/?api=1&query=Al-Khorezmi+Street+5+Urgench",
	},
	wedding: {
		key: "wedding",
		// Wedding day — Tashkent. Drives the calendar highlight and countdown.
		date: new Date("2026-09-12T17:00:00"),
		year: 2026,
		monthIndex: 8, // September (0-based)
		day: 12,
		mapEmbed:
			"https://www.google.com/maps?q=Amir%20Temur%20Avenue%2021%2C%20Tashkent&output=embed",
		mapLink:
			"https://www.google.com/maps/search/?api=1&query=Amir+Temur+Avenue+21+Tashkent",
	},
};

export const EVENT_ORDER = ["party", "wedding"];

// External links (placeholders — replace with the real chat / contacts).
export const CONTACTS = {
	telegramChat: "https://t.me/",
	telegram: "https://t.me/",
	whatsapp: "https://wa.me/",
};
