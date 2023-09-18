import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AuthButtonImage from "../images/saja.png";

function Auth0() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item>
        <Button
          disableRipple
          onClick={loginWithRedirect}
          style={{
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          <img
            src={AuthButtonImage}
            alt="Login"
            style={{
              width: "150px",
              height: "auto",
            }}
          />
        </Button>
      </Grid>
    </Grid>
  );
}

export default Auth0;
