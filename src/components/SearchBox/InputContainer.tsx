/* eslint-disable @typescript-eslint/no-use-before-define */
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import SearchInput from "./SearchInput";

function InputContainer() {
  return (
    <InputLayout>
      <FaSearch style={{ marginLeft: "20px" }} />
      <SearchInput />
      <Searchbutton>검색</Searchbutton>
    </InputLayout>
  );
}

export const InputLayout = styled.div`
  height: 50px;
  width: 320px;
  border-radius: 42px;
  border-color: #c2c8ce;
  background-color: #ffffff;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Searchbutton = styled.div`
  width: 50px;
  height: 100%;
  background-color: #347ae1;
  color: #ffffff;
  font-weight: 700;
  font-size: 13px;
  border-radius: 0 42px 42px 0;
  display: flex;
  align-items: center;
  padding-left: 20px;
  cursor: pointer;
`;

export default InputContainer;
