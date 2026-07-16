import type { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm Porcelain + Editorial Punch, selected in the approved mockup pass.
        cream: '#FBFAF6', // page background
        ink: '#0E100F', // primary text / borders
        muted: '#767D73', // secondary text
        orange: '#FF4D1F', // hero accent
        pink: '#F783AC',
        blue: '#91A7FF',
        coral: '#FF8787',
        yellow: '#FFD166',
        mint: '#80D8B3',
      },
      fontFamily: {
        sans: ['"General Sans"', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"Space Mono"', 'Menlo', 'monospace'],
      },
      screens: {
        // desktop-first: layouts collapse to single column below this
        wide: '861px',
      },
    },
  },
  plugins: [],
} satisfies Config;
