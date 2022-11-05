import { useContext } from 'react';
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

export const useStartAndLastDate = () => {
  const { data } = useAdTrendState();
  const startDate = data[0] && new Date(data[0].date);
  const lastDate =
    data[data.length - 1] && new Date(data[data.length - 1].date);
  return { startDate, lastDate };
};

export const useAdTrendValue = () => {
  const { data } = useAdTrendState();
  const { startDate, endDate } = useDateState();
  const date = startDate && new Date(startDate);
  if (!data) throw new Error("Can't find StateProvider");
  if (!startDate || !endDate) throw new Error("Can't find CategoryProvider");
};
