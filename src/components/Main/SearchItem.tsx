import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { selectedSearchResultIndex } from "../../store/selectedSearchResultIndex";
import formatFontWeight from "../../utils/formatFontWeight";

interface Props {
  idx: number;
  sickNm: string;
  searchInputValue: string;
}

const SearchItem = ({ idx, sickNm, searchInputValue }: Props) => {
  const selectedIndex = useRecoilValue(selectedSearchResultIndex);

  const handleFocus = (e: React.FocusEvent<HTMLLIElement>) => {
    console.log(e.currentTarget);
  };
  return (
    // Ts에서 tabindex=0 은 아래와 같이 해야 한다.
    <Item tabIndex={0} selectedIndex={selectedIndex} idx={idx} onFocus={handleFocus} >
      {formatFontWeight(sickNm, searchInputValue)}
    </Item>
  );
};

export default SearchItem;

const Item = styled.li<{ selectedIndex: number; idx: number }>`
  ${({ theme }) => theme.flexDefault}
  width: 100%;
  min-width: 400px;
  height: 44px;
  padding: 10px;
  background-color: ${({ selectedIndex, idx }) => selectedIndex === idx && "#D0E8FD"};
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.bg.lightBlue};
  }
`;
