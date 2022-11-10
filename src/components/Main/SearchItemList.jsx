import styled from "styled-components";
import SearchItem from "./SearchItem";
import useSearch from "../../hooks/useSearch";
import { useRecoilValue } from "recoil";
import { searchValue } from "../../store/searchValue";

const SearchItemList = () => {
  const searchInputValue = useRecoilValue(searchValue);
  const diseaseListData = useSearch();

  const DEFAULT_TEXT = searchInputValue ? "추천 검색어" : "검색어 없음";
  // useRef 하나 주고, 그 ref 따라서, scrollTo
  return (
    <ListWrapper>
      <ItemWrapper>
        <DefaultText>{DEFAULT_TEXT}</DefaultText>
        {searchInputValue && (
          // 여기 내부에서만 이용할 수 있는 ref
          //
          <>
            {diseaseListData.length ? (
              diseaseListData.map(({ sickCd, sickNm }, idx) => (
                <SearchItem
                  key={sickCd}
                  idx={idx}
                  sickNm={sickNm}
                  searchInputValue={searchInputValue}
                />
              ))
            ) : (
              <EmptyResult>검색결과가 없습니다.</EmptyResult>
            )}
          </>
        )}
      </ItemWrapper>
    </ListWrapper>
  );
};

export default SearchItemList;

const ListWrapper = styled.section`
  ${({ theme }) => theme.flexColumn}
  width: 85%;
  min-width: 500px;
  max-height: 400px;
  overflow-y: auto;
  padding: 26px;
  border-radius: 24px;
  background-color: white;
`;

const ItemWrapper = styled.ul`
  ${({ theme }) => theme.flexColumn}
`;

const DefaultText = styled.div`
  margin-bottom: 10px;
  padding-left: 10px;
  color: ${({ theme }) => theme.bg.grey};
  font-size: 14px;
  font-weight: 900;
`;

const EmptyResult = styled.div`
  color: ${({ theme }) => theme.bg.grey};
  ${({ theme }) => theme.flexCenter}
`;
