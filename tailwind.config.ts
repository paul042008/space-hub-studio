import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F5F0E8',
        primary: '#4A3728',
        secondary: '#7B5B3E',
        accent: '#C49A6C',
        border: '#E2D5C0',
        'beige-light': '#FEF9F0',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;