/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4ade80', // Verde claro
          DEFAULT: '#16a34a', // Verde principal (más oscuro para mejor contraste)
          dark: '#15803d', // Verde oscuro
        },
        secondary: {
          light: '#60a5fa', // Azul claro
          DEFAULT: '#2563eb', // Azul principal (más oscuro para mejor contraste)
          dark: '#1d4ed8', // Azul oscuro
        },
        text: {
          primary: '#111827', // Texto principal oscuro
          secondary: '#374151', // Texto secundario
          light: '#6B7280', // Texto claro
          white: '#FFFFFF', // Texto blanco
        },
        background: {
          light: '#F9FAFB', // Fondo claro
          white: '#FFFFFF', // Fondo blanco
          dark: '#1F2937', // Fondo oscuro
          overlay: 'rgba(0, 0, 0, 0.5)', // Overlay para imágenes
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.16' }],
        '6xl': ['3.75rem', { lineHeight: '1.15' }],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
