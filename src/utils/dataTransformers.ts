import { Option, Location } from '@components/Filters/types';

export const transformOptions = (options: string[]): Option[] => {
  return options.map((option) => ({
    label: option,
    value: option,
  }));
};

export const transformOptionsLocation = (options: Location[]): Option[] => {
  return options.map((option) => ({
    label: option.cityEn,
    value: option._id,
  }));
};
