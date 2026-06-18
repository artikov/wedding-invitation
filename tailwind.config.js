/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				// Forest green — envelope, arch fill, deep accents.
				forest: "#33503f",
				forestdark: "#263d2f",
				forestlight: "#4a6b57",
				// Warm paper tones.
				ivory: "#faf6ec",
				cream: "#f3ecdd",
				paper: "#f6f1e6",
				// Rose / blush accents — borders, hearts, numerals.
				rose: "#d8b878",
				rosedark: "#876338",
				blush: "#b0894f",
				// Gilded wax seal.
				gold: "#b0894f",
				golddark: "#876338",
				goldlight: "#d8b878",
				// Text.
				ink: "#3a4a40",
			},
			fontFamily: {
				// Cyrillic-capable refined serif.
				serif: ['"Cormorant Garamond"', "serif"],
				// Latin via Great Vibes, Cyrillic falls back to Marck Script.
				script: ['"Great Vibes"', '"Marck Script"', "cursive"],
				// Clean sans with Cyrillic support.
				sans: ['"Montserrat"', "system-ui", "sans-serif"],
			},
			keyframes: {
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
				shimmer: {
					"0%, 100%": { opacity: "0.45" },
					"50%": { opacity: "1" },
				},
				heartbeat: {
					"0%, 100%": { transform: "scale(1)" },
					"15%": { transform: "scale(1.18)" },
					"30%": { transform: "scale(1)" },
					"45%": { transform: "scale(1.12)" },
				},
				drawIn: {
					from: { strokeDashoffset: "1" },
					to: { strokeDashoffset: "0" },
				},
			},
			animation: {
				float: "float 6s ease-in-out infinite",
				shimmer: "shimmer 4s ease-in-out infinite",
				heartbeat: "heartbeat 2.4s ease-in-out infinite",
			},
		},
	},
	plugins: [],
};
