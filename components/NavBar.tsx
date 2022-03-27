import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const AppContainer = styled(AppBar)``;
const NavContainer = styled(Box)`
  max-width: 80rem;
  margin: 0 auto;
  width: 100%;
  color: #01579b;
`;

const NavBar = () => {
  return (
    <AppContainer position="static">
      <NavContainer>
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            component="div"
            sx={{ display: { xs: "none", md: "flex" }, fontWeight: "bold" }}
          >
            Liberia School System
          </Typography>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              fontWeight: "bold",
            }}
          >
            Liberia School System
          </Typography>
        </Toolbar>
      </NavContainer>
    </AppContainer>
  );
};

export default NavBar;
