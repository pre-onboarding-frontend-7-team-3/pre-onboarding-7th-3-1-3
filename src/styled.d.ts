import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bg: string;
      black: string;
      grey: string;
      midGrey: string;
      lightGrey: string;
      blue: string;
      lightBlue: string;
      white: string;
      red: string;
      green: string;
    };
  }
}
