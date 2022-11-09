import { useRecoilState, useRecoilValue } from "recoil";
import { useCallback } from "react";
import styled from "styled-components";
import { searchValue } from "../../store/searchValue";
import useKeyDown from "../../hooks/useKeyDown";
import { selectedSearchResultIndex } from "../../store/selectedSearchResultIndex";
import { searchResult } from "../../store/searchResult";

const SearchForm = () => {
  const [searchInputValue, setSearchInputValue] = useRecoilState(searchValue);
  const [currentSearchIndex, setCurrentSearchIndex] = useRecoilState(selectedSearchResultIndex);
  const diseaseListData = useRecoilValue(searchResult);

  const onKeyDown = useKeyDown();

  const handleChange = useCallback((e) => {
    setSearchInputValue(e.target.value);
    setCurrentSearchIndex(-1);
  }, []);

  const selectedResultValue =
    currentSearchIndex !== -1 && diseaseListData[currentSearchIndex].sickNm;

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
