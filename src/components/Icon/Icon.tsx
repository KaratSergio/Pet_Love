import { IconProps } from './types';
import sprite from '../../assets/svg/sprite.svg';

const Icon: React.FC<IconProps> = ({
  id,
  width = 'w-5',
  height = 'h-5',
  color = 'fill-transparent',
  strokeColor = 'stroke-black',
  className = '',
  style = {},
  onClick,
}) => {
  return (
    <svg
      className={`inline-block align-middle ${width} ${height} ${color} ${strokeColor} ${className} ${onClick}`}
      style={style}
    >
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};

export default Icon;
