module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-blue": "#5ec1e8",
        "theme-black": "#063239",
        "theme-green": "#068f76",
        "theme-red": "#ff6954",
        "theme-yellow": "#ffea8b",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
