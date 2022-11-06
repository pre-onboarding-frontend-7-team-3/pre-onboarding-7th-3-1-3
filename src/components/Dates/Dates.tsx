import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import { DateActionEnum } from 'models/types';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';
import {
  useBaseDate,
  useDateDispatch,
  useDateState,
} from '../../hooks/useTrend';
import S from './styles';

const Dates = () => {
  const baseDates = useBaseDate();
  const { startDate, endDate } = useDateState();
  const dispatch = useDateDispatch();

  return (
    <S.Layout>
      <DatePicker
        locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        closeOnScroll
        selected={startDate}
        minDate={baseDates.startDate}
        maxDate={endDate}
        onChange={(date) => dispatch({ type: DateActionEnum.SET_START, date })}
      />
      <span>~</span>
      <DatePicker
        locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        closeOnScroll
        selected={endDate}
        minDate={startDate}
        maxDate={baseDates.endDate}
        onChange={(date) => dispatch({ type: DateActionEnum.SET_END, date })}
      />
      <button type="button">
        <MdKeyboardArrowDown />
      </button>
    </S.Layout>
  );
};

export default React.memo(Dates);
