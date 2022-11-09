import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { searchValue } from "../../store/searchValue";
import { searchResult } from "../../store/searchResult";
import useKeyDown from "../../hooks/useKeyDown";
import { selectedSearchResultIndex } from "../../store/selectedSearchResultIndex";

const SearchForm = () => {
  const [searchInputValue, setSearchInputValue] = useRecoilState(searchValue);
  const diseaseListData = useRecoilValue(searchResult);
  const [selectedIndex, setSelectedIndex] = useRecoilState(selectedSearchResultIndex);

  const onKeyDown = useKeyDown();

  const handleChange = (e) => {
    setSearchInputValue(e.target.value);
    setSelectedIndex(-1);
  };

  const isCurrentIndexValid = selectedIndex !== -1;
  const selectedResultValueOfIndex = isCurrentIndexValid && diseaseListData[selectedIndex].sickNm;

  return (
    <Form>
      <InputWrapper>
        <SearchInput
          type="text"
          placeholder="질환명을 입력해 주세요"
          onChange={handleChange}
          onKeyDown={onKeyDown}
          value={selectedResultValueOfIndex || searchInputValue}
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
