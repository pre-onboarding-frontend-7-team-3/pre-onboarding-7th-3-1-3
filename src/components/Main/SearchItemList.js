import styled from "styled-components";
import SearchItem from "./SearchItem";

const SearchItemList = () => {
  const RECOMMENDATIONS = "추천 검색어";
  // const EMPTY_INPUT = "검색어를 입력해주세요";
  // const NO_RESULTS = "검색 결과가 없습니다";
  return (
    <ListWrapper>
      <DefaultText>{RECOMMENDATIONS}</DefaultText>
      <ItemWrapper>
        <SearchItem />
        <SearchItem />
        <SearchItem />
      </ItemWrapper>
    </ListWrapper>
  );
};

export default SearchItemList;

const ListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 85%;
  min-width: 400px;
  min-height: 150px;
  height: 100%;
  padding: 26px;
  border-radius: 24px;
  background-color: white;
`;

const ItemWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;

const DefaultText = styled.div`
  margin-bottom: 10px;
  color: grey;
  font-size: 14px;
  font-weight: 900;
`;
