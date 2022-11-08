import styled from "styled-components";

const SearchItem = ({sickNm}) => {
  return <Item>{sickNm}</Item>;
};

export default SearchItem;

const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 45px;
  font-size: 22px;
`;
