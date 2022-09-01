/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/js", "index.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [],
};
