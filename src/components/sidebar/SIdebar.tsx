import Guide from 'components/guide/Guide';
import S from './styles';
import Menu from '../menu/Menu';

const Sidebar = () => {
  return (
    <S.Layout>
      <S.Header>
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
      </S.Header>
      <Menu />
      <Guide />
    </S.Layout>
  );
};

export default Sidebar;
