import ErrorImage from './ErrorImage';

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <p className="text-white text-[120px] md:text-[300px] font-extrabold leading-[120px] md:leading-[300px]">4</p>
      <div className="size-[109px] md:size-[280px] rounded-full bg-alfaWhite">
        <ErrorImage />
      </div>
      <p className="text-white text-[120px] md:text-[300px] font-extrabold leading-[120px] md:leading-[300px]">4</p>
    </div>
  );
};

export default NotFound;
