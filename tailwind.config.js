/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        'grad': 'linear-gradient(90deg, #48078f, #004fd6);',
        'cart': 'linear-gradient(220deg, #8910a705 0%, #4349c514 100%)',
        'hovergrad': 'linear-gradient(220deg, #4349c5 0%, #b113d8 100%)'
      },
      fontFamily: {
        open: ['Open sans', 'sans-serif'],
        mont: ['Montserrat', 'sans-serif'],
        exo: ["'Exo 2'", 'sans-serif'],
      },
      backgroundColor: {
        'opacity': '#fff2'
      },
      borderColor: {
        'opacity': 'rgb(243 244 246 / 32%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


