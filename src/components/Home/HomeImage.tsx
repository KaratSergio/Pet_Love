import homeImages from '@assets/img/homepage/homeImages';

const HomeImage: React.FC = () => {
  return (
    <div className="mx-auto flex rounded-[60px] max-w-desktop w-full overflow-hidden" style={{ position: 'relative' }}>
      <picture className="w-full h-full">
        <source
          media="(min-width: 1280px)"
          srcSet={`${homeImages.desktop.default} 1x, ${homeImages.desktop['2x']} 2x, ${homeImages.desktop['3x']} 3x`}
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${homeImages.tablet.default} 1x, ${homeImages.tablet['2x']} 2x, ${homeImages.tablet['3x']} 3x`}
          type="image/webp"
        />
        <source
          media="(max-width: 767.98px)"
          srcSet={`${homeImages.mobile.default} 1x, ${homeImages.mobile['2x']} 2x, ${homeImages.mobile['3x']} 3x`}
          type="image/webp"
        />
        <img
          className="w-full h-full object-cover"
          src={homeImages.mobile.default}
          alt="Girl which loves her dog"
          loading="lazy"
          style={{ borderRadius: '60px' }}
        />
      </picture>
    </div>
  );
};

export default HomeImage;
