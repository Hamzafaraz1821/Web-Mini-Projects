module.exports = {
  mode: "jit",
  content: ["**/*.{html, js}", "**/**/*.{html, js}", "./index.html"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        light_blue: { 900: "#0a549c" },
        black: { 900: "#000001", "900_01": "#000000" },
        gray: { 700: "#676767", "500_01": "#a9a8a8" },
        blue_gray: { 100: "#d9d9d9" },
        green: { 400: "#4cca79" },
      },
      boxShadow: {},
      fontFamily: { balsamiqsans: "Balsamiq Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
