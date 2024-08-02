import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['ManropeMedium', 'sans-serif'],
        manropeSemiBold: ['ManropeSemiBold', 'sans-serif'],
        manropeBold: ['ManropeBold', 'sans-serif'],
        manropeExtraBold: ['ManropeExtraBold', 'sans-serif'],
      },
      colors: {
        yellow: '#F6B83D',
        red: '#F43F5E',
        blue: '#54ADFF',
        lightBlack: 'rgba(38, 38, 38, 0.5)',
        lightGrey: 'rgba(43, 43, 42, 0.4)',
        lightWhite: 'rgba(255, 255, 255, 0.4)',
        lightRed: 'rgba(244, 63, 94, 0.1)',
        lightBlue: 'rgba(84, 173, 255, 0.1)',
        lightYellow: '#FFF4DF',
        lightOrange: '#FBE7C1',

        alfaWhite: 'rgba(255, 255, 255, 0.1)',
        alfaBlack: 'rgba(38, 38, 38, 0.05)',
        navBorder: 'rgba(38, 38, 38, 0.15)',

        check: '#08aa83',
        error: '#ef2447',
      },
      maxWidth: {
        desktop: '1280px',
        tablet: '768px',
        mobile: '375px',
      },
      borderRadius: {
        '30': '30px',
        '60': '60px',
      },
      screens: {
        mobile: { min: '320px', max: '374px' },
        'mobile-adaptive': { min: '375px', max: '767px' },
        tablet: '768px',
        desktop: '1280px',
        mob: '375px',
        sm: '576px',
        md: '768px',
        lg: '920px',
        xl: '1280px',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
};

export default config;
