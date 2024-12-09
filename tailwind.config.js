/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens:{
        '3xl' : ''
      },
      colors:{
        "border-clara" : "#E3E3E3",
        "icon" : "#252525",
        "fundo" : "#F6F5F5"
      }
    },
  },
  plugins: [],
}

