/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: "#8694ff",
      },
      backgroundImage: {
        sectionImage: "url('src/assets/mountains.png')",
      },
    },
  },
  plugins: [],
};
