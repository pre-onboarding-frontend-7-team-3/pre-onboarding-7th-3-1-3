import { useRecoilState } from "recoil";
import styled from "styled-components";
import { searchValue } from "../../store/searchValue";
import useKeyDown from "../../hooks/useKeyDown";

const SearchForm = () => {
  const [searchInput, setSearchInput] = useRecoilState(searchValue);
  const onKeyDown = useKeyDown();

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <Form>
      <InputWrapper>
        <SearchInput
          type="text"
          placeholder="질환명을 입력해 주세요"
          onChange={handleChange}
          onKeyDown={onKeyDown}
          value={searchInput}
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
  border: none;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

const Button = styled.button`
  width: 15%;
  height: 100%;
  font-size: 20px;
  color: white;
  background: #357ae1;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;
