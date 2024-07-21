import { useLocation } from 'react-router-dom';
import { TitleProps } from './types';

const Title: React.FC<TitleProps> = ({
  mainTitle,
  subTitle,
  className = '',
  mainTitleClassName = '',
  subTitleClassName = '',
}) => {
  const location = useLocation();

  const getTitleConfig = () => {
    switch (location.pathname) {
      case '/register':
        return {
          mainTitle: 'Registration',
          subTitle: 'Thank you for your interest in our platform.',
        };
      case '/login':
        return {
          mainTitle: 'Log in',
          subTitle: 'Welcome! Please enter your credentials to login to the platform:',
        };
      case '/news':
        return {
          mainTitle: 'News',
        };
      case '/notices':
        return {
          mainTitle: 'Find your favorite pet',
        };
      case '/friends':
        return {
          mainTitle: 'Our friends',
        };
      default:
        return {
          mainTitle,
          mainTitleClassName,
          subTitle,
          subTitleClassName,
        };
    }
  };

  const {
    mainTitle: finalMainTitle,
    mainTitleClassName: finalMainTitleClassName,
    subTitle: finalSubTitle,
    subTitleClassName: finalSubTitleClassName,
  } = getTitleConfig();

  return (
    <div className={`title-container ${className}`}>
      <h2 className={`text-[54px] font-bold ${finalMainTitleClassName}`}>{finalMainTitle}</h2>
      {finalSubTitle && <p className={`text-lg font-medium ${finalSubTitleClassName}`}>{finalSubTitle}</p>}
    </div>
  );
};

export default Title;
