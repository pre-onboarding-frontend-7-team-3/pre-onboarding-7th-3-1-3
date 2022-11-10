import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { useRecoilValue } from "recoil";
import { recentSearchList } from "store/searchWord";

const RecentSearchWord = () => {
  const recentSearch = useRecoilValue(recentSearchList);
  const reverseRecentSearch = [...recentSearch].reverse();
  const maximumList = 5;
  return (
    <RecentContainer>
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
    </RecentContainer>
  );
};

export default RecentSearchWord;

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
