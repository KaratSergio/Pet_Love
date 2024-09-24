export interface IconProps {
  id: string;
  width?: string;
  height?: string;
  color?: string;
  strokeColor?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<SVGElement>) => void;
}
