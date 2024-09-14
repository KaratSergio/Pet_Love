import { useEffect } from 'react';
import { fetchNews } from '@redux/news/news-thunk';
import { selectNews } from '@redux/news/news-selectors';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';

const NewsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const news = useAppSelector(selectNews);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div>
      {news.map((item) => (
        <div key={item._id}>
          <img src={item.imgUrl} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
