/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
			josefin: ['Josefin Sans', 'sans-serif'],
			serif: ['serif'],
		},
		
		extend: {
			colors: {
				morning: '#cffafe',
				afternoon: '#FFFFFF',
				evening: '#2B2E4A',
				happy: '#fde047',
				relaxed: '#a7f3d0',
				fearful: '#064e3b',
				astonished: '#7e22ce',
				sad: '#1e3a8a',
				frustrated: '#1a2e05',
				angry: '#ef4444',
				excited: '#fb923c',
				fallback: '#ECE9E6',
			},
			animation: {
				'spin-slow': 'spin 10s linear infinite',
				'bounce-slow': 'bounce 2s infinite',
				'pulse-slow': 'pulse 5s infinite',
				'none': 'none',
		},
		},
	},
	plugins: [],
};

// background: linear-gradient(to bottom, #87CEEB, #fff);
/* background: linear-gradient(to bottom, #FF7E5F, #2B2E4A); */
