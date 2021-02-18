// Please do not use the array form (like ['tailwindcss', 'postcss-preset-env'])
// it will create an unexpected error: Invalid PostCSS Plugin found: [0]

module.exports = {
  plugins: {
    // https://github.com/tw-in-js/twind
    // tailwindcss: {},
    ...(process.env.NODE_ENV === 'production' && {
      'postcss-flexbugs-fixes': {},
      'postcss-preset-env': {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        /* use stage 3 features + css nesting rules */
        stage: 3,
        features: {
          'nesting-rules': true,
        },
      },
    }),
  },
}
