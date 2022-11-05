import { AdType, DataActionEnum } from 'models/types';
import { createContext, useReducer, Dispatch } from 'react';

type State = {
  isLoading: boolean;
  data: AdType[];
  error: string;
};

type AdsDistpatch = Dispatch<Action>;

type Action =
  | { type: DataActionEnum.SET_DATA; data: AdType[] }
  | { type: DataActionEnum.SET_IS_LOADING; isLoading: boolean }
  | { type: DataActionEnum.SET_ERROR; error: string };

const initialState = {
  isLoading: false,
  data: [],
  error: '',
};

export const AdListStateContext = createContext<State | null>(initialState);
export const AdListDispatchContext = createContext<AdsDistpatch | null>(null);

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

export const AdListProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AdListStateContext.Provider value={state}>
      <AdListDispatchContext.Provider value={dispatch}>
        {children}
      </AdListDispatchContext.Provider>
    </AdListStateContext.Provider>
  );
};
