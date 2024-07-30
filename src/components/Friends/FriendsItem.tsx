import { FriendsItemProps } from '@redux/friends/friends-types';

const FriendsItem: React.FC<FriendsItemProps> = ({ friend }) => {
  const { imageUrl, logo, title, name, addressUrl, address, email, phone, workDays, hours } = friend;

  const renderWorkDays = () => {
    if (!workDays || workDays.length === 0) {
      return <p>No work hours available</p>;
    }

    return workDays.map((day) => {
      if (day.isOpen) {
        return (
          <p key={day._id}>
            {day.from} - {day.to}
          </p>
        );
      }
      return <p key={day._id}>Closed</p>;
    });
  };

  return (
    <div className="friend-item p-4 border rounded shadow-sm">
      <img src={imageUrl || logo} alt={`${name} logo`} className="mb-2" />
      <h3 className="text-xl font-bold">{title || name}</h3>
      <a href={addressUrl} target="_blank" rel="noopener noreferrer" className="block text-blue-500 hover:underline">
        {address}
      </a>
      <a href={`mailto:${email}`} className="block text-blue-500 hover:underline">
        {email}
      </a>
      <a href={`tel:${phone}`} className="block text-blue-500 hover:underline">
        {phone}
      </a>
      <div className="work-hours mt-2">
        <h4 className="font-bold">Work Hours:</h4>
        {renderWorkDays()}
        <p>{hours}</p>
      </div>
    </div>
  );
};

export default FriendsItem;
