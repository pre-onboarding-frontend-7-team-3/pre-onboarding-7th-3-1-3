import styled from "styled-components";
import SearchItem from "./SearchItem";
import useSearch from "../../hooks/useSearch";

const SearchItemList = () => {
  const diseaseData = useSearch();

  const NO_RESULTS = "검색어 없음";
  // const RECOMMENDATIONS = "추천 검색어";

  return (
    <ListWrapper>
      <ItemWrapper>
      <DefaultText>{NO_RESULTS}</DefaultText>
        {diseaseData.map(({ sickCd, sickNm }) => (
          <SearchItem key={sickCd} sickNm={sickNm} />
        ))}
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
  min-height: 100px;
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
