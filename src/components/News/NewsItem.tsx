import { NewsItemProps } from '@src/redux/news/news-type';

const NewsItem: React.FC<NewsItemProps> = ({ item }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date
      .toLocaleDateString('ua-UA', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
      .replace(/\./g, '/');
  };

  return (
    <div className="w-full max-w-[361px]">
      <img className="rounded-2xl w-full h-full max-h-[226px]" src={item.imgUrl} alt={item.title} />

      <div className="mt-7 h-full max-h-[220px] flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold line-clamp-2">{item.title}</h2>
          <p className="font-medium mt-[14px] mb-7 line-clamp-4">{item.text}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lightBlack">{formatDate(item.date)}</p>
          <a className="text-yellow" href={item.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
