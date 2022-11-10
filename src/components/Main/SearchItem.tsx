import { useRef } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { selectedSearchResultIndex } from "store/selectedSearchResultIndex";
import useScroll from "hooks/useScroll";

import HighlightedText from "./HighlightedText";

interface Props {
  idx: number;
  sickNm: string;
  searchInputValue: string;
}

const SearchItem = ({ idx, sickNm, searchInputValue }: Props) => {
  const selectedIndex = useRecoilValue(selectedSearchResultIndex);
  const selectedItemRef = useRef<HTMLLIElement>(null);

  useScroll(selectedIndex, idx, selectedItemRef);

  return (
    <Item selectedIndex={selectedIndex} idx={idx} ref={selectedItemRef}>
      <HighlightedText data={sickNm} searchWord={searchInputValue} />
    </Item>
  );
};

export default SearchItem;

const Item = styled.li<{ selectedIndex: number; idx: number }>`
  ${({ theme }) => theme.flexDefault}
  width: 100%;
  min-width: 500px;
  height: 44px;
  padding: 10px;
  background-color: ${({ selectedIndex, idx }) => selectedIndex === idx && "#D0E8FD"};
  border-radius: 12px;
  font-size: 14px;
  font-weight: 100;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.bg.lightBlue};
  }
`;
