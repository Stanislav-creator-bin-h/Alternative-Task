import React from "react";
import AppRoutes from "./AppRoutes";
import { AppThemeProvider } from "./providers/AppThemeProvider";

function App() {
  return (
    <AppThemeProvider>
      <AppRoutes />
    </AppThemeProvider>
  );
}

export default App;