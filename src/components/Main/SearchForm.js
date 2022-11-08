import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { searchValue } from "../../store/searchValue";

const SearchForm = () => {
  const setSearchInput = useSetRecoilState(searchValue);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
        <SearchInput
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <Button type="submit">검색</Button>
      </InputWrapper>
    </Form>
  );
};

export default SearchForm;

const Form = styled.form`
  display: flex;
  width: 85%;
  min-width: 400px;
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
  padding-left: 26px;
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
