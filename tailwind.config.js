const defaultTheme = require('tailwindcss/defaultTheme')
const daisyThemes = require('daisyui/src/colors/themes')
const { fontFamily } = require('tailwindcss/defaultTheme')


module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,ts,jsx,tsx}',
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./dashboard/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	plugins: [require('daisyui')],
	theme: {
		container: {
			center: true,
		},
		extend: {
			backgroundImage: {
				"gradient-to-b":
					"linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);",
			},
			fontFamily: {
				sans: ['Outfit', ...defaultTheme.fontFamily.sans],
			},
			screens: {
				xs: '530px',
			},
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
			},
			colors: {
				cusgray: {
					DEFAULT: "#F2F5F6",
				},
				cusblack: {
					DEFAULT: "#383838",
				},
			},
			transitionProperty: {
				spacing: 'margin, padding',
				dropdown: 'opacity, transform'
			},
			animation: {
				beat: 'beat 1s ease-out infinite'
			},
			keyframes: {
				beat: {
					'0%, 100%': { transform: 'scale(1)' },
					'25%': { transform: 'scale(1.2)' }
				}
			},
			minHeight: {
				main: 'calc(100vh - 228px)'
			},
			fontFamily: {
				sans: ['var(--font-inter)', ...fontFamily.sans]
			},
			gridTemplateColumns: {
				'16': 'repeat(16, minmax(0, 1fr))',
			},
			gridColumn: {
				'span-13': 'span 13 / span 13',
				'span-14': 'span 14 / span 14',
				'span-15': 'span 15 / span 15',

			}

		},
	},
	daisyui: {
		// darkTheme: 'dark',
		prefix: 'ds-',
		themes: [
			{
				dark: {
					...daisyThemes['[data-theme=winter]'],
					primary: '#017d3f',
					'primary-focus': '#2E5CE6',
					'primary-content': '#D6E4FF',
					accent: '#F9F2EA',
					success: '#46BAAD',
					error: '#FF7575',
					'--navbar-padding': defaultTheme.spacing['1'],
				},
				light: {
					...daisyThemes['[data-theme=night]'],
					'--navbar-padding': defaultTheme.spacing['1'],
				},
			},
		],
	},
}
