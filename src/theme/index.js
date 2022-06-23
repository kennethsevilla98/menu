import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#DD231A",
      secondary: "#FFFFFF",
      dark: "#272727",
    },
    secondary: {
      main: "#FED36A",
    },
  },
  spacing: [0, 4, 5, 6, 7, 8, 9, 10, 12, 16, 24],
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});
