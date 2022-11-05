import React, { useState } from 'react';
import styled from 'styled-components';
import { DateContextProvider } from 'context/dateContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Dates from '../components/Dates/Dates';

const Layout = styled.section`
  padding: 1.5rem;
  height: 100%;
`;

const Title = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 0.8rem;
    font-weight: 100;
  }
`;

const Home = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <Layout>
      <DateContextProvider>
        <Title>
          <h1>대시보드</h1>
          <Dates />
        </Title>
      </DateContextProvider>
    </Layout>
  );
};

export default Home;
