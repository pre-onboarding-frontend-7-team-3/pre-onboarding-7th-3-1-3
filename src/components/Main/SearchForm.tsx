import React, { useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { searchValue } from "../../store/searchValue";
<<<<<<< HEAD
=======

>>>>>>> ff1d650 (fix: 병합과정 중 Error 해결 (lint포함))
import { recentSearchList } from "../../store/searchWord";
import { searchResultState } from "../../store/searchResult";
import { selectedSearchResultIndex } from "../../store/selectedSearchResultIndex";
import useKeyDown from "../../hooks/useKeyDown";

const SearchForm = () => {
  const [searchInputValue, setSearchInputValue] = useRecoilState(searchValue);
  const [selectedIndex, setSelectedIndex] = useRecoilState(selectedSearchResultIndex);

  const diseaseListData = useRecoilValue(searchResultState);
  const [recentSearch, setRecentSearch] = useRecoilState(recentSearchList);

  const onKeyDown = useKeyDown();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInputValue(e.target.value);
      setSelectedIndex(-1);
      setRecentSearch([...recentSearch, searchInputValue]);
    },
    [diseaseListData]
  );

  const isCurrentIndexValid = selectedIndex !== -1;
  const selectedResultValue = isCurrentIndexValid && diseaseListData[selectedIndex].sickNm;

  return (
    <Form>
      <InputWrapper>
        <SearchInput
          type="text"
          placeholder="질환명을 입력해 주세요"
          onChange={handleChange}
          onKeyDown={onKeyDown}
          value={selectedResultValue || searchInputValue}
          autoFocus
        />
        <Button type="submit">검색</Button>
      </InputWrapper>
    </Form>
  );
};

export default SearchForm;

const Form = styled.section`
  display: flex;
  width: 85%;
  min-width: 500px;
  height: 70px;
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 36px;
  font-size: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  &:hover {
    background-color: rgb(244, 244, 244);
  }

  &:focus {
    background-color: white;
  }
`;

const Button = styled.button`
  width: 15%;
  height: 100%;
  font-size: 20px;
  color: white;
  background: ${({ theme }) => theme.bg.darkBlue};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;
