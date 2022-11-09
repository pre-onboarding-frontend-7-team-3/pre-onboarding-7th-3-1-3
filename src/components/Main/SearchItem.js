import styled from "styled-components";
import formatFontWeight from "../../utils/formatFontWeight";

const SearchItem = ({ sickNm, searchInputValue }) => {

  return <Item>{formatFontWeight(sickNm, searchInputValue)}</Item>;
};

export default SearchItem;

const Item = styled.li`
  display: flex;
  align-items: center;
  width: 85%;
  min-width: 400px;
  height: 45px;
  padding: 10px;
  border-radius: 12px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: #d0e8fd;
  }
`;
