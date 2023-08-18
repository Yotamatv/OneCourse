import { Box, Button } from "@mui/material";
import React from "react";
import FeatureRects from "../components/FeatureRects";

export default function Home() {
  return (
    <Box>
      <img src="/images/homeimage.svg" alt="data" id="homeImage" />
      <h4>Welcome To OneCourse</h4>
      <h2 className="title2">Drive Success Across Teams with AI</h2>
      <p className="paymentRectp">
        Boost your team's growth with custom AI-generated <br />
        courses, designed to meet individual and team needs
        <br />
        while fast-tracking skill acquisition
      </p>
      <Box className="buttonBox">
        <Button variant="contained" className="sign_up">
          Sign Up
        </Button>
      </Box>
      <br />
      <br />
      <br />
      <h3>Revolutionize Your Team's Learning Exprience</h3>
      <p>
        Unleash the power of AI to create tailored learning experiences, engage
        with a wide array of <br />
        resources and derive meaningful insights from intuitive analytics.
      </p>
      <FeatureRects />
    </Box>
  );
}
