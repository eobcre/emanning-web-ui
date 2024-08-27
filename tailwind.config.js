/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: { max: '640px' }, // isMobile
        tablet: { min: '641px', max: '1024px' }, // isTablet
        desktop: { min: '1025px', max: '1823px' }, // isDesktop
      },
      colors: {
        'dark-mode': '#e4d5b7',
        'light-mode': '#303030',
        dark: '#5a5339',
        light: '#e2c311',
      },
    },
  },
  plugins: [],
};
