/* eslint-disable @typescript-eslint/no-use-before-define */
import styled from "styled-components";
import Recommend from "./Recommend";

function RecommendList() {
  return (
    <RecommendListLayout>
      <RecommendGuide>추천검색어</RecommendGuide>
      <Recommend />
    </RecommendListLayout>
  );
}

export const RecommendListLayout = styled.div`
  width: 340px;
  min-height: 50px;
  border-radius: 10px;
  border-color: #c2c8ce;
  background-color: #ffffff;
  align-items: center;
  margin-top: 3px;
  padding: 15px 15px 15px 15px;
`;

export const RecommendGuide = styled.div`
  color: #c2c8ce;
  font-size: 13px;
  margin-bottom: 8px;
`;

export default RecommendList;
