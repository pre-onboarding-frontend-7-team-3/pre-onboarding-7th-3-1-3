import { AdType, TrendType } from './types';

export interface AdService {
  getAdList: () => Promise<GetAdListResponse>;
  getTrend: () => Promise<GetTrendResponse>;
}

export type GetAdListResponse = {
  ads: AdType[];
  counts: number;
};

export type GetTrendResponse = {
  report: {
    daily: TrendType[];
  };
};
