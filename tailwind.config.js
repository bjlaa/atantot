/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5758BB',
        primaryLight: '#e6e6f5',
        primaryDark: '#32337B',
        primaryBorder: 'rgba(73, 18, 115, 0.1)',
      },
      fontSize: {
        '2xs': '.625rem',
      },
    },
  },
  plugins: [],
}
