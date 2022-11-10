import styled from "styled-components";
import { Sick } from "types/sick";
import { ObjectType } from "typescript";

const SearchContainer = styled.div`
  background-color: pink;
  width: 43%;
  height: 10vh;
  border-radius: 15px;
  margin-top: 10px;
`;

const SerchHistory = ({ data, inputs }: { data: any; inputs: string }) => {
  const result = data?.map((res: Sick) => {
    const boldStart = res?.sickNm.toLowerCase().indexOf(inputs.toLowerCase());
    const boldEnd = res.sickNm.toLowerCase().indexOf(inputs.toLowerCase()) + inputs.length;
    if (boldStart === -1) {
      return <span key={res?.sickCd}>{res?.sickNm}</span>;
    }
    return (
      <span key={res?.sickCd}>
        {res?.sickNm.substring(0, boldEnd)}
        <span>{res?.sickNm.substring(boldStart, boldEnd)}</span>
        {res?.sickNm.substring(boldEnd)}
      </span>
    );
  });

  return (
    <SearchContainer>
      {data?.length === 0 && <span>일치하는 검색 결과 없음</span>}
      {result}
    </SearchContainer>
  );
};

export default SerchHistory;
