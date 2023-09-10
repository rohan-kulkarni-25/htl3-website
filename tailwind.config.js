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
        'gradients': "url('./public/bg.png)"
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      justiceLeague: ["justiceLeague", "cursive"],
    },
  },
  plugins: [],
}