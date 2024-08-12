import React from 'react';
import Icon from '../../Icon/Icon';
import { NoticesItemProps } from '../types';
import { sizeClasses } from './sizeClasses';
import { formatDate } from '@utils/formatDate';
import { capitalizeFirstLetter } from '@utils/capitalizeFirstLetter';
import NoticesDetailsList from './NoticesDetailsList';

const NoticesItem: React.FC<NoticesItemProps> = React.memo(
  ({ notice, onToggleFavorite, size = 'large' }) => {
    const { container, image, btnContainer, detailBtn, comment } = sizeClasses[size];
    const favoriteIconId = notice.isFavorite ? 'icon-trash' : 'icon-like';

    const details = [
      { label: 'Name', value: String(notice.name) },
      { label: 'Birthday', value: formatDate(notice.birthday) },
      { label: 'Sex', value: capitalizeFirstLetter(String(notice.sex)) },
      { label: 'Species', value: capitalizeFirstLetter(String(notice.species)) },
      { label: 'Category', value: capitalizeFirstLetter(String(notice.category)) },
    ];

    return (
      <div className={`bg-white p-6 flex flex-col justify-between rounded-2xl ${container}`}>
        <div>
          <div className={`relative overflow-hidden rounded-2xl ${image}`}>
            <img src={notice.imgURL} alt={notice.title} className="h-full w-full object-cover" />
          </div>
          <div className="flex justify-between items-center">
            <h2 className="font-bold">{notice.title}</h2>
            <div className="flex items-center">
              <Icon id="icon-star" strokeColor="stroke-yellow" color="fill-yellow" className="mr-[2px]" />
              {notice.popularity}
            </div>
          </div>
          <NoticesDetailsList details={details} />
          <p className={`text-sm text-dark ${comment}`}>{notice.comment}</p>
        </div>
        <div className={`flex justify-between gap-[10px] ${btnContainer}`}>
          <button type="button" className={`text-white max-w-64 bg-yellow rounded-30 w-full ${detailBtn}`}>
            Learn more
          </button>
          <button
            type="button"
            onClick={onToggleFavorite}
            className="rounded-full flex items-center justify-center bg-lightYellow size-12"
          >
            <Icon id={favoriteIconId} strokeColor="stroke-yellow" />
          </button>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.notice._id === nextProps.notice._id && prevProps.size === nextProps.size
);

NoticesItem.displayName = 'NoticesItem';

export default NoticesItem;
