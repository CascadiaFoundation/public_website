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
        background: '#F6F7F8',
        'main-900': '#4267B3',
        'secondary-100': '#E9EBEE',
        'secondary-200': '#F6F7F8',
        'primary-500': '#616771',
        'primary-900': '#18191A',
        'footer-text': '#B0B3B8',
      },
      backgroundImage: {
        'home-background': "url('/images/header/home.png')",
        'learning-background': "url('/images/header/learning.png')",
        'learn-background': "url('/images/header/learn-background.jpg')",
        'eco-background': "url('/images/header/eco-background.jpg')",
        'esg-background': "url('/images/header/esg-background.jpg')",
      },
      boxShadow: {
        cardShadow:
          '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        slideCardShadow: '0px 2px 5px 3px rgb(0 0 0 / 20%)',
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
