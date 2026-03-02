import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // scan EVERYTHING inside src
  ],

  theme: {
    extend: {
      /* Layout */
      maxWidth: {
        container: '1440px',
      },

      /* Colors */
      colors: {
        primary: '#009ACF',
        primarySurface: '#EAFAFF',
        primaryDark: '#00668A',
        primaryDarkAlt: '#003547',

        white: '#FFFFFF',
        lightGrey: '#F8F8F8',
        grey: '#E2E2E2',

        border: '#E7F1F4',
        borderDark: '#B1CCD6',

        text: '#161616',
        textAlt: '#4C4C4C',
      },

      fontWeight: {
        semibold: '600',
        regular: '400',
      },

      fontSize: {
        h1: ['36px', { lineHeight: '1.4' }], // keep for now
        h2: ['32px', { lineHeight: '44.8px' }],
        h3: ['24px', { lineHeight: '1.4' }],
        h4: ['20px', { lineHeight: '1.4' }],
        h5: ['16px', { lineHeight: '1.4' }],
        h6: ['14px', { lineHeight: '1.4' }],

        bodySmall: ['14px', { lineHeight: '20px' }],
        bodyMedium: ['16px', { lineHeight: '28px' }],
        bodyLarge: ['18px', { lineHeight: '32px' }],
      },

      /* Radius */
      borderRadius: {
        xs: '8px',
        s: '16px',
        m: '20px',
        lg: '24px',
        xl: '32px',
        xxl: '40px',
      },

      /* Spacing */
      spacing: {
        xs: '8px',
        s: '16px',
        m: '24px',
        lg: '32px',
        xl: '40px',
        xxl: '80px',
        xxxl: '160px',
      },
    },
  },

  plugins: [],
}

export default config
