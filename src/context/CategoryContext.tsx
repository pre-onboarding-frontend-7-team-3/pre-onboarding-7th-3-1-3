import { CategoryType } from 'models/types';
import { createContext, useState, useMemo } from 'react';

const initialState = {
  category: '전체',
  setCategory: (category: CategoryType) => {},
};

export const CategoryContext = createContext(initialState);

export const CategoryContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [category, setCategory] = useState<CategoryType>('전체 광고');
  const value = useMemo(() => ({ category, setCategory }), [category]);
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
