import BoardList from 'components/boardList/BoardList';

import Dates from '../../components/Dates/Dates';
import Board from '../../components/board/Board';
import S from './styles';
import Graph from '../../components/graph/Graph';

const BOARD_TITLE = '통합공고 현황';

const Home = () => {
  return (
    <S.Layout>
      <S.Title>
        <h1>대시보드</h1>
        <Dates />
      </S.Title>
      <Board title={BOARD_TITLE}>
        <BoardList />
        <Graph />
      </Board>
    </S.Layout>
  );
};

export default Home;
