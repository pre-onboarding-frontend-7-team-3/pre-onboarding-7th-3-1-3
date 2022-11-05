import { useContext } from 'react';
import { CategoryEnum } from 'models/types';
import { AdListDispatchContext } from 'context/AdListContext';
import { CategoryContext } from '../context/CategoryContext';
import { AdListStateContext } from '../context/AdListContext';

export const useCategory = () => useContext(CategoryContext);

export const useAdListState = () => {
  const state = useContext(AdListStateContext);
  if (!state) throw new Error("Can't find State Provider");
  return state;
};

export const useAdListDispatch = () => {
  const dispatch = useContext(AdListDispatchContext);
  if (!dispatch) throw new Error("Can't find Dispatch Provider");
  return dispatch;
};

export const useAdsValue = () => {
  const state = useAdListState();
  const { category } = useContext(CategoryContext);

  if (!state) throw new Error("Can't find StateProvider");
  if (!category) throw new Error("Can't find CategoryProvider");
  if (category === '전체 광고') return state.data;
  const filtered = state.data.filter(
    (item) => CategoryEnum[item.status] === category
  );
  return filtered;
};
