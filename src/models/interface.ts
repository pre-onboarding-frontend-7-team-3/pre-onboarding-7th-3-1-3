import { AdType } from './types';

export interface AdService {
  getAdList: () => Promise<GetAdResponse>;
}

export type GetAdResponse = {
  ads: AdType[];
  counts: number;
};
