import styled from "styled-components";

const Header = () => {
  const HEADING_FRONT = "국내 모든 임상시험 검색하고";
  const HEADING_BACK = "온라인으로 참여하기";

  return (
    <HeaderWrapper>
      <div>{HEADING_FRONT}</div>
      <div>{HEADING_BACK}</div>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  width: 550px;
  min-width: 380px;
  margin: 20px 0;
  line-height: 70px;
  text-align: center;
  font-size: 40px;
  font-weight: 900;
`;
