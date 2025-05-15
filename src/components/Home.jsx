import { createContext, useRef, useState } from "react";

import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "../index.css";
import { Box, Stack, Typography } from "@mui/material";
import Detail from "./Detail";
export const valProvider = createContext();

const Home = () => {
  let [obj, setObj] = useState({});

  const [val, setVal] = useState({
    loanAmount: "1000",
    interest: "8.5",
    term: "5",
  });
  const loanText = useRef();
  // console.log(val);
  const changeHandler = (e) => {
    switch (e.target.name) {
      case "loanAmount":
        // console.log(val);
        setVal({ ...val, loanAmount: e.target.value });
        break;
      case "interest":
        setVal({ ...val, interest: e.target.value });
        // console.log(val);
        break;
      case "term":
        setVal({ ...val, term: e.target.value });
        // console.log(val);
        break;
      default:
        setVal({ ...val });
    }
  };

  const submitHandler = () => {
    setObj({ ...val });
  };
  return (
    <>
      <Container sx={{ height: "200px" }}>
        <Typography variant="h4" sx={{ my: 2 }}>
          Loan Calculator Dashboard
        </Typography>
        <Box
          variant="div"
          sx={{
            flexGrow: 1,
          }}
          onChange={changeHandler}
        >
          <Grid container spacing={2}>
            <Grid>
              <TextField
                error={val.loanAmount.length ? false : true}
                id="outlined-basic"
                label="Loan Amount"
                variant="outlined"
                value={val.loanAmount}
                name="loanAmount"
                ref={loanText}
              />
            </Grid>
            <Grid>
              <TextField
                error={val.interest.length ? false : true}
                id="outlined-basic"
                label="Interest  Rate (%)"
                variant="outlined"
                value={val.interest}
                name="interest"

                // helperText="Incorrect entry."
              />
            </Grid>
            <Grid>
              <TextField
                error={val.term.length ? false : true}
                id="outlined-basic"
                label="Term (Years)"
                variant="outlined"
                value={val.term}
                name="term"
              />
            </Grid>
          </Grid>
        </Box>
        <Stack direction="row" sx={{ marginTop: "10px" }} size="large">
          <Button variant="contained" onClick={submitHandler}>
            Calculate
          </Button>
        </Stack>
      </Container>
      <valProvider.Provider value={obj}>
        <Detail />
      </valProvider.Provider>
    </>
  );
};

export default Home;
