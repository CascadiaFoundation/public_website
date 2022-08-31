/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      colors: {
        dark: '#222222',
        'main-900': '#4267B3',
        'white-100': '#E9EBEE',
        'white-200': '#F6F7F8',
        'black-500': '#616771',
        'black-900': '#18191A',
      },
      backgroundImage: {
        'home-background': "url('/images/header/home.png')",
        'learning-background': "url('/images/header/learning.png')",
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
      },
      gridTemplateAreas: {
        home: ['image image title title', 'image content content content'],
      },
      gridTemplateColumns: {
        home: 'auto auto auto auto',
      },
      gridTemplateRows: {
        home: 'auto auto auto auto',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
};
