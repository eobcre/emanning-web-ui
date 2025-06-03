/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-mode': '#e4d5b7',
        'light-mode': '#303030',
        dark: '#5a5339',
        light: '#e2c311',
        yellow: '#ffce1b', // number index light mode
        olive: '#6a644c', // number index dark mode
      },
    },
  },
  plugins: [],
};
