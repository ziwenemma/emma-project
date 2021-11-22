module.exports = {
  mode:'jit',
  purge: ['./pages/**/*,{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: theme => theme('colors'),
    textColor: {
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    },
    extend: {
      backgroundImage:(theme)=>({
        'back-img':'url("/bg.png")',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
