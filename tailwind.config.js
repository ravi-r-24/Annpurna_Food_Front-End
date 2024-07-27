/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "small-mobile": "480px",
        mobile: "640px",
        "small-tablet": "768px",
        tablet: "1024px",
        laptop: "1369px",
        desktop: "1920px",
      },
    },
  },
  plugins: [],
};
