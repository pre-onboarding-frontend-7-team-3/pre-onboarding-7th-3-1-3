import React from 'react';
import AdList from 'components/adList/AdList';
import Board from '../../components/board/Board';
import S from './styles';

const Manage = () => {
  return (
    <S.Layout>
      <S.Title>
        <h1>광고관리</h1>
      </S.Title>
      <Board>
        <AdList />
      </Board>
    </S.Layout>
  );
};

export default Manage;
