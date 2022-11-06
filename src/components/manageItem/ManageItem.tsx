import React, { useState } from 'react';
import { AdType } from 'models/types';
import ManageInfoList from 'components/manageInfoList/ManageInfoList';
import { formatDate, formatMoney } from 'utils/formatData';
import S from './styles';

const ENDED = 'ended';
const ManageItem = (item: AdType) => {
  const { adType, title, budget, status, startDate, endDate, report } = item;
  const { roas, cost, convValue } = report;
  const [onModifyMode, SetOnModifyMode] = useState(false);

  let date = formatDate(startDate);
  if (status === ENDED && endDate) {
    date += ` (${formatDate(endDate)})`;
  }
  const infoArray = [
    { name: '상태', data: status === 'active' ? '진행중' : '완료' },
    { name: '광고 생성일', data: date },
    { name: '일 희망 예산', data: `${formatMoney(budget)}원` },
    { name: '광고수익률', data: `${roas}%` },
    { name: '매출', data: `${formatMoney(convValue)}원` },
    { name: '광고 비용', data: `${formatMoney(cost)}원` },
  ];
  const handleClick = () => {
    SetOnModifyMode((prev) => !prev);
  };
  return (
    <S.Wrapper modifyMode={onModifyMode}>
      <h1>{`${adType}_${title}`}</h1>
      <ManageInfoList infoArray={infoArray} onModifyMode={onModifyMode} />
      <S.Button type="button" onClick={handleClick}>
        수정하기
      </S.Button>
    </S.Wrapper>
  );
};

export default ManageItem;
