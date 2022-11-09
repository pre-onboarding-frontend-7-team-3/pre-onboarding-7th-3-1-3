/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-use-before-define */
import styled from "styled-components";
import InputContainer from "components/SearchBox/InputContainer";
import RecommendList from "components/Recommend/RecommendList";
import axios from "axios";
import { baseURL } from "config";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    axios(baseURL).then((res: any) => console.log(res.data, 111));
  }, []);

  return (
    <Wrapper>
      <Title>
        국내 모든 임상 실험 검색하고 <br />
        온라인으로 참여하기
      </Title>
      <InputContainer />
      <RecommendList />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #cae9ff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.6;
  margin: 30px 0 20px 0;
  font-family: inherit;
  text-align: center;
`;

export default Home;
