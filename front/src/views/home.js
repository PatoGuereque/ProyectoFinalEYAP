import { Typography, Grid } from "@material-ui/core";
import React from "react";
import ultima from "./images/ultima.jpg";

const Home = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={12} style={{ "max-width": "800px", padding: "64px" }}>
        <h2>¿Quienes Somos?</h2>
        <div>
          <Typography>
            <i>Amamos crear comida</i>
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </Typography>
        </div>
      </Grid>

      <Grid item xs={12}>
        <img
          src={ultima}
          alt="foto de final"
          style={{
            width: "50%",
            display: "block",
            "margin-left": "auto",
            "margin-right": "auto",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
