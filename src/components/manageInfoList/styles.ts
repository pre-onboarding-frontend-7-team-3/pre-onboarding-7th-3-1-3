import styled from 'styled-components';

const List = styled.li`
  color: ${(props) => props.theme.colors.grey_300};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  line-height: 15px;
  padding: 0.5rem 0.5rem;
  display: flex;
  border-bottom: ${(props) => props.theme.border};
  span {
    flex: 30%;
    font-size: 0.7rem;
  }
  span:last-child {
    color: ${(props) => props.theme.colors.grey_800};
    font-size: 0.8rem;
  }
`;

const Input = styled.input`
  width: 90%;
  height: 1rem;
  padding: 0.2rem 0.5rem;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey_100};
`;

const S = {
  List,
  Input,
};

export default S;
