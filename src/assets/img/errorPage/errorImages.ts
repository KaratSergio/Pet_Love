import errorImgMobile from './mob.webp';
import errorImgMobile2x from './mob-2x.webp';
import errorImgMobile3x from './mob-3x.webp';
import errorImgTablet from './tab.webp';
import errorImgTablet2x from './tab-2x.webp';
import errorImgTablet3x from './tab-3x.webp';
import errorImgDesktop from './desk.webp';
import errorImgDesktop2x from './desk-2x.webp';
import errorImgDesktop3x from './desk-3x.webp';

const errorImages = {
  mobile: {
    default: errorImgMobile,
    '2x': errorImgMobile2x,
    '3x': errorImgMobile3x,
  },
  tablet: {
    default: errorImgTablet,
    '2x': errorImgTablet2x,
    '3x': errorImgTablet3x,
  },
  desktop: {
    default: errorImgDesktop,
    '2x': errorImgDesktop2x,
    '3x': errorImgDesktop3x,
  },
};

export default errorImages;
