import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6200ea", // Purple
    },
    secondary: {
      main: "#03dac6", // Teal
    },
    background: {
      default: "#eef5ff", // Light blue background
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
  },
});

export default theme;
