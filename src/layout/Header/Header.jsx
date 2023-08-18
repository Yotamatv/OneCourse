import { Box, Toolbar, Button } from "@mui/material";
import React from "react";
import Logo from "./Logo";

export default function Header() {
  return (
    <Box position="sticky">
      <Toolbar className="spaceBetween">
        <Logo />
        <Box>
          <Button id="pricingButton">Pricing</Button>
          <Button variant="contained" className="sign_up">
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </Box>
  );
}
