/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: '#0B2920',
          900: '#144033',
          800: '#1B4D3E', // Dominan Naturalis PPBH
          700: '#266C57',
          600: '#328B71',
          500: '#40AB8C',
        },
        sage: {
          100: '#EAEFE9',
          200: '#D5DFD3',
          300: '#B5C7B3',
          400: '#8FBC8F',
          500: '#6C9F6C',
        },
        gold: {
          300: '#FBE8A6',
          400: '#F4D068',
          500: '#D4AF37', // Gold Accent
          600: '#B89020',
        },
        cream: {
          50: '#FDFCF7',
          100: '#FAF6F0',
          200: '#F4ECE1',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        arabic: ['Amiri', 'Traditional Arabic', 'serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      }
    },
  },
  plugins: [],
};
