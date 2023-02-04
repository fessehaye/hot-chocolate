/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        chocolate: {
          earth: "#6C3F31",
          bole: "#784A36",
          milk: "#86563C",
          white: "#EEE6D8",
        },
      },
      fontFamily: {
        fancy: "'La Belle Aurore', cursive",
      },
    },
  },
  plugins: [],
};
