/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],
	theme: {
		extend: {
			colors: {
				dark: '#1f1f1f',
				light: '#f5f5f5',
				accent: {
					green: '#00d09c',
					blue: '#3b82f6',
					amber: '#f59e0b'
				},
				muted: '#666666'
			},
			fontFamily: {
				mono: ['JetBrains Mono', 'monospace']
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
