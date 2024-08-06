import { Notice } from '@redux/notices/notices-types';
import Icon from '../Icon/Icon';

interface NoticesItemProps {
  notice: Notice;
  onToggleFavorite: () => void;
}

const formatDate = (date: string) => {
  return date.split('-').join('.');
};

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const NoticesItem: React.FC<NoticesItemProps> = ({ notice, onToggleFavorite }) => {
  return (
    <div className="w-[363px] bg-white p-6 flex flex-col justify-between">
      <div>
        <div className="w-[315px] h-[178px] relative overflow-hidden rounded-2xl">
          <img src={notice.imgURL} alt={notice.title} className="h-full w-full object-cover" />
        </div>
        <div className="flex justify-between items-center mt-6">
          <h2 className="text-[18px] font-bold">{notice.title}</h2>
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
            <span className="text-sm">{capitalizeFirstLetter(notice.sex)}</span>
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
        <p className="mt-4 text-sm text-dark">{notice.comment}</p>
      </div>
      <div className="flex justify-between gap-[10px] mt-[50px]">
        <button type="button" className="text-white max-w-64 bg-yellow rounded-30 w-full">
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
