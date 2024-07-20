import registerImgMobile from './mob.webp';
import registerImgMobile2x from './mob-2x.webp';
import registerImgMobile3x from './mob-3x.webp';
import registerImgTablet from './tab.webp';
import registerImgTablet2x from './tab-2x.webp';
import registerImgTablet3x from './tab-3x.webp';
import registerImgDesktop from './desk.webp';
import registerImgDesktop2x from './desk-2x.webp';
import registerImgDesktop3x from './desk-3x.webp';

const registerImages = {
  mobile: {
    default: registerImgMobile,
    '2x': registerImgMobile2x,
    '3x': registerImgMobile3x,
    position: { top: '8px', left: '0px' },
  },
  tablet: {
    default: registerImgTablet,
    '2x': registerImgTablet2x,
    '3x': registerImgTablet3x,
    position: { top: '8px', left: '0px' },
  },
  desktop: {
    default: registerImgDesktop,
    '2x': registerImgDesktop2x,
    '3x': registerImgDesktop3x,
    position: { top: '38px', left: '40px' },
  },
};

export default registerImages;
