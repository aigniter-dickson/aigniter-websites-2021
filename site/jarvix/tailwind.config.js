const tailwindColors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('./design-tokens/colors.json')

module.exports = {
  purge: ['{app,pages}/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '0.5px': '0.5px',
      },
      borderRadius: {
        DEFAULT: defaultTheme.borderRadius.lg,
      },
      colors: {
        ...tailwindColors,
        ...colors,
        onSurface: tailwindColors.blueGray[700],
      },
      // screens: {
      //   // xs: '384px',
      // },
      width: {
        layout: defaultTheme.width.full,
      },
      maxWidth: {
        layout: defaultTheme.screens.lg,
      },
      padding: {
        layout: defaultTheme.spacing[8] || defaultTheme.spacing['8'],
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ['first', 'last'],
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')],
}
