import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Bases neutres minérales
        creme: {
          DEFAULT: 'rgb(var(--color-creme-powder-rgb, 250 247 242) / <alpha-value>)',
          light: '#FFFFFF',
          powder: 'rgb(var(--color-creme-powder-rgb, 250 247 242) / <alpha-value>)',
          alabaster: 'rgb(var(--color-creme-alabaster-rgb, 243 239 234) / <alpha-value>)',
          linen: '#EBE5DD',
          border: 'rgb(var(--color-creme-border-rgb, 228 221 212) / <alpha-value>)',
        },
        // Teintes chaudes principales
        terracotta: {
          light: 'rgb(var(--color-terracotta-light-rgb, 217 126 99) / <alpha-value>)',
          DEFAULT: 'rgb(var(--color-terracotta-rgb, 200 109 81) / <alpha-value>)',
          dark: 'rgb(var(--color-terracotta-dark-rgb, 184 92 66) / <alpha-value>)',
          soft: '#EAD7CF',
        },
        ocre: {
          light: 'rgb(var(--color-ocre-light-rgb, 230 174 110) / <alpha-value>)',
          DEFAULT: 'rgb(var(--color-ocre-rgb, 217 155 89) / <alpha-value>)',
          dark: '#C58643',
          soft: '#F4E5D3',
        },
        amber: {
          light: '#9E684F',
          DEFAULT: '#82533D',
          dark: '#5C3A2E',
          soft: '#DFD3CC',
        },
        // Typographie & Contrastes raffinés
        espresso: {
          DEFAULT: 'rgb(var(--color-espresso-rgb, 56 40 32) / <alpha-value>)',
          deep: 'rgb(var(--color-espresso-deep-rgb, 28 21 19) / <alpha-value>)',
          light: '#352925',
        },
        taupe: {
          DEFAULT: 'rgb(var(--color-taupe-rgb, 107 92 85) / <alpha-value>)',
          dark: '#544741',
          light: 'rgb(var(--color-taupe-light-rgb, 148 132 125) / <alpha-value>)',
          muted: '#B0A39C',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Italiana', 'Didot', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        editorial: '0.25em',
        luxury: '0.35em',
        kicker: '0.4em',
      },
      lineHeight: {
        relaxed: '1.75',
        loose: '2',
        editorial: '1.15',
      },
      boxShadow: {
        'warm-xs': '0 2px 8px rgba(92, 58, 46, 0.04)',
        'warm-sm': '0 4px 14px rgba(92, 58, 46, 0.06)',
        'warm': '0 10px 30px rgba(130, 83, 61, 0.08)',
        'warm-lg': '0 20px 45px rgba(92, 58, 46, 0.10)',
        'warm-xl': '0 25px 60px rgba(92, 58, 46, 0.14)',
      },
      borderRadius: {
        'luxury-sm': '0px',
        'luxury': '0px',
        'luxury-lg': '0px',
        'luxury-xl': '0px',
      },
      transitionDuration: {
        400: '400ms',
        500: '500ms',
        700: '700ms',
      },
    },
  },
  plugins: [typography],
};
