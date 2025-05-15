import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { valProvider } from "./Home";
const Detail = () => {
  const { loanAmount, interest, term } = useContext(valProvider);

  let amount = loanAmount;
  let i = interest / 12 / 100;
  let t = term * 12;
  let emi = (amount * i * (1 + i) ** t) / ((1 + i) ** t - 1);

  console.log(t);
  console.log(emi.toFixed(2));
  return (
    <>
      <Box>
        <Typography variant="h5">Monthly EMI</Typography>
      </Box>
    </>
  );
};

export default Detail;
