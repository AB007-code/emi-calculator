import { ThemeProvider } from "@emotion/react";
import { createTheme, Paper } from "@mui/material";
import { createContext, useMemo, useState } from "react";
export let dataProvider = createContext({
  toggleHandler: () => {},
});

const DataProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  // const [update, setUpdate] = useState({});
  // const [obj, setObj] = useState({});

  const toggleHandler = useMemo(
    () => () => {
      setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    },
    [] // No dependencies needed for the function itself
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode] // Recreate theme when mode changes
  );
  const contextValue = useMemo(() => ({ toggleHandler }), [toggleHandler]);
  return (
    <dataProvider.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <Paper>{children}</Paper>
      </ThemeProvider>
    </dataProvider.Provider>
  );
};

export default DataProvider;
