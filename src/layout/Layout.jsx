import React from "react";
import Header from "./Header/Header";
import Main from "./Main";
import { Box } from "@mui/material";

export default function Layout({ children }) {
  return (
    <Box id="grad">
      <Header />
      <Main>{children}</Main>
    </Box>
  );
}
