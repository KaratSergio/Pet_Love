import loginImgMobile from './mob.webp';
import loginImgMobile2x from './mob-2x.webp';
import loginImgMobile3x from './mob-3x.webp';
import loginImgTablet from './tab.webp';
import loginImgTablet2x from './tab-2x.webp';
import loginImgTablet3x from './tab-3x.webp';
import loginImgDesktop from './desk.webp';
import loginImgDesktop2x from './desk-2x.webp';
import loginImgDesktop3x from './desk-3x.webp';

const loginImages = {
  mobile: {
    default: loginImgMobile,
    '2x': loginImgMobile2x,
    '3x': loginImgMobile3x,
    position: { top: '8px', left: '0px' },
  },
  tablet: {
    default: loginImgTablet,
    '2x': loginImgTablet2x,
    '3x': loginImgTablet3x,
    position: { top: '8px', left: '0px' },
  },
  desktop: {
    default: loginImgDesktop,
    '2x': loginImgDesktop2x,
    '3x': loginImgDesktop3x,
    position: { top: '31px', left: '30px' },
  },
};

export default loginImages;
