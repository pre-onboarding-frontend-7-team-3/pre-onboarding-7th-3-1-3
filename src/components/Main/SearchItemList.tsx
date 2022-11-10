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
            <RecentContainer>
              <RecentTitle>최근 검색어</RecentTitle>
              {recentSearch.length > 0 ? (
                reverseRecentSearch.slice(0, maximumList).map((searched) => {
                  return (
                    <RecentText key={searched}>
                      <IoIosSearch className="icon" />
                      {searched}
                    </RecentText>
                  );
                })
              ) : (
                <RecentText className="noting">최근 검색어가 없습니다</RecentText>
              )}
            </RecentContainer>
            <RecommendContainer>
              <RecentTitle>추천 검색어로 검색해보세요</RecentTitle>
              <Recommendations>
                {recommendationList.map((recommendation) => (
                  <Recommendation key={recommendation}>{recommendation}</Recommendation>
                ))}
              </Recommendations>
            </RecommendContainer>
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


const RecentContainer = styled.div`
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
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: -0.06em;
  line-height: 1.7;
  padding: 0.5rem 2.2rem 0.5rem 2.2rem;
  &:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
  &.noting {
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
    color: #808080;
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const RecentTitle = styled.h2`
  color: #808080;
  padding: 1.2rem 0 0.5rem 1.8rem;
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: -0.018em;
  line-height: 1.6;
`;

const RecommendContainer = styled.div`
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
  gap: 0.2rem;
  padding: 0.8rem 1.8rem 2rem 2rem;
`;

const Recommendation = styled.button`
  width: 100%;
  height: 1.5rem;
  color: #007be9;
  font-weight: bold;
  background-color: #eef8ff;
  border-radius: 20px;
  padding: 1.3rem 0;
  line-height: 0;
`;

