import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Link from "next/link";
import { slugify } from "../utilities";

const AppContainer = styled(AppBar)`
  background: #fff;
`;
const NavContainer = styled(Box)`
  max-width: 60rem;
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
            <Link href={`/`} passHref>
              <a style={{ textDecoration: "none" }}> EDU-LIBERIA</a>
            </Link>
          </Typography>

          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              fontWeight: "bold",
              p: 1,
              py: 3,
            }}
          >
            <Link href={`/`} passHref>
              <a style={{ textDecoration: "none" }}> EDU-LIBERIA</a>
            </Link>
          </Typography>
        </Toolbar>
      </NavContainer>
    </AppContainer>
  );
};

export default NavBar;
