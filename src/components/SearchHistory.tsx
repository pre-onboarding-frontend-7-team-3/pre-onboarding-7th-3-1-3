/* eslint-disable no-console */
/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 500px;
  max-height: 200px;

  gap: 5px;

  background-color: white;
  overflow-y: auto;
`;

const B = styled.span`
  font-weight: 700;
`;

type ObjectType = {
  sickCd: string;
  sickNm: string;
};

const SearchHistory = ({ data, search }: { data: any; search: string }) => {
  // bold 처리 함수
  const result = data.map((v: ObjectType) => {
    const boldStartIndex = v.sickNm.toLowerCase().indexOf(search.toLowerCase());
    const boldEndIndex = v.sickNm.toLowerCase().indexOf(search.toLowerCase()) + search.length;

    if (boldStartIndex === -1) {
      return <span key={v.sickCd}>{v.sickNm}</span>;
    }

    return (
      <span key={v.sickCd}>
        {v.sickNm.substring(0, boldStartIndex)}
        <B>{v.sickNm.substring(boldStartIndex, boldEndIndex)}</B>
        {v.sickNm.substring(boldEndIndex)}
      </span>
    );
  });
  return (
    <Wrapper>
      {data.length === 0 && <span>일치하는 검색결과 없음</span>}
      {result}
    </Wrapper>
  );
};

export default SearchHistory;
