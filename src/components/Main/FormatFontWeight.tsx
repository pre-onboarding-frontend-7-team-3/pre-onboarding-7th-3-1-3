import styled from "styled-components";

interface Props {
  data: string;
  searchWord: string;
}

<<<<<<<< HEAD:src/components/Main/HighlightedText.tsx
const HighlightedText = ({ data, searchWord }: Props) => {
========
const FormatFontWeight = ({ data, searchWord }: { data: string; searchWord: string }) => {
>>>>>>>> ff1d650 (fix: 병합과정 중 Error 해결 (lint포함)):src/components/Main/FormatFontWeight.tsx
  const boldStartIndex = data.toLowerCase().indexOf(searchWord.toLowerCase());
  const boldEndIndex = data.toLowerCase().indexOf(searchWord.toLowerCase()) + searchWord.length;

  return (
    <span>
      {data.substring(0, boldStartIndex)}
      <MatchingText>{data.substring(boldStartIndex, boldEndIndex)}</MatchingText>
      {data.substring(boldEndIndex)}
    </span>
  );
};

export default HighlightedText;

const MatchingText = styled.span`
  font-weight: 700;
`;
