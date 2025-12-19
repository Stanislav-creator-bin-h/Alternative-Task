import { useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useThemeStore } from "../store/useThemeStore";
import { getTheme } from "../theme/theme";

export const AppThemeProvider = ({ children }) => {
  const mode = useThemeStore((state) => state.mode);
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
