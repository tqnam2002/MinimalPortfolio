/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/components/**/*.{html,jsx,js}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "serif"],
      },
    },
  },
  plugins: [],
};
