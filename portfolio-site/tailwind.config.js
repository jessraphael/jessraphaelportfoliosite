const { callbackify } = require("util");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "h-almost": "calc(100vh - 84px)",
      },
      fontFamily: {
        nunito: "'Nunito Sans', sans-serif",
      },
      colors: {
        dark: {
          DEFAULT: "#000000",
        },
      },
    },
  },
  plugins: [],
};
