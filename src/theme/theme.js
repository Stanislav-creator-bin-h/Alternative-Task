import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            background: { default: "#0b1220", paper: "#0f172a" },
          }
        : {
            background: { default: "#f6f7fb", paper: "#ffffff" },
          }),
    },
    shape: { borderRadius: 14 },
    typography: {
      fontFamily: ["Inter", "system-ui", "Segoe UI", "Roboto", "Arial"].join(","),
      h1: { fontWeight: 900 },
      h2: { fontWeight: 900 },
      h3: { fontWeight: 800 },
      h6: { fontWeight: 800 },
    },
    components: {
      MuiPaper: { defaultProps: { elevation: 0 } },
      MuiButton: { defaultProps: { disableElevation: true } },
    },
  });
