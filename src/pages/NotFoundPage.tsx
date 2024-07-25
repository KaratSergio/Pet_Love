import NotFound from '@components/Error/NotFound';
import LinkTo from '@components/Custom/LinkTo';

const NoFoundPage: React.FC = () => {
  return (
    <section className="m-auto max-w-desktop py-8 bg-orange-50">
      <div className=" bg-yellow rounded-60 flex flex-col items-center justify-center py-[249px] sm:py-[109px]">
        <NotFound />
        <p className="text-white font-bold sm:text-2xl leading-7 tracking-[-0.03em] mt-10">
          Ooops! This page not found :(
        </p>
        <LinkTo
          to="/home"
          className="bg-lightYellow text-yellow font-bold text-sm sm:text-base py-3 sm:py-[14px] px-[30px] rounded-30 mt-5"
        >
          To home page
        </LinkTo>
      </div>
    </section>
  );
};

export default NoFoundPage;
