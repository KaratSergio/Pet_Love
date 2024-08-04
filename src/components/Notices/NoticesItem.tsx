import { Notice } from '@redux/notices/notices-types';

interface NoticesItemProps {
  notice: Notice;
  onToggleFavorite: () => void;
}

const NoticesItem: React.FC<NoticesItemProps> = ({ notice, onToggleFavorite }) => {
  return (
    <div className="border rounded p-4">
      <img src={notice.imgURL} alt={notice.title} className="mb-2" />
      <h2 className="text-xl font-bold mb-2">{notice.title}</h2>
      <p className="text-gray-600 mb-2">{notice.comment}</p>
      <button onClick={onToggleFavorite} className={`btn ${notice.isFavorite ? 'btn-danger' : 'btn-primary'}`}>
        {notice.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default NoticesItem;
