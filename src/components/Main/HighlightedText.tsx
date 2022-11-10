import styled from "styled-components";

interface Props {
  data: string;
  searchWord: string;
}

const HighlightedText = ({ data, searchWord }: Props) => {
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
  font-size: 16px;
  font-weight: 900;
`;
