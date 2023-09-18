/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1350px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '750px' },
      //
    },
    extend: {
      backgroundImage:
      {
        'gradients': "url('./assets/compressed/bg2.svg')",
        'frame': "url('./assets/compressed/Frame25.svg')"
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      justiceLeague: ["JUSTICE LEAGUE", "cursive"],
    },
  },
  plugins: [],
}