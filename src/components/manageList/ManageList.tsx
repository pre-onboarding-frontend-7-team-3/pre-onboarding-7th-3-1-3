import ManageItem from 'components/manageItem/ManageItem';
import { AdType } from 'models/types';
import React from 'react';
import S from './styles';

const ManageList = ({ list }: { list: AdType[] }) => {
  return (
    <S.List>
      {list.map((item) => (
        <ManageItem key={item.id} {...item} />
      ))}
    </S.List>
  );
};

export default ManageList;
