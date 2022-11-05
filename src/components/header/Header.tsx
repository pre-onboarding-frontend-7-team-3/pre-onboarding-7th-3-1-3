import { AiOutlineBell, AiOutlineUser } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import S from './styles';

const URL = {
  home: '/',
  manage: '/manage',
};

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <S.Header>
      <S.Box>
        <S.Btns>
          <button type="button">
            <S.Dot />
            <AiOutlineBell />
          </button>
          <button type="button">
            <FiSettings />
          </button>
        </S.Btns>
        <S.Profile>
          <button type="button">
            <AiOutlineUser />
          </button>
          <span>원티드님</span>
        </S.Profile>
      </S.Box>
    </S.Header>
  );
};

export default Header;
