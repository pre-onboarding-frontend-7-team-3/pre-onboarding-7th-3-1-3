import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      grey: string;
      lightGrey: string;
      blue: string;
      lightBlue: string;
      white: string;
      red: string;
      green: string;
    };
  }
}
