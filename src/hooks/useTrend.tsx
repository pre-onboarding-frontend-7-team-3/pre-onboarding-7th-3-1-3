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

export const useAdsValue = () => {
  const state = useAdTrendState();
  const { startDate, endDate } = useDateState();

  if (!state) throw new Error("Can't find StateProvider");
  if (!startDate || !endDate) throw new Error("Can't find CategoryProvider");
};
