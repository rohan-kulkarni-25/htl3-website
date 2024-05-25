/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      // xl: { max: "1350px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1700px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "900px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "750px" },
      //
    },
    extend: {
      height: { 128: "32rem", 160: "40rem", 180: "45rem", 200: "50rem" },
      margin: { 128: "32rem", 160: "40rem", 180: "45rem", 200: "50rem" },
      backgroundImage: {
        gradient:
          "url('https://res.cloudinary.com/dw58xmffd/image/upload/v1706289687/hacktheleague/bg2_obmnbd.svg')",
        frame:
          "url('https://res.cloudinary.com/dw58xmffd/image/upload/v1706289693/hacktheleague/Frame26_hauujp.svg')",
        countdown:
          "url('https://res.cloudinary.com/dw58xmffd/image/upload/v1716086262/Group_1261154069_xgkbpo.png')",
          agend:"url('https://res.cloudinary.com/dw58xmffd/image/upload/v1716086416/Rectangle_40013_aejicu.png')"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        justiceLeague: ["JUSTICE LEAGUE", "cursive"],
        mokoto: ["Mokoto", "cursive"],
      },
    },
    // fontFamily: {
    //   poppins: ['Poppins', 'sans-serif'],
    //   justiceLeague: ["JUSTICE LEAGUE", "cursive"],
    // },
  },
  plugins: [],
};
