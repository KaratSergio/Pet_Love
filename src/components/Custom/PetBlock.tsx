import Icon from '../Icon/Icon';
import { PetBlockProps } from './types';

const PetBlock: React.FC<PetBlockProps> = ({
  images,
  imageWidth = '100%',
  imageHeight = '100%',
  className = '',
  style = {},
}) => {
  return (
    <div className={`relative bg-yellow p-4 ${className}`} style={style}>
      <Icon
        id="icon-rectangle"
        width="w-[512px]"
        height="h-[715px]"
        color="fill-alfaWhite"
        strokeColor="stroke-inherit"
        className="absolute z-20 top-3 left-10"
      />
      <picture className="absolute z-30" style={{ width: imageWidth, height: imageHeight }}>
        <source
          srcSet={`${images.mobile.default} 1x, ${images.mobile['2x']} 2x, ${images.mobile['3x']} 3x`}
          media="(max-width: 374px)"
          type="image/webp"
        />
        <source
          srcSet={`${images.mobile.default} 1x, ${images.mobile['2x']} 2x, ${images.mobile['3x']} 3x`}
          media="(min-width: 375px) and (max-width: 767px)"
          type="image/webp"
        />
        <source
          srcSet={`${images.tablet.default} 1x, ${images.tablet['2x']} 2x, ${images.tablet['3x']} 3x`}
          media="(min-width: 768px) and (max-width: 1279px)"
          type="image/webp"
        />
        <source
          srcSet={`${images.desktop.default} 1x, ${images.desktop['2x']} 2x, ${images.desktop['3x']} 3x`}
          media="(min-width: 1280px)"
          type="image/webp"
        />
        <img
          src={images.desktop.default}
          alt="Background"
          className="w-full h-full object-cover"
          style={{
            position: 'absolute',
            top: images.desktop.position.top,
            left: images.desktop.position.left,
          }}
          loading="lazy"
        />
      </picture>
    </div>
  );
};

export default PetBlock;
