import { Box, Button, Container } from "@mui/material";
import React from "react";

export default function FeatureRect({
  title,
  description,
  imgSrc,
  buttonText = "Get Started>>",
}) {
  return (
    <Container className="features">
      <Box className="paymentRect">
        <Box className="infobox">
          <img src={imgSrc} alt="Not Loaded" className="featureImage" />
          <h3>{title}</h3>
          <p className="paymentRectp">{description}</p>
        </Box>
        <Button id="getStarted">
          <span className="font">{buttonText}</span>
        </Button>
      </Box>
    </Container>
  );
}
