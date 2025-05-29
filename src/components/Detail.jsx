import { Button, Container, Grid, Typography } from "@mui/material";
import React, { createContext, useContext, useEffect } from "react";
import { valProvider } from "./Home";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Fetch } from "../utilities/Fetch";
import ReactVirtualizedTable from "./Reactvirtualizedtable";
export const dataProvider = createContext();
const Detail = () => {
  const { resetHandler, obj1 } = useContext(valProvider);
  const { loanAmount, interest, term } = obj1;
  let amount = loanAmount;
  let i = interest / 12 / 100;
  let t = term * 12;
  let emi = (amount * i * (1 + i) ** t) / ((1 + i) ** t - 1);
  emi = emi.toFixed(2);
  const [coin, setCoin] = React.useState("USD");
  const [state, setState] = React.useState({});
  const [ta, setT] = React.useState(false);
  const [emi1, setEmi] = React.useState("");
  useEffect(() => {
    Fetch().then(({ conversion_rates }) => {
      setState({ ...conversion_rates });
    });
  }, []);
  const changeData = (e) => {
    let a = e.target.textContent;
    setEmi((emi * state[a]).toFixed(2));
    setCoin(a);
    setT(true);
  };
  const detailData = obj1;
  return (
    <>
      <Container>
        <Box variant="div" sx={{ width: "300px", mt: 4 }}>
          <Typography variant="h6">Monthly EMI: ${emi}</Typography>
        </Box>
        <Grid container spacing={6}>
          <Grid size={1}>
            <Box sx={{ width: "100px" }}>
              <FormControl fullWidth sx={{ mt: 1 }}>
                <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={coin}
                  defaultValue="USD"
                  label="Currency"
                  onClick={changeData}
                >
                  <MenuItem value="USD">
                    <em>USD</em>
                  </MenuItem>
                  <MenuItem value="EUR">EUR</MenuItem>
                  <MenuItem value="INR">INR</MenuItem>
                  <MenuItem value="GBP">GBP</MenuItem>
                  <MenuItem value="JPY">JPY</MenuItem>
                  <MenuItem value="AUD">AUD</MenuItem>
                  <MenuItem value="CAD">CAD</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid
            size={9}
            sx={{
              paddingLeft: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography>
              Converted EMI:
              {ta ? emi1 : emi} {coin}
            </Typography>
          </Grid>
          <Grid size={2}>
            <Button
              variant="outlined"
              size="medium"
              sx={{ height: "80%", marginTop: "5%" }}
              onClick={resetHandler}
            >
              Reset Table
            </Button>
          </Grid>
        </Grid>
        <dataProvider.Provider value={detailData}>
          <ReactVirtualizedTable />
        </dataProvider.Provider>
      </Container>
    </>
  );
};

export default Detail;
