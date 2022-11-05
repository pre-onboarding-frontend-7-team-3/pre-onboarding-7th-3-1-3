import React from 'react';
import { RiLightbulbLine } from 'react-icons/ri';
import S from './styles';

const Guide = () => {
  return (
    <S.Layout>
      <S.Box>
        <button type="button">
          <RiLightbulbLine />
        </button>
        <S.TextBox>
          <h3>레버 이용 가이드</h3>
          <p>시작하기 전에 알아보기</p>
        </S.TextBox>
      </S.Box>
      <p>레버는 함께 만들어갑니다.</p>
      <p>이용약관</p>
    </S.Layout>
  );
};

export default Guide;
