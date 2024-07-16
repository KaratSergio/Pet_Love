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
        lightBlack: 'rgba(38, 38, 38, 0.5)',
        navBorder: 'rgba(38, 38, 38, 0.15)',
        lightWhite: 'rgba(255, 255, 255, 0.4)',
        yellow: '#F6B83D',
        lightYellow: '#FFF4DF',
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
