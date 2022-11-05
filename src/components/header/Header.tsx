import React from 'react';
import styled from 'styled-components';
import { AiOutlineBell, AiOutlineUser } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';

const SHeader = styled.header`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
`;

const Btns = styled.div`
  margin-right: 1rem;
  button {
    position: relative;
    margin-right: 1em;
  }
`;
const Dot = styled.div`
  width: 3px;
  height: 3px;
  background-color: tomato;
  border-radius: 50%;
  position: absolute;
  right: 0;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.6rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.grey};
  button {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    font-size: 1.3rem;
    margin-right: 0.3rem;
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.midGrey};
  }
`;
const Header = () => {
  return (
    <SHeader>
      <Box>
        <Btns>
          <button type="button">
            <Dot />
            <AiOutlineBell />
          </button>
          <button type="button">
            <FiSettings />
          </button>
        </Btns>
        <Profile>
          <button type="button">
            <AiOutlineUser />
          </button>
          <span>원티드님</span>
        </Profile>
      </Box>
    </SHeader>
  );
};

export default Header;
