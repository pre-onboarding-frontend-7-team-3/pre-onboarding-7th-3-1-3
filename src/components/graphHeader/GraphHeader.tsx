import { ChartActionEnum, ChartType } from 'models/types';
import S from './styles';
import { useChartDispatch, useChartState } from '../../hooks/useChart';

const categories: ChartType[] = [
  'ROAS',
  '광고비',
  '클릭수',
  '매출',
  '노출 수',
  '전환 수',
];

enum CategoryEnum {
  FIRST = 'first',
  SECOND = 'second',
  PERIOD = 'perdiod',
}

const periods: string[] = ['주간', '일간'];

const GraphHeader = () => {
  const { first, second, period } = useChartState();
  const dispatch = useChartDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case CategoryEnum.FIRST:
        dispatch({ type: ChartActionEnum.SET_FIRST_DATA, data: value });
        break;
      case CategoryEnum.SECOND:
        dispatch({ type: ChartActionEnum.SET_SECOND_DATA, data: value });
        break;
      case CategoryEnum.PERIOD:
        dispatch({ type: ChartActionEnum.SET_PERIOD, data: value });
        break;
      default:
        throw new Error('unknown case');
    }
  };
  return (
    <S.Header>
      <div>
        <S.Select
          name={CategoryEnum.FIRST}
          onChange={handleChange}
          value={first}
        >
          {categories.map((item) => {
            if (item === second) {
              return;
            }
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </S.Select>
        <S.Select
          name={CategoryEnum.SECOND}
          onChange={handleChange}
          value={second}
        >
          {categories.map((item) => {
            if (item === first) {
              return;
            }
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </S.Select>
      </div>
      <S.Select
        name={CategoryEnum.PERIOD}
        onChange={handleChange}
        value={period}
      >
        {periods.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </S.Select>
    </S.Header>
  );
};

export default GraphHeader;
