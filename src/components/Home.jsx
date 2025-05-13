import { useContext } from "react";
import { dataProvider } from "./context/DataProvider";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import "../index.css";
import { Box, Typography } from "@mui/material";
const Home = () => {
  const data = useContext(dataProvider);

  return (
    <>
      <Container>
        <Typography variant="h4">Loan Calculator Dashboard</Typography>
        <Box
          variant="div"
          sx={{
            flexGrow: 1,
          }}
        >
          <Grid container spacing={2}>
            <Grid>
              <TextField
                id="outlined-basic"
                label="Loan Amount"
                variant="outlined"
              />
            </Grid>
            <Grid>
              <TextField
                id="outlined-basic"
                label="Interest  Rate (%)"
                variant="outlined"
              />
            </Grid>
            <Grid>
              <TextField
                id="outlined-basic"
                label="Term (Years)"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Home;
