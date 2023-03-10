/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontSize: {
				"h1": ['6rem', {
					fontWeight: '700',
					lineHeight: '7.2rem'
				}],
				"h2": ['4.8rem', {
					fontWeight: '700',
				}],
				"h3": ['3rem', {
					fontWeight: '700'
				}],
				"medium": ['1.6rem', {
					fontFamily: 'Quicksand'
				}],
				"medium-large": ['1.8rem', {
					fontFamily: 'Quicksand'
				}],
				"large": ['2.4rem', {
					fontFamily: 'Quicksand'
				}],
				"nav-mobile": ['2.8rem', {
					fontFamily: 'Quicksand',
					fontWeight: '700'
				}],
			},
			colors: {
				'red-100': '#F20E0E',
				'black-100': '#0A0903',
				'gray-100': '#EEEEEE',
			},
			spacing: {
				32: '3.2rem',
				40: '4rem',
				96: '9.6rem',
				80: '8rem',
				16: '1.6rem',
				48: '4.8rem',
				72: '7.2rem',
				8: '0.8rem',
				24: '2.4rem',
				20: '2rem',
				64: '6.4rem',
				56: '5.6rem',
				100: '10rem',
				12: '1.2rem',
			}
		},
	},
	plugins: [],
}
