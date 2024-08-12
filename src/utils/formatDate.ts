export const formatDate = (date: string | null | undefined): string => {
  if (!date) return '';
  return date.split('-').join('.');
};
