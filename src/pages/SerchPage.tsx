import React, { useState, useRef } from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { useRecoilState } from "recoil";
import SearchModal from "../components/SerchModal";
import { recentSearchList } from "../recoil/SearchWord";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
`;

const Container = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #cae9ff;
  padding: 7.5rem 0 11rem 0;
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
  max-width: 35rem;
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

const SearchBarForm = styled.form`
  display: flex;
  width: 100%;
  align-items: center;
`;

const SearchBtn = styled.button`
  color: #fff;
  background-color: #007be9;
  padding: 0.5rem;
  border-radius: 50%;
  width: 3.3rem;
  height: 3.3rem;
  .icon {
    width: 2rem;
    height: 2rem;
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
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
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: -0.018em;
  line-height: 1.6;
  border: #fff;
`;
function MainPage(): React.ReactElement {
  const [input, setInput] = useState("");
  const [focused, setFocused] = useState(false);
  const [recentSearch, setRecentSearch] = useRecoilState<string[]>(recentSearchList);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      setRecentSearch([...recentSearch, input]);
      setInput("");
    }
  };
  return (
    <Section>
      <Container>
        <Title>
          국내 모든 임상 시험 검색하고 <br />
          온라인으로 참여하기
        </Title>
        <SearchBarContainer className={focused ? "focus" : "blur"}>
          <SearchBarForm onSubmit={handleSearch}>
            <InputContainer>
              <SearchBarLabel htmlFor="searchBar" className={input || focused ? "focus" : ""}>
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
                onChange={onChange}
                value={input}
              />
            </InputContainer>
            <SearchBtn>
              <IoIosSearch className="icon" />
            </SearchBtn>
          </SearchBarForm>
        </SearchBarContainer>
        {focused ? <SearchModal input={input} /> : ""}
      </Container>
    </Section>
  );
}

export default MainPage;
