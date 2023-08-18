import { Grid } from "@mui/material";
import React from "react";
import FeatureRect from "./FeatureRect";

export default function FeatureRects() {
  return (
    <Grid className="spaceAround">
      <Grid>
        <FeatureRect
          title="Tailored Learning Paths"
          description="Experience courses meticulously crafted to match your unique preferences and goals."
          imgSrc="/images/red.png"
        />
      </Grid>
      <Grid>
        <FeatureRect
          title="Comprehensive Assets"
          description="Track your team's learning behavior and gain AI-powered insights to optimize learning outcomes."
          imgSrc="/images/blue.png"
        />
      </Grid>
      <Grid>
        <FeatureRect
          title="Insightful Analytics"
          description="Perfect for businesses aiming to revolutionize their learning approach"
          imgSrc="/images/yellow.png"
        />
      </Grid>
    </Grid>
  );
}
