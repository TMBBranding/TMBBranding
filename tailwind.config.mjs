/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Bases neutres minérales
        creme: {
          DEFAULT: '#FAF7F2',
          light: '#FFFFFF',
          powder: '#FAF7F2',
          alabaster: '#F3EFEA',
          linen: '#EBE5DD',
          border: '#E4DDD4',
        },
        // Teintes chaudes principales
        terracotta: {
          light: '#D97E63',
          DEFAULT: '#C86D51',
          dark: '#B85C42',
          soft: '#EAD7CF',
        },
        ocre: {
          light: '#E6AE6E',
          DEFAULT: '#D99B59',
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
          DEFAULT: '#241B18',
          deep: '#1C1513',
          light: '#352925',
        },
        taupe: {
          DEFAULT: '#6B5C55',
          dark: '#544741',
          light: '#94847D',
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
        'luxury-sm': '0.375rem', // 6px
        'luxury': '0.625rem',    // 10px
        'luxury-lg': '1rem',     // 16px
        'luxury-xl': '1.5rem',   // 24px
      },
      transitionDuration: {
        400: '400ms',
        500: '500ms',
        700: '700ms',
      },
    },
  },
  plugins: [],
};
