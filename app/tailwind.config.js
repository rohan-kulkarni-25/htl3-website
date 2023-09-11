/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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