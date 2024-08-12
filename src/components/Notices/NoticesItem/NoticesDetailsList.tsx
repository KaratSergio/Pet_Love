import { DetailsListProps } from '../types';

const NoticesDetailsList: React.FC<DetailsListProps> = ({ details }) => {
  return (
    <ul className="flex justify-between mt-2">
      {details.map(({ label, value }) => (
        <li key={label} className="flex flex-col">
          <span className="font-medium text-[10px] text-lightBlack">{label}</span>
          <span className="text-[12px]">{value}</span>
        </li>
      ))}
    </ul>
  );
};

export default NoticesDetailsList;
