import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { selectedSearchResultIndex } from "../../store/selectedSearchResultIndex";
import formatFontWeight from "../../utils/formatFontWeight";

const SearchItem = ({ idx, sickNm, searchInputValue }) => {
  const selectedIndex = useRecoilValue(selectedSearchResultIndex);
  
  return (
    <Item selectedIndex={selectedIndex} idx={idx}>
      {formatFontWeight(sickNm, searchInputValue)}
    </Item>
  );
};

export default SearchItem;

const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 400px;
  height: 44px;
  padding: 10px;
  background-color: ${({ selectedIndex, idx }) => selectedIndex === idx && "#D0E8FD"};
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #d0e8fd;
  }
`;
