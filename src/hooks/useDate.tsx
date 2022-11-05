import { useContext } from 'react';
import { DateDispatchContext, DateStateContext } from '../context/DateContext';

export const useDateState = () => {
  const date = useContext(DateStateContext);
  if (!date) {
    throw new Error("can't find DateStateProvider");
  }
  return date;
};

export const useDateDispatch = () => {
  const dispatch = useContext(DateDispatchContext);
  if (!dispatch) {
    throw new Error("can't find DateDispatchProvider");
  }
  return dispatch;
};
