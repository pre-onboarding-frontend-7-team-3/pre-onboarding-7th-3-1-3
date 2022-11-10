import React from "react";
import styled from "styled-components";

const Navbar = (): JSX.Element => {
  const Section = styled.section`
    width: 90vw;
    height: 3.5rem;
    background-color: white;
  `;

  const Container = styled.article`
    width: 70rem;
    margin: 0 auto;
    position: static;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
  `;

  const Logocontainer = styled.div`
    display: flex;
    align-items: center;
  `;

  const LogoImg = styled.img`
    height: 2.2rem;
  `;

  const LogoTitle = styled.button`
    font-size: 1.5rem;
    line-height: 1.6;
    font-weight: 800;
    letter-spacing: -0.1em;
    padding: 0.5rem;
    background-color: transparent;
    color: #1e2025;
    border: none;
  `;

  const NavBtncontainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
  `;

  const NavBtn = styled.button`
    font-size: 1rem;
    line-height: 1.6;
    font-weight: 600;
    letter-spacing: -0.018em;
    padding: 0.5rem 1rem;
    background-color: transparent;
    color: #1e2025;
    border: none;
  `;
  return (
    <Section>
      <Container>
        <Logocontainer>
          <LogoImg
            src="https://st3.depositphotos.com/4060975/19348/v/450/depositphotos_193487222-stock-illustration-conical-flask-colored-line-icon.jpg"
            alt="로고 이미지"
          />
          <LogoTitle>한국임상정보</LogoTitle>
        </Logocontainer>
        <NavBtncontainer>
          <NavBtn>소개</NavBtn>
          <NavBtn>질문과 답변</NavBtn>
          <NavBtn>소식받기</NavBtn>
          <NavBtn>제휴/문의</NavBtn>
        </NavBtncontainer>
      </Container>
    </Section>
  );
};

export default Navbar;

const Section = styled.section`
  display: flex;
  width: 85%;
  min-width: 500px;
  height: 3.5rem;
  border-radius: 24px;
  background-color: white;
  overflow-x: hidden;
`;

const Container = styled.article`
  position: static;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70rem;
  padding: 14px;
  margin: 0 auto;
  border-radius: 40px;
`;

const Logocontainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 2.2rem;
`;

const LogoTitle = styled.button`
  min-width: 130px;
  line-height: 1.6;
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.1em;
  background-color: transparent;
  color: #1e2025;
  border: none;
`;

const NavBtncontainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const NavBtn = styled.button`
  min-width: 80px;
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 600;
  letter-spacing: -0.018em;
  background-color: transparent;
  color: #1e2025;
  border: none;
`;
