/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0199FE",
        secondary: "rgba(0, 0, 0, 0.85)",
        theme_blue: "#0199FE",
        light_blue: "#F3F7FF",
        dark_blue: "#1E1566",
        mid_blue: "#0568E5",
      },
    },
  },
  plugins: [],
};
