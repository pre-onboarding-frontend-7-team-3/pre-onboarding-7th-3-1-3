/* eslint-disable @typescript-eslint/no-use-before-define */
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

function Recommend() {
  return (
    <SearchResult>
      <FaSearch style={{ margin: "6px 9px", opacity: "0.4" }} />
      <SearchText readOnly />
    </SearchResult>
  );
}

export const SearchResult = styled.div`
  height: 30px;
  width: 100%;
  &: hover {
    background-color: #c2c8ce;
  }
  display: flex;
`;

export const SearchText = styled.input`
  width: 90%;
  border: none;
  &:focus {
    outline: none;
  }
  &: hover {
    background-color: #c2c8ce;
  }
`;
export default Recommend;
