/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import isMakeSense from "utils/isMakeSense";

import SearchHistory from "components/SearchHistory";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 800px;
  height: auto;
  min-height: 400px;

  background-color: skyblue;
  border-radius: 10px;
  opacity: 0.9;
`;

const SearchBar = styled.input`
  display: flex;

  width: 500px;
  height: 30px;

  border-radius: 10px;
`;

const SearchHistoryWrapper = styled.div`
  height: 200px;
`;

function Home() {
  const [searchResult, setSearchResult] = useState();
  const [search, setSearch] = useState("");
  const [timer, setTimer] = useState(0); // 디바운싱 타이머

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      setSearchResult("");
    }

    // 디바운싱
    if (timer) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(async () => {
      try {
        const cacheStorage = await caches.open("search");
        const URL = `http://localhost:4000/sick?q=${e.target.value}`;
        const responsedCache = await cacheStorage.match(URL);

        if (isMakeSense(e.target.value) && responsedCache) {
          // (가치 판단,캐시에 있음)
          setSearchResult(await responsedCache.json());

          console.log("캐시에서 꺼냄", searchResult);
        } else if (isMakeSense(e.target.value)) {
          // (가치 판단,캐시에 없음)

          // API 호출
          const res = await fetch(URL, { method: "GET" }).then((fetchRes) => {
            // await cacheStorage.put(URL, res);

            // 캐시에 저장
            let responseClone = fetchRes.clone();
            caches.open("search").then((cache) => {
              cache.put(URL, responseClone);
            });

            return fetchRes.json(); // response를 이미 이곳에서 사용을 하기 때문이다.
          });

          setSearchResult(res);

          console.log("API로 꺼냄", searchResult);
        }
      } catch (err) {
        console.error("error", err);
      }
    }, 750);

    setTimer(newTimer);
  };

  return (
    <Wrapper>
      <SearchWrapper>
        <SearchBar type="text" value={search} onChange={onChangeSearch} />
        <SearchHistoryWrapper>
          {searchResult && <SearchHistory data={searchResult} search={search} />}
        </SearchHistoryWrapper>
      </SearchWrapper>
    </Wrapper>
  );
}

export default Home;
