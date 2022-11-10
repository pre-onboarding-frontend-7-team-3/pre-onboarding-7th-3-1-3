import styled from "styled-components";

import makeStringWithBolded from "utils/makeStringWithBolded";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 400px;
  max-width: 400px;
  max-height: 300px;

  border-radius: 20px;
  background-color: white;
  overflow-y: auto;
`;

interface InnerWrapperProps {
  hasSearchWord: boolean;
}
const InnerWrapper = styled.div<InnerWrapperProps>`
  display: flex;
  flex-direction: column;

  max-width: 400px;
  max-height: 300px;

  margin: ${(props) => (props.hasSearchWord ? 20 : 0)}px;

  gap: 8px;
`;

const SearchList = ({ data, searchWord }: { data: Array<object>; searchWord: string }) => {
  const NO_DATA = data.length === 0 && !!searchWord;

  return (
    <Wrapper>
      <InnerWrapper hasSearchWord={!!searchWord}>
        {NO_DATA && <span>일치하는 검색결과 없음</span>}
        {makeStringWithBolded(data, searchWord)}
      </InnerWrapper>
    </Wrapper>
  );
};

export default SearchList;
