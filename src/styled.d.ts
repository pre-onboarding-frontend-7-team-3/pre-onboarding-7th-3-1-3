import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bg: string;
      black: string;
      grey_50: string;
      grey_100: string;
      grey_300: string;
      grey_500: string;
      grey_800: string;
      blue: string;
      lightBlue: string;
      white: string;
      red: string;
      green: string;
    };
    border: string;
  }
}
