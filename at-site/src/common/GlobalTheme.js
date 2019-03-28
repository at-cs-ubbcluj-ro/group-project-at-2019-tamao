import { createMuiTheme } from "@material-ui/core/styles/index";

export const palette = {
  type: "light",
  primary: {
    main: "#FF5722",
    light: "#FFCCBC",
    dark: "#8BC34A"
  },
  secondary: {
    main: "#FFC107"
  },
  text: {
    primary: "#212121",
    secondary: "#757575"
  }
};


export const theme = createMuiTheme({
  direction: "ltr",
  palette,
  type: "dark",
  typography: {
    fontFamily: "Open Sans",
    fontSize: "14px",
    lineHeight: "24px"
  }
});
