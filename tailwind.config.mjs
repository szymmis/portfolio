/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#1F1839",
        "background-dark": "#1A1430",
        primary: "#B5B5FF",
        secondary: "#C8C8FF",
        tetriary: "#E0E0E0",
      },
      screens: {
        "pointer-fine": {
          raw: "(pointer: fine)",
        },
      },
      fontFamily: {
        sans: ["Fira Sans", "sans-serif"],
        serif: ["Bree Serif", "serif"],
      },
    },
  },
  plugins: [],
};
