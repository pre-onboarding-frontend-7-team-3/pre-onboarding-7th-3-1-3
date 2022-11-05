import { AiOutlineBell, AiOutlineUser } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import S from './styles';

const Header = () => {
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
