import React from 'react';
import AdList from 'components/adList/AdList';
import ManageHeader from 'components/manageHeader/ManageHeader';
import { CategoryProvider } from 'context/CategoryContext';
import Board from '../../components/board/Board';
import S from './styles';

const Manage = () => {
  return (
    <S.Layout>
      <S.Title>
        <h1>광고관리</h1>
      </S.Title>
      <Board>
        <CategoryProvider>
          <ManageHeader />
          <AdList />
        </CategoryProvider>
      </Board>
    </S.Layout>
  );
};

export default Manage;
