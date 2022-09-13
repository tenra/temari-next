/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: false, // 'media' or 'class'
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    options: {
      // https://purgecss.com/safelisting.html#patterns
      safelist: {
        standard: [/^bg-/, /^text-/],
      },
    },
  },
  content: [],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'washi-img': "url('../public/washi.jpg')",
      })
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  darkMode: 'class',
}
