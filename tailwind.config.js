/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.{html,js}"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primaryColor: '#010a5e',
        primaryColorLight: '#010d78',
        secondaryColor: '#FFCC00',
        paragraphColor: '#c0c0c0',
        whiteColor: '#fff',
        blackColor: '#000',
        greenColor: '#007936', // Added missing '#' for green color
        redColor: '#cc3433',
        darkColor: '#000',
        darkColorLight: '#171717',
      },
      keyframes:{
        move:{
          '50%': {transform: 'translateY(-1rem)'}
        }
      },
      animation:{
        'movingY': 'move 2s linear infinite'
      }
    },
    fontFamily:{
      oswald:['oswald', 'sans-serif'],
      dmsans:['DM Sans', 'sans-serif'],
      
    }
  },
  plugins: [],
}
