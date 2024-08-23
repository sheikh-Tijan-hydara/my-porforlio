/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,vue}", // Include HTML, JS, TS, and Vue files in src folder
    "./app.vue", // Specify app.vue directly
    "./components/**/*.{vue,js,ts,jsx,tsx}", // Corrected path to components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
