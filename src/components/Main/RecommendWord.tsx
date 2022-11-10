import { recommendationList } from "store/searchWord";
import styled from "styled-components";

const RecommendWord = () => {
  return (
    <RecommendationsContainer>
      <Title>추천 검색어로 검색해보세요</Title>
      <Recommendations>
        {recommendationList.map((recommendation, idx) => (
          <Recommendation key={idx}>{recommendation}</Recommendation>
        ))}
      </Recommendations>
    </RecommendationsContainer>
  );
};
export default RecommendWord;

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

const Title = styled.h2`
  color: #808080;
  padding: 1.2rem 0 0.5rem 1.8rem;
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: -0.018em;
  line-height: 1.6;
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
