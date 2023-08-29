/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      ts: "601px",
      ds: "1024px",
    },
  },
  plugins: [],
};
