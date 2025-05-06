import { createTheme } from "@mui/material";
import React from "react";
import { createContext } from "react";
export const dataProvider = createContext();
let obj = {
  mode: "light",
  theme: createTheme({
    palette: {
      mode: "light",
    },
  }),
  toggleHandler() {
    if (this.mode == "light") {
      this.mode = "dark";
    } else {
      this.mode = "light";
    }
    this.theme.palette.mode = this.mode;
    // console.log(this.theme);
    return this.theme;
  },
};
console.log(obj);
const DataProvider = ({ children }) => {
  return <dataProvider.Provider value={obj}>{children}</dataProvider.Provider>;
};

export default DataProvider;
