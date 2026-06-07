/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lato:    ['Lato', 'sans-serif'],
      },
      colors: {
        // Colores institucionales Unicauca (Manual de Identidad Visual V2024-1)
        'unicauca-azul':        '#001282',
        'unicauca-azulhover':   '#002A9E',
        'unicauca-rojo':        '#AD0000',
        'unicauca-rojohover':   '#8A0000',
        'unicauca-negro':       '#000000',
        'unicauca-blancoRoto':  '#F8F6F0',
        'unicauca-grisClaro':   '#F1F5F9',
        'unicauca-grisMedio':   '#6B7280',
        'unicauca-grisOscuro':  '#1F2937',
        // Complementarios
        'unicauca-morado':      '#4C19AF',
        'unicauca-azulRey':     '#002A9E',
        'unicauca-cian':        '#16A8E1',
        'unicauca-verdeAgua':   '#04B2B5',
        'unicauca-verde':       '#249337',
        'unicauca-verdeLima':   '#8CBD22',
        'unicauca-naranja':     '#EC6C1F',
        'unicauca-amarillo':    '#F8AE15',
      },
    },
  },
  plugins: [],
}

