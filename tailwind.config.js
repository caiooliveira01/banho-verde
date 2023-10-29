/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: '#0E1211',
        platinum: '#E8EAE9',
        mindaro: '#C8E974',
        darkgreen: '#1A3129',
      }
    },
  },
  plugins: [],
}
