import { useContext, Dispatch, useMemo } from 'react';
import { useDateDispatch } from 'hooks/useDate';
import { DateActionEnum, TrendType } from 'models/types';
import calculateData from 'utils/calculateData';
import {
  AdTrendDispatchContext,
  AdTrendStateContext,
} from '../context/AdTrendContext';
import { useDateState } from './useDate';

export const useAdTrendState = () => {
  const state = useContext(AdTrendStateContext);
  if (!state) throw new Error("Can't find State Provider");
  return state;
};

export const useAdTrendDispatch = () => {
  const dispatch = useContext(AdTrendDispatchContext);
  if (!dispatch) throw new Error("Can't find Dispatch Provider");
  return dispatch;
};

export const useBaseDate = () => {
  const { data } = useAdTrendState();
  const baseDate = useMemo(() => {
    const startDate = data[0] && new Date(data[0].date);
    const endDate =
      data[data.length - 1] && new Date(data[data.length - 1].date);
    return { startDate, endDate };
  }, [data]);
  return baseDate;
};

export const useAdTrendValue = () => {
  const { data } = useAdTrendState();
  const { startDate, endDate } = useDateState();
  if (!data) throw new Error("Can't find StateProvider");
  if (!startDate || !endDate) throw new Error("Can't find DateProvider");
  const filtered: TrendType[] = data.filter((item) => {
    const target = new Date(item.date);
    const startTime = startDate.getTime();
    const endTime = endDate.getTime();
    const targetTime = target.getTime();
    if (startTime <= targetTime && targetTime <= endTime) {
      return item;
    }
  });
  const result = calculateData(filtered);
  return result;
};
