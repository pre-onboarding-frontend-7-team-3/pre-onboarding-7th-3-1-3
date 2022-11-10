import styled from "styled-components";

const Bold = styled.span`
  font-weight: 700;
`;

const FormatFontWeight = ({ data, searchWord }: { data: string; searchWord: string }) => {
  const boldStartIndex = data.toLowerCase().indexOf(searchWord.toLowerCase());
  const boldEndIndex = data.toLowerCase().indexOf(searchWord.toLowerCase()) + searchWord.length;

  return (
    <span>
      {data.substring(0, boldStartIndex)}
      <Bold>{data.substring(boldStartIndex, boldEndIndex)}</Bold>
      {data.substring(boldEndIndex)}
    </span>
  );
};

export default FormatFontWeight;
