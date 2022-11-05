import { DateActionType, DateActionEnum } from 'models/types';
import { createContext, Dispatch, useReducer } from 'react';

type State = {
  startDate: Date | null;
  endDate: Date | null;
};

const initialState: State = {
  startDate: new Date(),
  endDate: new Date(),
};

type DateDispatch = Dispatch<DateActionType>;

export const DateStateContext = createContext<State | null>(null);
export const DateDispatchContext = createContext<DateDispatch | null>(null);

const reducer = (state: State, action: DateActionType) => {
  switch (action.type) {
    case DateActionEnum.SET_START:
      return {
        ...state,
        startDate: action.date,
      };
    case DateActionEnum.SET_END:
      return {
        ...state,
        endDate: action.date,
      };
    default:
      throw new Error('unhandled Action');
  }
};

export const DateContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DateStateContext.Provider value={state}>
      <DateDispatchContext.Provider value={dispatch}>
        {children}
      </DateDispatchContext.Provider>
    </DateStateContext.Provider>
  );
};
