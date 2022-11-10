import React, { useState } from "react";
import styled from "styled-components";

import getDataAndRegisterCache from "../apis/getDataAndRegisterCache";

import { isMakeSense, isEmptyInput } from "../utils/checkValidationOfInput";
import makeTrieBySearchWord from "../utils/makeTireBySearchWord";
import getCachedData from "../utils/getCachedData";
import filterCachedData from "../utils/filterCachedData";

import SearchHistory from "../components/SearchHistory";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  width: 100vw;
  height: 100vh;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50%;
  min-height: 800px;

  background-color: #cae9ff;
  border-radius: 10px;
  opacity: 0.9;
`;

const TitleWrappr = styled.div`
  margin-bottom: 10px;

  font-size: 36px;
  font-weight: 800;
  color: black;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 400px;
  height: 60px;

  border-radius: 50px;
  background-color: white;
`;

const SearchBar = styled.input`
  display: flex;

  width: 330px;
  height: 40px;

  margin-left: 20px;

  border: 0px;
`;

const SearchHistoryWrapper = styled.div`
  height: 200px;
`;

function Home() {
  const [searchResult, setSearchResult] = useState<object[]>([]);
  const [searchWord, setSearchWord] = useState<string>("");
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const CURRENT_SEARCH_TARGET = e.target.value;
    setSearchWord(CURRENT_SEARCH_TARGET);

    if (isEmptyInput(CURRENT_SEARCH_TARGET)) {
      setSearchResult([]);
      return;
    }
    if (timer) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(async () => {
      const TrieWordList = makeTrieBySearchWord(CURRENT_SEARCH_TARGET);
      const cachedData = await getCachedData(TrieWordList);

      try {
        if (isMakeSense(CURRENT_SEARCH_TARGET) && cachedData) {
          const JsonCachedData = await cachedData.json();
          setSearchResult(filterCachedData(JsonCachedData, CURRENT_SEARCH_TARGET));
        }
        if (isMakeSense(CURRENT_SEARCH_TARGET) && !cachedData) {
          const JsonApiData = await getDataAndRegisterCache(CURRENT_SEARCH_TARGET);
          setSearchResult(JsonApiData);
        }
      } catch (err) {
        return new Error(String(err));
      }
    }, 250);

    setTimer(newTimer);
  };

  return (
    <Wrapper>
      <SearchWrapper>
        <TitleWrappr>국내 모든 임상시험 검색하고</TitleWrappr>
        <TitleWrappr>온라인으로 참여하기</TitleWrappr>
        <SearchBarWrapper>
          <SearchBar
            type="text"
            value={searchWord}
            onChange={onChangeSearch}
            placeholder="질환명을 입력해 주세요."
          />
        </SearchBarWrapper>
        <SearchHistoryWrapper>
          {searchResult && <SearchHistory data={searchResult} search={searchWord} />}
        </SearchHistoryWrapper>
      </SearchWrapper>
    </Wrapper>
  );
}

export default Home;
