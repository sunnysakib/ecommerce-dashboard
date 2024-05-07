/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      'sm': "640px",
      // => @media (min-width: 640px) { ... } tablet

      'md': "768px",
      
      'lg': "912px",
      // => @media (min-width: 912px) { ... } laptop

      'xl': "1170px",
      // => @media (min-width: 1170px) { ... } xl
      '2xl': "1536px",
      // => @media (min-width: 1536px) { ... } desktoplg
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00B207",
          Green: "#84D187",
          warning: "#EA4B48",
          "hard-primary": "#2C742F",
          danger: "#FF8A00",
          "gray-primary": "#1A1A1A",
        },
      },
      "light",
      "dark",
      "cupcake",
    ],
  },
};
