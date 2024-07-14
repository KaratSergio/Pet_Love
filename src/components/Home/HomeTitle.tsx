const HomeTitle: React.FC = () => {
  return (
    <div className="flex justify-between bg-yellow rounded-b-60 pt-[97px] px-16 pb-8 w-full">
      <h1 className="font-bold text-white text-[90px] leading-[87px] tracking-[-0.03em] w-[760px]">
        Take good <strong className="text-lightWhite">care</strong> of your small pets
      </h1>
      <p className="w-[255px] text-white text-lg flex items-end">
        Choosing a pet for your home is a choice that is meant to enrich your life with immeasurable joy and tenderness.
      </p>
    </div>
  );
};

export default HomeTitle;
