/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:
      {
        'gradients': "url('/img/bg2.svg')"
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      justiceLeague: ["JUSTICE LEAGUE", "cursive"],
    },
  },
  plugins: [],
}