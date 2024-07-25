const HomeTitle: React.FC = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-between bg-yellow rounded-b-30 sm:rounded-b-60 pt-[60px] sm:pt-28 px-5 sm:px-8 pb-[50px] sm:pb-[44px] lg:pb-8 lg:px-16 w-full">
      <h1 className="font-bold text-white text-[50px] sm:text-[80px] xl:text-[90px] leading-[48px] sm:leading-[77px] xl:leading-[87px] tracking-[-0.03em] w-full max-w-[760px]">
        Take good <strong className="text-lightWhite">care</strong> of your small pets
      </h1>
      <div className="flex sm:justify-end w-full xl:w-[255px] xl:items-end">
        <p className="max-w-[295px] sm:w-[255px] leading-[18px] sm:leading-[22px] tracking-[-0.02em] mt-6 sm:mt-8 text-white text-sm sm:text-[18px]">
          Choosing a pet for your home is a choice that is meant to enrich your life with immeasurable joy and
          tenderness.
        </p>
      </div>
    </div>
  );
};

export default HomeTitle;
