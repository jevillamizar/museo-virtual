/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        esmeralda: '#50C878',
        bosque: '#228B22',
        gray150: '#f1f5f9',
        naranjaquemado: '#FF4500',
      },
    },
  },
  plugins: [],
}

