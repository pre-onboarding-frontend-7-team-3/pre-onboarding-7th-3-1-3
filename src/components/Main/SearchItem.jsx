import { useRecoilValue } from "recoil";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { selectedSearchResultIndex } from "../../store/selectedSearchResultIndex";
import formatFontWeight from "../../utils/formatFontWeight";

const SearchItem = ({ idx, sickNm, searchInputValue }) => {
  const selectedIndex = useRecoilValue(selectedSearchResultIndex);
  const selected = useRef();

  useEffect(() => {
    const isSelected = selectedIndex === idx;
    if (isSelected) {
      selected.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
  }, [selectedIndex, idx]);

  return (
    <Item selectedIndex={selectedIndex} idx={idx} ref={selected}>
      {formatFontWeight(sickNm, searchInputValue)}
    </Item>
  );
};

export default SearchItem;

const Item = styled.li`
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
