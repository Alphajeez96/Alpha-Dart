const { borderRadius, spacing } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      borderRadius: {
        20: "1.25rem",
        ...borderRadius,
      },

      colors: {
        primary: {
          main: "#6956E5",
          black: "#23262F",
          grey: "#f9f9f9",
          dark: "#878787",
          variation1: "#828282",
          variation2: "#65676D",
          blue: "#1778B0",
          lightBlue: "#CEECFD",
          red: "#FFF8F8",
          darkRed: "#F85640",
          green: "#DCF3EB",
          darkGreen: "#13854E",
        },
      },

      spacing: {
        30: "30%",
        31: "32%",
        ...spacing,
      },
    },
  },
  plugins: [],
};
