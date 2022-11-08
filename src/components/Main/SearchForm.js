import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { searchValue } from "../../store/searchValue";
import { searchResult } from "../../store/searchResult";

const SearchForm = () => {
  const [searchInput, setSearchInput] = useRecoilState(searchValue);
  const [diseaseData, setDiseaseData] = useRecoilState(searchResult);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearch = async () => {
    if (!searchInput) return;
    const res = await fetch(`http://localhost:4000/sick?q=${searchInput}`);
    const data = await res.json();
    setDiseaseData(data);
  };

  useEffect(() => {
    handleSearch();
  }, [searchInput]);

  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
        <SearchInput onChange={handleChange} />
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
