import UserQueries from './queries/UserQueries';
import Styles from './styled/StyledComponents';

// Queries
const Queries = {
  ...UserQueries
};

// Check of je mutation kunt schrijven uit Starwars lib
class Mutations {

}

// leidt de gridsystem af van een library a la BOOTSTRAP; #simple
// Column lib: grid size 12 column + gutter size 5px
class GridSystem {

}

// shared styled-components
const StyledComponents = {
 ...Styles
}

// Helpers for colors and fonts in theme
const colorHelper = (light: string, main: string, dark: string, contrastText: string) => ({light, main, dark, contrastText});
const fontHelper = (fontFamily: any, fontSize: number, letterSpacing?: string | undefined, lineHeight?: number | undefined) =>
  ({fontFamily, fontSize, letterSpacing, lineHeight});

class Font {
  static regular = "Liberation Sans";
  static italic = "Liberation Sans Italic";
  static bold = "Liberation Sans Bold";
}

class Theme {
  // Breakpoints for different device sizes
  static breakpoints = new Map()
    .set("xs", 0)
    .set("sm", 600)
    .set("md", 960)
    .set("lg", 1280)
    .set("xs", 1920);

  // Color palette
  static palette = {
    common: {
      black: "#000",
      white: "#FFF",
    },
    primary: colorHelper("#2D475A", "#012031", "#00000A", "#FFF"),
    secondary: colorHelper("#FFBC44", "#F58B00", "#F58B00", "#FFF"),
    error: colorHelper("#FF867C", "#EF5350", "#B61827", "#FFF"),
    warning: colorHelper("#FFFF73", "#FFEE58", "#EBDB1E", "#212121"),
    info: colorHelper("#A16BFF", "#673AB7", "#36186B", "#FFFFFF"),
    success: colorHelper("#6FCF97", "#219653", "#398258", "#FFFFFF"),
  };

  // Color of texts, what color to display when disabled etc.
  static text = {
    primary: "#212121",
    secondary: "#FFFFFF",
    disabled: "#F5F5F5",
    hint: "#E0E0E0",
    dark: "#FFF",
  };

  // Color of the divider
  static divider = "#797979";

  // Different subtitle color for theme
  static subtitle = {
    light: "#AAAAAA",
    dark: "#F4F4F4"
  };

  // Different white backgrounds (pastel colours)
  static background = {
    white: "#FFF",
    ghostWhite: "#F8F8FF",
    whiteSmoke: "#F5F5F5",
    greyWhite: "#E0E0E0",
    lightWhite: "#F5F5F5"
  };

  // Different shadows for giving depth
  static shadows = {
    floatingShadow: "",
    paperShadow: ""
  };

  static typography = {
    htmlFontSize: 16,
    pxToRem: (pixels: any) => Number(pixels) * Theme.typography.htmlFontSize,
    h1: fontHelper(Font.regular, 28),
    h2: fontHelper(Font.regular, 24),
    h3: fontHelper(Font.regular, 22),
    h4: fontHelper(Font.regular, 20),
    h5: fontHelper(Font.regular, 18),
    h6: fontHelper(Font.regular, 16),
    // Every title has a correctly sized subtitle
    "h1-subtitle": fontHelper(Font.regular, 26),
    "h2-subtitle": fontHelper(Font.regular, 22),
    "h3-subtitle": fontHelper(Font.regular, 20),
    "h4-subtitle": fontHelper(Font.regular, 18),
    "h5-subtitle": fontHelper(Font.regular, 16),
    "h6-subtitle": fontHelper(Font.regular, 14),
    body: fontHelper(Font.regular,12, "",16),
    button: fontHelper(Font.bold,14, "5%"),
  };

  // Add values for the specific component z-index
  static zIndex = new Map()
    .set("mobileStepper", 1000)

}

// Mixins, styles which will be used more often in different components
class Mixins {

}

export { Queries, Mutations, GridSystem, StyledComponents, Theme, Font, Mixins }
