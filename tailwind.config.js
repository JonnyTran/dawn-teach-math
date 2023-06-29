/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,html}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',  // needed for flowbite-vue
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],  // load Inter font from CDN
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}