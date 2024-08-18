/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-mode': '#e4d5b7',
        'light-mode': '#303030',
        'dark': '#5A5339',
        'light': '#e2c311'
      }
    },
  },
  plugins: [],
};
