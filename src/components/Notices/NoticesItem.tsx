import Icon from '../Icon/Icon';
import { Notice } from '@redux/notices/notices-types';

interface NoticesItemProps {
  notice: Notice;
  onToggleFavorite?: () => void;
  size?: 'large' | 'small';
}

const formatDate = (date: string | null | undefined): string => {
  if (!date) {
    return '';
  }
  return date.split('-').join('.');
};

const capitalizeFirstLetter = (str: string | undefined | null): string => {
  if (!str) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const NoticesItem: React.FC<NoticesItemProps> = ({ notice, onToggleFavorite, size = 'large' }) => {
  const containerClasses = size === 'small' ? 'w-[320px] h-[388px] p-[14px]' : 'w-[363px]';
  const imageClasses = size === 'small' ? 'w-[292px] h-[162px] mb-[14px]' : 'w-[315px] h-[178px] mb-6';
  const btnContainerClasses = size === 'small' ? 'mt-6' : 'mt-[50px]';
  const detailBtnClasses = size === 'small' ? 'h-[44px] max-w-[230px]' : 'h-[48px]';
  const commentClasses = size === 'small' ? 'mt-[14px] leading-tight' : 'mt-4';

  return (
    <div className={`bg-white p-6 flex flex-col justify-between rounded-2xl ${containerClasses}`}>
      <div>
        <div className={`relative overflow-hidden rounded-2xl ${imageClasses}`}>
          <img src={notice.imgURL} alt={notice.title} className="h-full w-full object-cover" />
        </div>
        <div className="flex justify-between items-center">
          <h2 className="font-bold">{notice.title}</h2>
          <div className="flex items-center">
            <Icon id="icon-star" strokeColor="stroke-yellow" color="fill-yellow" className="mr-[2px]" />{' '}
            {notice.popularity}
          </div>
        </div>
        <ul className="flex justify-between mt-2">
          <li className="flex flex-col">
            <span className="font-medium text-[10px] text-lightBlack">Name</span>
            <span className="text-[12px]">{notice.name}</span>
          </li>
          <li className="flex flex-col">
            <span className="font-medium text-[10px] text-lightBlack">Birthday</span>
            <span className="text-[12px]">{formatDate(notice.birthday)}</span>
          </li>
          <li className="flex flex-col">
            <span className="font-medium text-[10px] text-lightBlack">Sex</span>
            <span className="text-[12px]">{capitalizeFirstLetter(notice.sex)}</span>
          </li>
          <li className="flex flex-col">
            <span className="font-medium text-[10px] text-lightBlack">Species</span>
            <span className="text-[12px]">{capitalizeFirstLetter(notice.species)}</span>
          </li>
          <li className="flex flex-col">
            <span className="font-medium text-[10px] text-lightBlack">Category</span>
            <span className="text-[12px]">{capitalizeFirstLetter(notice.category)}</span>
          </li>
        </ul>
        <p className={`text-sm text-dark ${commentClasses}`}>{notice.comment}</p>
      </div>
      <div className={`flex justify-between gap-[10px] ${btnContainerClasses}`}>
        <button type="button" className={`text-white max-w-64 bg-yellow rounded-30 w-full ${detailBtnClasses}`}>
          Learn more
        </button>
        <button type="button" onClick={onToggleFavorite} className="rounded-full bg-lightYellow size-12">
          <Icon id="icon-like" strokeColor="stroke-yellow" />
        </button>
      </div>
    </div>
  );
};

export default NoticesItem;
