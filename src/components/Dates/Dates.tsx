import { useDateDispatch } from 'hooks/useDate';
import { MdKeyboardArrowDown } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import { DateActionEnum } from 'models/types';
import styled from 'styled-components';
import { ko } from 'date-fns/esm/locale';
import { useDateState } from '../../hooks/useDate';
import 'react-datepicker/dist/react-datepicker.css';
import { useStartAndLastDate } from '../../hooks/useTrend';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0;
    text-align: center;
    cursor: pointer;
    font-size: 0.8rem;
  }
  .react-datepicker-wrapper {
    width: 110px;
    text-align: center;
    cursor: pointer;
  }
  .react-datepicker__day-names {
    margin-top: 0.5em;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Dates = () => {
  const dates = useStartAndLastDate();
  const dispatch = useDateDispatch();
  return (
    <Layout>
      <DatePicker
        locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        closeOnScroll
        selected={dates.startDate}
        minDate={dates.startDate}
        maxDate={dates.lastDate}
        onChange={(date) => dispatch({ type: DateActionEnum.SET_START, date })}
      />
      <span>~</span>
      <DatePicker
        locale={ko}
        dateFormat="yyyy년 MM월 dd일"
        closeOnScroll
        selected={dates.lastDate}
        minDate={dates.startDate}
        maxDate={dates.lastDate}
        onChange={(date) => dispatch({ type: DateActionEnum.SET_END, date })}
      />
      <button type="button">
        <MdKeyboardArrowDown />
      </button>
    </Layout>
  );
};

export default Dates;
