import React from 'react';
import styled from 'styled-components';
import { RiArtboardLine } from 'react-icons/ri';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

const Layout = styled.section`
  margin-bottom: 3rem;
`;

const Title = styled.h3`
  margin-left: 1rem;
  color: ${(props) => props.theme.colors.grey};
  font-size: 0.6rem;
  font-weight: bold;
`;

const List = styled.ul`
  margin-top: 1rem;
`;

const Item = styled.li<{ path: boolean }>`
  font-size: 0.8rem;
  font-weight: bold;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.path ? props.theme.colors.lightGrey : props.theme.colors.white};
  color: ${(props) =>
    props.path ? props.theme.colors.blue : props.theme.colors.black};
`;

const Button = styled.button<{ path: boolean }>`
  font-size: 1.3rem;
  margin-right: 0.5em;
  color: ${(props) =>
    props.path ? props.theme.colors.blue : props.theme.colors.black};
`;

const URL = {
  home: '/',
  manage: '/manage',
};

const AdMenu = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <Layout>
      <Title as="h3">광고 센터</Title>
      <List>
        <Link to={URL.home}>
          <Item path={path === URL.home}>
            <Button type="button" path={path === URL.home}>
              <RiArtboardLine />
            </Button>
            <h3>대시보드</h3>
          </Item>
        </Link>
        <Link to={URL.manage}>
          <Item path={path === URL.manage}>
            <Button type="button" path={path === URL.manage}>
              <MdOutlineLeaderboard />
            </Button>
            <h3>광고관리</h3>
          </Item>
        </Link>
      </List>
    </Layout>
  );
};

export default AdMenu;
