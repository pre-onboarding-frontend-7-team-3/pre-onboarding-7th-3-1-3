import styled from "styled-components";

const SearchForm = () => {
  return (
    <Form>
      <InputWrapper>
        <SearchInput />
        <Button type="submit">검색</Button>
      </InputWrapper>
    </Form>
  );
};

export default SearchForm;

const Form = styled.form`
  position: relative;
  display: flex;
  width: 85%;
  min-width: 400px;
  height: 50px;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 10px;
`;

const Button = styled.button`
  width: 15%;
  height: 100%;
  font-size: 16px;
  color: white;
  background: #357ae1;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
`;
