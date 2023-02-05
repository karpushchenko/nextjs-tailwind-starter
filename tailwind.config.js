/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      mono: ['Aeonik', ...defaultTheme.fontFamily.mono],
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '#0E0A0F',
      white: '#FFFFFF',
      primary: {
        1: '#9966FF',
        2: '#CB6AFB',
        3: '#F7E16E',
      },
      secondary: {
        1: '#40BFAA',
        2: '#4D66E5',
        3: '#1AFFD9',
        4: '#BB99FF',
      },
      gray: {
        98: '#FAF9FA',
      },
    }),
    letterSpacing: {
      tighter: '-.01em',
      wide: '.02em',
    },
    screens: {
      '2xl': { max: '1919px' },
      xl: { max: '1535px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '359px' },
    },

    extend: {
      padding: {
        19: '72px',
      },
      spacing: {
        30: '7.5rem',
      },
      boxShadow: {
        inner: '0 0 0 1px rgba(255, 255, 255, 1) inset',
        button: '0px 0px 0px rgba(153, 102, 255, 0.0)',
        'button-hover': '0px 0px 60px rgba(153, 102, 255, 0.4)',
      },
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};
