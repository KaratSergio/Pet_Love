import { FriendsItemProps } from '@redux/friends/friends-types';

const FriendsItem: React.FC<FriendsItemProps> = ({ friend }) => {
  const { imageUrl, logo, title, name, addressUrl, address, email, phone, workDays, hours } = friend;

  const renderWorkDays = () => {
    if (!workDays || workDays.length === 0) {
      return <p>Day and night</p>;
    }

    const openDay = workDays.find((day) => day.isOpen);

    if (openDay) {
      return (
        <p>
          {openDay.from} - {openDay.to}
        </p>
      );
    }

    return <p>Closed</p>;
  };

  // Create email with @gmail.com if email is missing
  const displayEmail = email || (title ? `${title.replace(/\s+/g, '').toLowerCase()}@gmail.com` : 'No email available');

  return (
    <div className="w-[371px] leading-[26px] tracking-[-0.04em] py-10 px-5 rounded-[15px] bg-white flex gap-5 relative">
      <img src={imageUrl || logo} alt={`${name} logo`} className="size-[90px]" />
      <div>
        <h3 className="text-xl font-bold mb-3">{title || name}</h3>
        <ul className="space-y-2">
          <li>
            <a href={`mailto:${displayEmail}`} className="block text-sm hover:underline">
              <span className="text-sm text-lightBlack font-medium">Email:</span> {displayEmail}
            </a>
          </li>
          <li>
            <a
              href={addressUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-[220px] text-sm hover:underline overflow-hidden text-ellipsis whitespace-nowrap"
              title={address || 'website only'}
            >
              <span className="text-sm text-lightBlack font-medium">Address:</span> {address || 'website only'}
            </a>
          </li>
          <li>
            <a href={`tel:${phone || '#'}`} className="block text-sm hover:underline">
              <span className="text-sm text-lightBlack font-medium">Phone:</span> {phone || 'email only'}
            </a>
          </li>
        </ul>
      </div>
      <div className="absolute top-3 right-3 rounded-30 bg-lightYellow p-2">
        {renderWorkDays()}
        <p>{hours}</p>
      </div>
    </div>
  );
};

export default FriendsItem;
