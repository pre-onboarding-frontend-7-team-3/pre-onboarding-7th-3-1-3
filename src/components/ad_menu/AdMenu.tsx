import { RiArtboardLine } from 'react-icons/ri';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import S from './styles';

const URL = {
  home: '/',
  manage: '/manage',
};

const AdMenu = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <S.Layout>
      <S.Title as="h3">광고 센터</S.Title>
      <S.List>
        <Link to={URL.home}>
          <S.Item path={path === URL.home}>
            <S.Button type="button" path={path === URL.home}>
              <RiArtboardLine />
            </S.Button>
            <h3>대시보드</h3>
          </S.Item>
        </Link>
        <Link to={URL.manage}>
          <S.Item path={path === URL.manage}>
            <S.Button type="button" path={path === URL.manage}>
              <MdOutlineLeaderboard />
            </S.Button>
            <h3>광고관리</h3>
          </S.Item>
        </Link>
      </S.List>
    </S.Layout>
  );
};

export default AdMenu;
