import React from 'react';
import AdList from 'components/adList/AdList';
import ManageHeader from 'components/manageHeader/ManageHeader';
import ManageList from 'components/manageList/ManageList';
import { AdType } from 'models/types';
import Board from '../../components/board/Board';
import S from './styles';
import AdListJson from '../../json/ad-list-data-set.json';

const Manage = () => {
  // fetch로직추가필요
  const adList: AdType[] = AdListJson.ads;
  return (
    <S.Layout>
      <S.Title>
        <h1>광고관리</h1>
      </S.Title>
      <Board>
        <ManageHeader />
        <ManageList />
      </Board>
    </S.Layout>
  );
};

export default Manage;
