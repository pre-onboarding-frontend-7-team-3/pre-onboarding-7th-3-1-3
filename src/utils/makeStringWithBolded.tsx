import styled from "styled-components";

const Bold = styled.span`
  font-weight: 700;
`;

const makeStringWithBolded = (data: any, searchWord: any) => {
  return data.map((v: any) => {
    const boldStartIndex = v.sickNm.toLowerCase().indexOf(searchWord.toLowerCase());
    const boldEndIndex =
      v.sickNm.toLowerCase().indexOf(searchWord.toLowerCase()) + searchWord.length;

    return (
      <span key={v.sickCd}>
        {v.sickNm.substring(0, boldStartIndex)}
        <Bold>{v.sickNm.substring(boldStartIndex, boldEndIndex)}</Bold>
        {v.sickNm.substring(boldEndIndex)}
      </span>
    );
  });
};

export default makeStringWithBolded;
