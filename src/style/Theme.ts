import { css } from "styled-components";

const theme = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexDefault: css`
    display: flex;
    align-items: center;
  `,
  flexColumn: css`
    display: flex;
    flex-direction: column;
  `,
  bg: {
    lightBlue: "#d0e8fd",
    darkBlue: "#357ae1",
    grey: "#808080",
  },
};

export default theme;
