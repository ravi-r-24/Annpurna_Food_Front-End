/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "portrait-mobile": "480px",
        mobile: "640px",
        "portrait-tablet": "768px",
        tablet: "1024px",
        laptop: "1366px",
        desktop: "1920px",
      },
      boxShadow: {
        slate: "-2px 2px 5px 2px rgb(226 232 240)",
      },
      fontFamily: {
        "nunito-sans": ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
