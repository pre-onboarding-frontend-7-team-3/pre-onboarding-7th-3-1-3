import styled from 'styled-components';

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

const S = {
  Layout,
};
export default S;
