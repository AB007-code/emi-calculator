import { Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import { valProvider } from "./Home";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const Detail = () => {
  const { loanAmount, interest, term } = useContext(valProvider);
  const [age, setAge] = React.useState("USD");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  let amount = loanAmount;
  let i = interest / 12 / 100;
  let t = term * 12;
  let emi = (amount * i * (1 + i) ** t) / ((1 + i) ** t - 1);
  emi = emi.toFixed(2);
  return (
    <>
      <Container>
        <Box variant="div" sx={{ width: "300px", mt: 4 }}>
          <Typography variant="h6">Monthly EMI: ${emi}</Typography>
        </Box>

        <Box sx={{ width: "100px" }}>
          <FormControl fullWidth sx={{ mt: 1 }}>
            <InputLabel id="demo-simple-select-label">Currency</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              defaultValue="USD"
              label="Currency"
              onChange={handleChange}
            >
              <MenuItem value="USD">
                <em>USD</em>
              </MenuItem>
              <MenuItem value={10}>EUR</MenuItem>
              <MenuItem value={20}>INR</MenuItem>
              <MenuItem value={30}>GBP</MenuItem>
              <MenuItem value={30}>JPY</MenuItem>
              <MenuItem value={30}>AUD</MenuItem>
              <MenuItem value={30}>CAD</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Container>
    </>
  );
};

export default Detail;
