/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: '#07241B',
          900: '#0F4C3A', // Dominan Modern Emerald PPBH
          800: '#135241',
          700: '#1B634E',
          600: '#237860',
          500: '#2E9377',
          100: '#E6F4F0',
          50: '#F2F9F7',
        },
        gold: {
          300: '#F5DE8A',
          400: '#F2C94C',
          500: '#D4AF37', // Luxury Gold
          600: '#B89220',
        },
        slate: {
          850: '#131C2E',
        },
        light: {
          bg: '#FAFAFA',
          card: '#FFFFFF',
          soft: '#F3F6F4',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Plus Jakarta Sans', 'Merriweather', 'serif'],
        arabic: ['Amiri', 'serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 25px -5px rgba(212, 175, 55, 0.3)',
        'glow-emerald': '0 0 25px -5px rgba(15, 76, 58, 0.25)',
        'glass': '0 8px 32px 0 rgba(15, 76, 58, 0.08)',
      }
    },
  },
  plugins: [],
};
