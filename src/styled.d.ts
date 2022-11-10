import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    flexCenter: ThemedCssFunction;
    flexDefault: ThemedCssFunction;
    flexColumn: ThemedCssFunction;
    bg: {
      lightBlue: string;
      darkBlue: string;
      grey: string;
    };
  }
}
