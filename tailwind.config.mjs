/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#1F1839",
        primary: "#B5B5FF",
        secondary: "#C8C8FF",
        tetriary: "#EAEAEA",
      },
    },
  },
  plugins: [],
};
