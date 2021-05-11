module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
    },
    boxShadow: {
      DEFAULT: '0 5px 10px rgba(0, 78, 255, 0.05), 0 10px 30px rgba(0, 78, 255, 0.03);',
    },
    extend: {
      spacing: {
        128: '32rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    /*        require('tailwind-bootstrap-grid')({
                containerMaxWidths: { sm: '540px', md: '720px', lg: '960px', xl: '1140px' },
            }),*/
  ],
}
