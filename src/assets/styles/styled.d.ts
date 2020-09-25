import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
      backgroundGradient: string;

      primary: string;
      primaryOpacity64: string;
    };
  }
}
