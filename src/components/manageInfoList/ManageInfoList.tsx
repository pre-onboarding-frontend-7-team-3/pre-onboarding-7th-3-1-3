import React from 'react';
import styled from 'styled-components';

type InfoType = {
  name: string;
  data: string | number;
};

interface ManageInfoListProps {
  infoArray: InfoType[];
  onModifyMode: boolean;
}

const List = styled.li`
  color: ${(props) => props.theme.colors.grey_300};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  line-height: 15px;
  padding: 0.5rem;
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

const ManageInfoList = ({ infoArray, onModifyMode }: ManageInfoListProps) => {
  return (
    <ul>
      {infoArray.map((item) => (
        <List key={item.name}>
          <span>{item.name}</span>
          <span>{item.data}</span>
        </List>
      ))}
    </ul>
  );
};

export default ManageInfoList;
