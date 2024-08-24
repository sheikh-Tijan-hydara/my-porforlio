/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,vue}", 
    "./app.vue", 
    "./components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-twice': 'bounce-twice 2s ease-in-out',
      },
      keyframes: {
        'bounce-twice': {
          '0%': { transform: 'translateY(-100%)' }, // Start off-screen from the top
          '30%': { transform: 'translateY(0)' }, // Drop to the final position
          '50%': { transform: 'translateY(-20px)' }, // First bounce up
          '70%': { transform: 'translateY(0)' }, // Settle down
          '90%': { transform: 'translateY(-10px)' }, // Smaller second bounce
          '100%': { transform: 'translateY(0)' }, // Final settle down
        },
      },
    },
  },
  plugins: [],
};
