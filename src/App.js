import React, { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Routing from "./routes/Routing";
import { ThemeProvider } from "@mui/material/styles";

import { dataProvider } from "./components/context/DataProvider";
import { Paper } from "@mui/material";

const App = () => {
  const { mode, theme } = useContext(dataProvider);
  let [state, setState] = useState(theme);
  useEffect(() => {
    setInterval(() => {
      setState(theme);
      console.log(state);
    }, 1000);
  }, []);
  return (
    <div>
      <ThemeProvider theme={state}>
        <Paper>
          <Navbar />
          <Routing />
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default App;
