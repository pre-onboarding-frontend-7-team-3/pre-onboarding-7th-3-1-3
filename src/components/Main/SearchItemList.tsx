import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { searchValue } from "../../store/searchValue";
import { recentSearchList, recommendationList } from "../../store/searchWord";
// import { IoIosSearch } from "react-icons/io";
import useSearch from "../../hooks/useSearch";
import SearchItem from "./SearchItem";
import RecentSearchWord from "./RecentSearchWord";
import RecommendWord from "./RecommendWord";

const SearchItemList = () => {
  const searchInputValue = useRecoilValue(searchValue);
  const diseaseListData = useSearch();

  const recentSearch = useRecoilValue(recentSearchList);
  const reverseRecentSearch = [...recentSearch].reverse();
  const maximumList = 5;

  return (
    <ListWrapper>
      <ItemWrapper>
        {searchInputValue ? (
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
        ) : (
          <>
            <RecentSearchWord />
            <RecommendWord />
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
  padding: 26px;
  border-radius: 24px;
  background-color: white;
  overflow-y: auto;
`;

const ItemWrapper = styled.ul`
  ${({ theme }) => theme.flexColumn}
`;

const EmptyResult = styled.div`
  ${({ theme }) => theme.flexCenter}
  color: ${({ theme }) => theme.bg.grey};
`;
