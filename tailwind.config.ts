import type { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // single-theme "cream world" — see scratchpad/redesign mockup
        cream: '#FFFCE4', // page background
        ink: '#0E100F', // primary text / borders
        muted: '#767D73', // secondary text
        orange: '#FF8709', // CTA hover
        pink: '#FEC5FB', // accent (reserved)
        blue: '#2B6BFF', // focus ring / accent
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
