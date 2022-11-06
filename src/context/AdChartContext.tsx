import { ChartActionType, ChartActionEnum, TrendEnum } from 'models/types';
import { createContext, Dispatch, useReducer } from 'react';

type State = {
  first: string;
  second: string;
  period: string;
};

const initialState: State = {
  first: 'ROAS',
  second: '광고비',
  period: '주간',
};

type ChartDispatch = Dispatch<ChartActionType>;

export const ChartStateContext = createContext<State | null>(null);
export const ChartDispatchContext = createContext<ChartDispatch | null>(null);

const reducer = (state: State, action: ChartActionType) => {
  switch (action.type) {
    case ChartActionEnum.SET_FIRST_DATA:
      return {
        ...state,
        first: action.data,
      };
    case ChartActionEnum.SET_SECOND_DATA:
      return {
        ...state,
        second: action.data,
      };
    case ChartActionEnum.SET_PERIOD:
      return {
        ...state,
        period: action.data,
      };
    default:
      throw new Error('unhandled Action');
  }
};

export const ChartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ChartStateContext.Provider value={state}>
      <ChartDispatchContext.Provider value={dispatch}>
        {children}
      </ChartDispatchContext.Provider>
    </ChartStateContext.Provider>
  );
};
