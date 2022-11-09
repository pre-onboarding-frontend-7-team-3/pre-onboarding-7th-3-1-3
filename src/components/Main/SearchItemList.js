import styled from "styled-components";
import SearchItem from "./SearchItem";
import useSearch from "../../hooks/useSearch";
import { useRecoilValue } from "recoil";
import { searchValue } from "../../store/searchValue";

const SearchItemList = () => {
  const searchInputValue = useRecoilValue(searchValue);
  const diseaseData = useSearch();

  const DEFAULT_TEXT = searchInputValue ? "추천 검색어" : "검색어 없음";

  return (
    <ListWrapper>
      <ItemWrapper>
        <DefaultText>{DEFAULT_TEXT}</DefaultText>
        {searchInputValue && (
          <>
            {diseaseData?.map(({ sickCd, sickNm }) => (
              <SearchItem key={sickCd} sickNm={sickNm} searchInputValue={searchInputValue} />
            ))}
          </>
        )}
      </ItemWrapper>
    </ListWrapper>
  );
};

export default SearchItemList;

const ListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 85%;
  min-width: 500px;
  /* min-width: 300px; */
  min-height: 100px;
  max-height: 360px;
  overflow-y: auto;
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
