import React from 'react';
import styled from 'styled-components';
import { RiArrowDropUpFill, RiArrowDropDownFill } from 'react-icons/ri';

interface BoardItemProps {
  name: string;
  data: string;
  diff: string;
  increased: boolean;
}

const Item = styled.li`
  border: ${(props) => props.theme.border};
  padding: 0.5rem 1.5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.grey_300};
    margin-bottom: 1rem;
  }
  h1 {
    color: ${(props) => props.theme.colors.grey_800};
    font-weight: bold;
  }
  p {
    color: ${(props) => props.theme.colors.grey_300};
    font-size: 0.6rem;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DiffBox = styled.div`
  display: flex;
  align-items: center;
`;

const UpBtn = styled(RiArrowDropUpFill)`
  color: ${(props) => props.theme.colors.green};
  font-size: 1.5rem;
`;

const DownBtn = styled(RiArrowDropDownFill)`
  color: ${(props) => props.theme.colors.red};
  font-size: 1.5rem;
`;

const BoardItem = ({ name, data, diff, increased }: BoardItemProps) => {
  return (
    <Item>
      <h3>{name}</h3>
      <Box>
        <h1>{data}</h1>
        <DiffBox>
          {!increased && <DownBtn />}
          {increased && <UpBtn />}
          <p>{diff}</p>
        </DiffBox>
      </Box>
    </Item>
  );
};

export default BoardItem;
