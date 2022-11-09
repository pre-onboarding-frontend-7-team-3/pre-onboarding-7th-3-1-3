/* eslint-disable @typescript-eslint/no-use-before-define */
import styled from "styled-components";

function SearchInput() {
  return <Search placeholder=" 질환명을 입력해 주세요." />;
}

export default SearchInput;

export const Search = styled.input`
  width: 200px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  border: none;
  &:focus {
    outline: none;
  }
`;
