export enum BREAK_POINTS {
  MOBILE = "37.5em", //600px
  LARGE_VIEWPORT = "62em", //992px/16
  MEDIUM_VIEWPORT = "48em", //768px/16
  EXTRA_LARGE_VIEWPORT = "75em", //1200px tab land
  LARGE_VIEWPORT_IPAD_PRO = "64em", //1024px
  EXTRA_LARGE_DESKTOP_VIEW = "90em", //1440px
  DESKTOP_VIEW = "96em", //1536px
}

export enum APP_COLORS {
  GRAY_COLOR = "#56616B",
  BORDER_GRAY = "#EFF1F6",
  WHITE_COLOR = "#FFFFFF",
  BLACK_COLOR = "#131316",
  GREEN_COLOR = "#0FB77A",
  ORANGE_COLOR = "#FF5403",
  PUPPLE_COLOR = "#844FF6",
  SKYBLUE_COLOR = "#599EEA",
  GRAY_TEXT_COLOR = "#4D5760",
  LIGHT_GRAY_COLOR = "#31373D",
  OTHERS_ORANGE_COLOR = "#F09468",
  ANDORA_ORANGE_COLOR = " #FAB70A",
  TRANSPARENT_COLOR = "transparent",
  ORANGE_SECONDARY_COLOR = "#FF5403",
}

// All app font sizes
export enum FONTS {
  Söhne = "Söhne-Fett",
  TestSöhne = "TestSöhne",
}
declare module "styled-components" {
  export interface DefaultTheme {
    // All Global App Font typings
    fonts: typeof FONTS;
    // App dark mode condition
    isDarkMode: boolean;
    // Toggle App theme
    toggleTheme: () => void;
    // App break points
    breakpoints: typeof BREAK_POINTS;
    // All Global App Colors typings
    colors: typeof APP_COLORS;
  }
}
