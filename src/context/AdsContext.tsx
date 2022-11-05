import { AdType, DataActionEnum } from 'models/types';
import { createContext, Dispatch, useReducer } from 'react';

type State = {
  isLoading: boolean;
  data: AdType[];
  error: string;
};

type Action =
  | { type: DataActionEnum.SET_DATA; data: AdType[] }
  | { type: DataActionEnum.SET_IS_LOADING; isLoading: boolean }
  | { type: DataActionEnum.SET_ERROR; error: string };

type AdsDistpatch = Dispatch<Action>;

const initialState = {
  isLoading: false,
  data: [],
  error: '',
};

export const AdsStateContext = createContext<State | null>(initialState);
export const AdsDispatchContext = createContext<AdsDistpatch | null>(null);

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

export const AdsProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AdsStateContext.Provider value={state}>
      <AdsDispatchContext.Provider value={dispatch}>
        {children}
      </AdsDispatchContext.Provider>
    </AdsStateContext.Provider>
  );
};
