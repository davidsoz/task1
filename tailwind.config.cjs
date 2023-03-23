/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			height: {
				"280": "280px",
				"560": "560px",
			},
			width: {
				"928": "928px",
				"880": "880px",
			},
		},
		fontFamily: {
			'fira': ['firaGO', 'sans-serif'],
		},
		backgroundImage: {
			"slider1": "url(./src/aseets/sliders/Photo.png)",
			"slider2": "url(./src/aseets/sliders/Photo 14.png)",
			"slider3": "url(./src/aseets/sliders/Photo 15.png)",
			"slider4": "url(./src/aseets/sliders/Photo 16.png)",
		}
	},
	plugins: [],
}
