import { DataActionEnum, TrendType } from 'models/types';
import { createContext, Dispatch, useReducer } from 'react';

type State = {
  isLoading: boolean;
  data: TrendType[];
  error: string;
};

type Action =
  | { type: DataActionEnum.SET_DATA; data: TrendType[] }
  | { type: DataActionEnum.SET_IS_LOADING; isLoading: boolean }
  | { type: DataActionEnum.SET_ERROR; error: string };

type AdTrendDistpatch = Dispatch<Action>;

const initialState = {
  isLoading: false,
  data: [],
  error: '',
};

export const AdTrendStateContext = createContext<State | null>(initialState);
export const AdTrendDispatchContext = createContext<AdTrendDistpatch | null>(
  null
);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case DataActionEnum.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case DataActionEnum.SET_DATA:
      return {
        ...state,
        data: action.data,
      };
    case DataActionEnum.SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      throw new Error('Unknown Action');
  }
};

export const AdTrendProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AdTrendStateContext.Provider value={state}>
      <AdTrendDispatchContext.Provider value={dispatch}>
        {children}
      </AdTrendDispatchContext.Provider>
    </AdTrendStateContext.Provider>
  );
};
