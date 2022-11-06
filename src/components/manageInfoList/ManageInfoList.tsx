import { AdType } from 'models/types';
import React from 'react';
import S from './styles';

type InfoType = {
  name: string;
  data: string | number;
};

interface ManageInfoListProps {
  infoArray: InfoType[];
  onModifyMode: boolean;
}

const ManageInfoList = ({ infoArray, onModifyMode }: ManageInfoListProps) => {
  return (
    <ul>
      {infoArray.map((item) => (
        <S.List key={item.name}>
          <span>{item.name}</span>
          {onModifyMode ? (
            <S.Input name={item.name} type="text" />
          ) : (
            <span>{item.data}</span>
          )}
        </S.List>
      ))}
    </ul>
  );
};

export default ManageInfoList;
