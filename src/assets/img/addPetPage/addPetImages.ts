import addPetImgMobile from './mob.webp';
import addPetImgMobile2x from './mob-2x.webp';
import addPetImgMobile3x from './mob-3x.webp';
import addPetImgTablet from './tab.webp';
import addPetImgTablet2x from './tab-2x.webp';
import addPetImgTablet3x from './tab-3x.webp';
import addPetImgDesktop from './desk.webp';
import addPetImgDesktop2x from './desk-2x.webp';
import addPetImgDesktop3x from './desk-3x.webp';

const addPetImages = {
  mobile: {
    default: addPetImgMobile,
    '2x': addPetImgMobile2x,
    '3x': addPetImgMobile3x,
    position: { top: '8px', left: '0px' },
  },
  tablet: {
    default: addPetImgTablet,
    '2x': addPetImgTablet2x,
    '3x': addPetImgTablet3x,
    position: { top: '8px', left: '0px' },
  },
  desktop: {
    default: addPetImgDesktop,
    '2x': addPetImgDesktop2x,
    '3x': addPetImgDesktop3x,
    position: { top: '-16px', left: '-25px' },
  },
};

export default addPetImages;
