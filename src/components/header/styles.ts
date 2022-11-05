import styled from 'styled-components';

const Header = styled.header`
  padding: 0.5rem 1.5rem;
  display: flex;
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
  color: ${(props) => props.theme.colors.grey_800};
  button {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    font-size: 1.3rem;
    margin-right: 0.3rem;
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.grey_50};
    border: 1px solid #d1d8dc;
  }
`;

const S = {
  Profile,
  Box,
  Header,
  Btns,
  Dot,
};

export default S;
