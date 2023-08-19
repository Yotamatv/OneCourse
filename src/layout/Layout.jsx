import React from "react";
import Main from "./Main";
import { Box } from "@mui/material";
import Navbar from "./Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <Box id="grad">
      <Navbar />
      <Main>{children}</Main>
    </Box>
  );
}
