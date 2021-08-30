module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				"landing-page": "url('/images/desktop/landingPage-80.jpg')",
				"landing-page-mobile": "url('/images/mobile/landingPage-mobile.jpg')",
				"tile-background": "url('/images/tilesop10.png')",
				emblem: "url('/images/emblem.svg')",
			}),
			colors: {
				title: "#FFD41A",
				nav: "#94AB76",
				accent: "#c42e15",
				primary: "#282B1B",
				secondary: "#525548",
				tertiary: "#E2F4D1",
			},
			fontFamily: {
				"noto-sans": "Noto Sans",
				lato: "Lato",
				"finger-paint": "Finger Paint",
			},
			fontSize: {
				"10xl": "10rem",
				"11xl": "12rem",
			},
			width: {
				"40vw": "40vw",
			},
			height: {
				"30rem": "30rem",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
