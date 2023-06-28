/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Helvetica: ["Helvetica", "sans-serif"],
        Avenir: ["Avenir", "sans-serif"],
      },
      colors: {
        icons: "#7F7F7F",
        buttonRed: "#DB4437",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
