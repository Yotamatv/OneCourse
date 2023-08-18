import { Grid } from "@mui/material";
import React from "react";
import PaymentPlan from "./PaymentPlan";

export default function PaymentPlans() {
  const benefitsTeam = [
    "Create 50 monthly AI custom courses ",
    "Create learning paths ",
    "Analytics & Reports",
    "AI learning insights",
  ];
  const benefitsEnterprise = [
    "Create Unlimited AI custom courses",
    "Create learning paths",
    "Advanced Analytics & Reports",
    "Advanced AI learning insights",
    "Create user groups",
    "API & LMS integration",
  ];
  return (
    <Grid className="spaceAround">
      <Grid>
        <PaymentPlan
          title="Team"
          subtitle="5-20 Users"
          description="Ideal for smaller teams seeking to amplify skill growth."
          price="149$"
          priceInfo="Per User / Per Year"
          benefits={benefitsTeam}
        />
      </Grid>

      <Grid>
        <PaymentPlan
          title="Enterprise"
          subtitle="21+ Users"
          description="Perfect for businesses aiming to revolutionize their learning approach"
          price="Contact us for pricing"
          benefits={benefitsEnterprise}
        />
      </Grid>
    </Grid>
  );
}
