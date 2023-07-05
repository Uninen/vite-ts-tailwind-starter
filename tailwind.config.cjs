/* eslint-env node */
// const defaultTheme = require('tailwindcss/defaultTheme')
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  // theme: {
  //   extend: {
  //     // here's how to extend fonts if needed
  //     fontFamily: {
  //       sans: [...defaultTheme.fontFamily.sans],
  //     },
  //   },
  // },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    iconsPlugin({
      // Collections: https://icones.js.org/
      collections: getIconCollections(['mdi']),
    }),
  ],
}
