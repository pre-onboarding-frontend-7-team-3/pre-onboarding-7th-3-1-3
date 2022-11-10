import { useRecoilValue } from "recoil";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { selectedSearchResultIndex } from "../../store/selectedSearchResultIndex";

import HighlightedText from "./HighlightedText";

interface Props {
  idx: number;
  sickNm: string;
  searchInputValue: string;
}

const SearchItem = ({ idx, sickNm, searchInputValue }: Props) => {
  const selectedIndex = useRecoilValue(selectedSearchResultIndex);
  const selected = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const isSelected = selectedIndex === idx;
    if (isSelected) {
      selected.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
  }, [selectedIndex, idx]);

  return (
    <Item selectedIndex={selectedIndex} idx={idx} ref={selected}>
      <HighlightedText data={sickNm} searchWord={searchInputValue} />
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
