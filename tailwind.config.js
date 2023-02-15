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
			fontFamily: {
				sans: ['Outfit', ...defaultTheme.fontFamily.sans],
			},
			screens: {
				xs: '530px',
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
			  }
		},
	},
	daisyui: {
		// darkTheme: 'dark',
		prefix: 'ds-',
		themes: [
			{
				light: {
					...daisyThemes['[data-theme=winter]'],
					primary: '#017d3f',
					'primary-focus': '#2E5CE6',
					'primary-content': '#D6E4FF',
					accent: '#F9F2EA',
					success: '#46BAAD',
					error: '#FF7575',
					'--navbar-padding': defaultTheme.spacing['1'],
				},
				dark: {
					...daisyThemes['[data-theme=night]'],
					'--navbar-padding': defaultTheme.spacing['1'],
				},
			},
		],
	},
}
