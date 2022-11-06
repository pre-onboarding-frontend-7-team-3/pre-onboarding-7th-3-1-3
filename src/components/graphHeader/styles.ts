import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
`;
const Select = styled.select`
  width: 80px;
  text-align: center;
  padding: 0.4rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.6rem;
  color: ${(props) => props.theme.colors.grey_800};
  font-weight: bold;
  margin-right: 1rem;
  option {
    text-align: center;
    padding: 3px 0;
  }
`;

const Point = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.blue};
`;

const S = {
  Header,
  Select,
  Point,
};

export default S;
