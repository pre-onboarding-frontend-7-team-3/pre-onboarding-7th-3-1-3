import { useContext } from 'react';
import { CategoryEnum } from 'models/types';
import { CategoryContext } from '../context/CategoryContext';
import { AdsDispatchContext, AdsStateContext } from '../context/AdsContext';

export const useCategory = () => useContext(CategoryContext);

export const useAdsState = () => {
  const state = useContext(AdsStateContext);
  if (!state) throw new Error("Can't find State Provider");
  return state;
};

export const useAdsDispatch = () => {
  const dispatch = useContext(AdsDispatchContext);
  if (!dispatch) throw new Error("Can't find Dispatch Provider");
  return dispatch;
};

export const useAdsValue = () => {
  const state = useAdsState();
  const { category } = useContext(CategoryContext);

  if (!state) throw new Error("Can't find StateProvider");
  if (!category) throw new Error("Can't find CategoryProvider");
  if (category === '전체 광고') return state.data;
  const filtered = state.data.filter(
    (item) => CategoryEnum[item.status] === category
  );
  return filtered;
};
