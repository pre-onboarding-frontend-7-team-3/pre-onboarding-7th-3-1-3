import styled from "styled-components";

const Header = () => {
  const HEADING = "국내 모든 임상시험 검색하고 온라인으로 참여하기";

  return <HeaderWrapper>{HEADING}</HeaderWrapper>;
};

export default Header;

const HeaderWrapper = styled.div`
  width: 550px;
  min-width: 380px;
  margin-bottom: 20px;
  line-height: 70px;
  text-align: center;
  font-size: 40px;
  font-weight: 900;
`;
