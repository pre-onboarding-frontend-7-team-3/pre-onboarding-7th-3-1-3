import { useEffect } from 'react';
import { useDateDispatch } from 'hooks/useDate';
import { MdKeyboardArrowDown } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import { DateActionEnum } from 'models/types';
import { ko } from 'date-fns/esm/locale';
import { useDateState } from '../../hooks/useDate';
import 'react-datepicker/dist/react-datepicker.css';
import { useBaseDate } from '../../hooks/useTrend';
import S from './styles';

const Dates = () => {
  const baseDates = useBaseDate();
  const { startDate, endDate } = useDateState();
  const dispatch = useDateDispatch();
  useEffect(() => {
    if (baseDates.startDate) {
      dispatch({ type: DateActionEnum.SET_START, date: baseDates.startDate });
    }
    if (baseDates.endDate) {
      dispatch({ type: DateActionEnum.SET_END, date: baseDates.endDate });
    }
  }, [baseDates.endDate, baseDates.startDate, dispatch]);

  return (
    <S.Layout>
      <DatePicker
        locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        closeOnScroll
        selected={startDate}
        minDate={baseDates.startDate}
        maxDate={baseDates.endDate}
        onChange={(date) => dispatch({ type: DateActionEnum.SET_START, date })}
      />
      <span>~</span>
      <DatePicker
        locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        closeOnScroll
        selected={endDate}
        minDate={baseDates.startDate}
        maxDate={baseDates.endDate}
        onChange={(date) => dispatch({ type: DateActionEnum.SET_END, date })}
      />
      <button type="button">
        <MdKeyboardArrowDown />
      </button>
    </S.Layout>
  );
};

export default Dates;
