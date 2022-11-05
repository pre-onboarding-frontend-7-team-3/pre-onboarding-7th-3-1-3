export enum DateActionEnum {
  SET_START = 'SET_START',
  SET_END = 'SET_END',
}

export type ActionType =
  | { type: DateActionEnum.SET_START; date: Date | null }
  | { type: DateActionEnum.SET_END; date: Date | null };
