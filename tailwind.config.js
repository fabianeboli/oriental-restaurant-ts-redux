module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: theme => ({
			 	'landing-page': "url('/images/landingPage.jpg')",
				'landing-page-w-background': "url('/images/landingPageWBackground.jpg')",
				'tile-background': "url('/images/tile_background.png')",
				'emblem': "url('/images/emblem.svg')"
			}),
			colors: {
				'title': '#FFD41A',
				'nav': '#94AB76',
				'accent': '#c42e15',
				'primary': '#282B1B',
				'secondary': '#525548',
				'tertiary': "#E2F4D1"
			},
			fontFamily: {
				'noto-sans': "Noto Sans",
				"lato": "Lato",
				"finger-paint": "Finger Paint"
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
