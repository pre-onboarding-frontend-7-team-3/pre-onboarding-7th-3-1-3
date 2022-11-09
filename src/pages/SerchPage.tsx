import React, { useRef, useState } from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import isMakeSense from "utils/isMakeSense";
import Navbar from "../components/Navbar/Navbar";

const Section = styled.section`
  background-color: green;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #cae9ff;
  padding: 7.5rem 0 18.125rem 0;
`;

const Title = styled.h2`
  font-size: 2.125rem;
  font-weight: 800;
  letter-spacing: -0.018em;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 2.5rem;
`;

const SearchBarContainer = styled.div`
  display: flex;
  max-width: 490px;
  width: 100%;
  margin: 0 auto;
  border-radius: 42px;
  border: 0.2rem solid;
  border-color: #ffffff;
  background-color: #ffffff;
  align-items: center;
  padding-right: 0.5rem;
  &.focus {
    border-color: #007be9;
  }
`;

const SearchBtn = styled.button`
  color: #fff;
  background-color: #007be9;
  padding: 0.5rem;
  border-radius: 50%;
  .icon {
    width: 2rem;
    height: 2rem;
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 26.875rem;
  padding: 20px 10px 20px 24px;
`;

const SearchBarLabel = styled.label`
  position: absolute;
  color: #999999;
  font-weight: 500;
  font-size: 1.2rem;
  .icon {
    position: relative;
    top: 4px;
    width: 1.5rem;
    height: 1.5rem;
  }
  &.focus {
    display: none;
  }
`;

const SearchBarInput = styled.input`
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  border: #fff;
`;

function SerchPage() {
  const [inputs, setInputs] = useState<string>("");
  const [searchResult, setSearchResult] = useState<string>("");
  const [focus, setFocus] = useState<boolean>(false);
  const [timer, setTimer] = useState<any>(0); // 디바운싱 타이머
  const onFocus = () => setFocus(true);
  const onBlur = () => setFocus(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeSerch = (e: React.ChangeEvent<HTMLInputElement>) => {
    /* eslint-disable no-console */
    console.log("inputRef", inputRef);
    /* eslint-disable no-console */
    setInputs(e.target.value);
    if (e.target.value === "") {
      setSearchResult("");
    }
    if (timer) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(async () => {
      try {
        const cacheStorage = await caches.open("search");
        const URL = `http://localhost:4000/sick?q=${e.target.value}`;
        const responsedCache = await cacheStorage.match(URL);

        if (isMakeSense(e.target.value) && responsedCache) {
          setSearchResult(await responsedCache.json());

          /* eslint-disable no-console */
          console.log("캐시", searchResult);
          /* eslint-disable no-console */
        } else if (isMakeSense(e.target.value)) {
          const res = await fetch(URL, { method: "GET" }).then((response) => {
            const resposeClone = response.clone();
            console.log("response", response.json());
            console.log(resposeClone);
            caches.open("search").then((cache) => {
              cache.put(URL, resposeClone);
            });
            return JSON.parse(JSON.stringify(response));
          });
          setSearchResult(res);

          console.log("API호출", searchResult);
        }
      } catch (error) {
        console.error("error", error);
      }
    }, 500);
    setTimer(newTimer);
  };

  return (
    <>
      <Navbar />
      <Section>
        <Container>
          <Title>
            국내 모든 임상 시험 검색하고 <br />
            온라인으로 참여하기
          </Title>
          <SearchBarContainer className={focus ? "focus" : "blur"}>
            <InputContainer>
              <SearchBarLabel htmlFor="searchBar" className={focus ? "focus" : ""}>
                <IoIosSearch className="icon" />
                질환명을 입력해 주세요.
              </SearchBarLabel>
              <SearchBarInput
                id="searchBar"
                name="searchBar"
                type="search"
                spellCheck="false"
                ref={inputRef}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={onChangeSerch}
                value={inputs}
              />
            </InputContainer>
            <SearchBtn>
              <IoIosSearch className="icon" />
            </SearchBtn>
          </SearchBarContainer>
        </Container>
      </Section>
    </>
  );
}
export default SerchPage;
