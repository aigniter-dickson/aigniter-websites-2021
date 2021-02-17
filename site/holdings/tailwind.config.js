const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        xs: '384px',
      },
      colors: {
        ...colors,
        ...require('./constants/colors.json'),
      },
    },
  },
  variants: {},
  plugins: [],
}
