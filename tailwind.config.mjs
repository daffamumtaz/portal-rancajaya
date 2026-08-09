import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // TRISTAN Design Tokens — Primary (Forest Green)
        primary: {
          50:  '#EEF4F0',
          100: '#DCE9E0',
          200: '#B8D3C1',
          300: '#8FB89D',
          400: '#5C9575',
          500: '#2F7A5E',
          600: '#1F5E45',
          700: '#1B4D3E',  // Main brand
          800: '#123328',
          900: '#0D251D',
        },
        // Gold accent
        gold: {
          50:  '#FBF6E7',
          100: '#F3E7C9',
          300: '#DDBB6E',
          500: '#C89B3C',  // Main gold CTA
          600: '#A87D28',
          700: '#8A651E',
        },
        // Neutral tones
        ink:   '#1A231E',
        muted: '#63706A',
        paper: '#F2F1EC',
        line:  '#E4E7E1',
      },
      fontFamily: {
        display: ['Lexend', 'sans-serif'],
        body:    ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        'xl':  '12px',
        'lg':  '10px',
        'md':  '8px',
        'pill': '999px',
      },
    },
  },
  plugins: [
    typography,
  ],
};
