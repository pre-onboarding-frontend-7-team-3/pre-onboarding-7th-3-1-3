export enum DateActionEnum {
  SET_START = 'SET_START',
  SET_END = 'SET_END',
}

export type DateActionType =
  | { type: DateActionEnum.SET_START; date: Date | null }
  | { type: DateActionEnum.SET_END; date: Date | null };

export type CategoryType = '전체 광고' | '진행중' | '중단됨';

type ReportType = {
  cost: number;
  convValue: number;
  roas: number;
};

export type AdType = {
  id: string;
  adType: string;
  title: string;
  budget: number;
  status: 'active' | 'ended';
  startDate: string;
  endDate: null | string;
  report: ReportType;
};
