import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      quarternary: string;
    };
    fontSizes: {
      big_80: string;
      big_64: string;
      big_60: string;
      big_48: string;
      medium_36: string;
      medium_30: string;
      medium_32: string;
      medium_24: string;
      small_18: string;
      small_12: string;
    };
    spacing: {
      _30: string;
      _60: string;
    };
    fonts: {
      primary_regular: string;
      primary_medium: string;
      primary_light: string;
      secondary_regular: string;
    };
  }
}
