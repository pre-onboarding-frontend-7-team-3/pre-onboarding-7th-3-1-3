export enum DateActionEnum {
  SET_START = 'SET_START',
  SET_END = 'SET_END',
}

export type CategoryType = '전체 광고' | '진행중' | '중단됨';

export type DateActionType =
  | { type: DateActionEnum.SET_START; date: Date | null }
  | { type: DateActionEnum.SET_END; date: Date | null };

export enum CategoryEnum {
  all = '전체 광고',
  active = '진행중',
  ended = '중단됨',
}

type ReportType = {
  cost: number;
  convValue: number;
  roas: number;
};

export type AdType = {
  id: number;
  adType: keyof typeof CategoryEnum;
  title: string;
  budget: number;
  status: keyof typeof CategoryEnum;
  startDate: string;
  endDate: null | string;
  report: ReportType;
};

export enum DataActionEnum {
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_DATA = 'SET_DATA',
  SET_ERROR = 'SET_ERROR',
}

export type TrendType = {
  [index: string]: string | number;
  imp: number;
  click: number;
  cost: number;
  conv: number;
  convValue: number;
  ctr: number;
  cvr: number;
  cpc: number;
  cpa: number;
  roas: number;
  date: string;
};

export enum TrendEnum {
  ROAS = 'roas',
  광고비 = 'cost',
  클릭수 = 'click',
  매출 = 'convValue',
  '노출 수' = 'imp',
  '전환 수' = 'conv ',
}

export type ChartType =
  | 'ROAS'
  | '광고비'
  | '클릭수'
  | '매출'
  | '노출 수'
  | '전환 수';

export enum ChartActionEnum {
  SET_FIRST_DATA = 'FIRST_DATA',
  SET_SECOND_DATA = 'SECOND_DATA',
  SET_PERIOD = 'SET_PERIOD',
}

export type ChartActionType =
  | { type: ChartActionEnum.SET_FIRST_DATA; data: string }
  | { type: ChartActionEnum.SET_SECOND_DATA; data: string }
  | { type: ChartActionEnum.SET_PERIOD; data: string };
