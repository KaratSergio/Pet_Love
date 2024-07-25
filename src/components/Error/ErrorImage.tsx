import errorImages from '@assets/img/errorPage/errorImages';

const ErrorImage: React.FC = () => {
  return (
    <div className="flex justify-center items-center rounded-full overflow-hidden w-[109px] h-[109px] md:w-[280px] md:h-[280px]">
      <picture className="w-full h-full">
        <source
          media="(min-width: 1280px)"
          srcSet={`${errorImages.desktop.default} 1x, ${errorImages.desktop['2x']} 2x, ${errorImages.desktop['3x']} 3x`}
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${errorImages.tablet.default} 1x, ${errorImages.tablet['2x']} 2x, ${errorImages.tablet['3x']} 3x`}
          type="image/webp"
        />
        <source
          media="(max-width: 767.98px)"
          srcSet={`${errorImages.mobile.default} 1x, ${errorImages.mobile['2x']} 2x, ${errorImages.mobile['3x']} 3x`}
          type="image/webp"
        />
        <img className="w-full h-full object-cover" src={errorImages.mobile.default} alt="Error image" loading="lazy" />
      </picture>
    </div>
  );
};

export default ErrorImage;
