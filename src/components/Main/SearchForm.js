import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { searchValue } from "../../store/searchValue";

const SearchForm = () => {
  // const setSearchInput = useSetRecoilState(searchValue);
  const [searchInput, setSearchInput] = useRecoilState(searchValue);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setSearchInput({ [name]: value });
  // };

  // useEffect(() => {
  //   console.log("updated");
  // }, [searchInput]);
  return (
    <Form>
      <InputWrapper>
        <SearchInput
          type="text"
          placeholder="질환명을 입력해 주세요"
          onChange={handleChange}
          // name="input"
          // value={searchInput.input}
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
