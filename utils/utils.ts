import { BASE_URL } from '../constants';

export const getAssetURL = (path: string): string => {
  return `${BASE_URL}/${path.replace(/^\//, '')}`;
};
