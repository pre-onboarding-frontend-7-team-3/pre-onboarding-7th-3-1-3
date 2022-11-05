import React from 'react';
import { CategoryType } from 'models/types';
import S from './styles';
import useCategory from '../../hooks/useAdList';

const categories: CategoryType[] = ['전체 광고', '진행중', '중단됨'];

const ManageHeader = () => {
  const { setCategory } = useCategory();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;
    setCategory(value as CategoryType);
  };
  return (
    <S.Header>
      <S.Select onChange={handleChange}>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </S.Select>
      <S.Button>광고 만들기</S.Button>
    </S.Header>
  );
};

export default ManageHeader;
