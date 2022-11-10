import styled from "styled-components";
import SearchItem from "./SearchItem";
import useSearch from "../../hooks/useSearch";
import { useRecoilValue } from "recoil";
import { searchValue } from "../../store/searchValue";

import { recentSearchList, recommendationList } from "../../store/searchWord";
import { IoIosSearch } from "react-icons/io";

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
            <RecentSearchResultContainer>
              <Title>최근 검색어</Title>
              {recentSearch.length > 0 ? (
                reverseRecentSearch.slice(0, maximumList).map((searched, idx) => {
                  return (
                    <RecentText key={idx}>
                      <IoIosSearch className="icon" />
                      {searched}
                    </RecentText>
                  );
                })
              ) : (
                <RecentText className="none-matched">최근 검색어가 없습니다</RecentText>
              )}
            </RecentSearchResultContainer>
            <RecommendationsContainer>
              <Title>추천 검색어로 검색해보세요</Title>
              <Recommendations>
                {recommendationList.map((recommendation, idx) => (
                  <Recommendation key={idx}>{recommendation}</Recommendation>
                ))}
              </Recommendations>
            </RecommendationsContainer>
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

const RecentSearchResultContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.05);
`;

const RecentText = styled.span`
  width: 100%;
  padding: 0.5rem 2.2rem 0.5rem 2.2rem;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: -0.06em;
  line-height: 1.7;
  &:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
  &.none-matched {
    color: #b3b3b3;
    &:hover {
      background-color: #fff;
      cursor: default;
    }
  }
  .icon {
    position: relative;
    top: 6px;
    left: -7px;
    width: 1.5rem;
    height: 1.5rem;
    color: #808080;
  }
`;

const Title = styled.h2`
  color: #808080;
  padding: 1.2rem 0 0.5rem 1.8rem;
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: -0.018em;
  line-height: 1.6;
`;

const RecommendationsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Recommendations = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0.8rem 1.8rem 2rem 2rem;
  gap: 0.2rem;
`;

const Recommendation = styled.button`
  width: 100%;
  height: 1.5rem;
  padding: 1.3rem 0;
  font-weight: bold;
  line-height: 0;
  background-color: #eef8ff;
  border-radius: 20px;
  color: #007be9;
`;
