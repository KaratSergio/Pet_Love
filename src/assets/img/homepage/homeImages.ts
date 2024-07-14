import homeImgMobile from './mob.webp';
import homeImgMobile2x from './mob-2x.webp';
import homeImgMobile3x from './mob-3x.webp';
import homeImgTablet from './tab.webp';
import homeImgTablet2x from './tab-2x.webp';
import homeImgTablet3x from './tab-3x.webp';
import homeImgDesktop from './desk.webp';
import homeImgDesktop2x from './desk-2x.webp';
import homeImgDesktop3x from './desk-3x.webp';

const homeImages = {
  mobile: {
    default: homeImgMobile,
    '2x': homeImgMobile2x,
    '3x': homeImgMobile3x,
  },
  tablet: {
    default: homeImgTablet,
    '2x': homeImgTablet2x,
    '3x': homeImgTablet3x,
  },
  desktop: {
    default: homeImgDesktop,
    '2x': homeImgDesktop2x,
    '3x': homeImgDesktop3x,
  },
};

export default homeImages;
