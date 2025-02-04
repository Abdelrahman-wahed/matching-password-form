/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow:{
        'light':'4px 4px 13px 0px #777'
      }
    },
  },
  plugins: [],
};
