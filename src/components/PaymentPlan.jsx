import { Box, Button, Divider } from "@mui/material";
import React from "react";

export default function PaymentPlan({
  title,
  subtitle,
  description,
  price,
  priceInfo,
  benefits,
  buttonText = "Join Waitlist",
}) {
  return (
    <Box className="paymentRect">
      <h3 className="title">{title}</h3>
      <p className="subtitle">{subtitle}</p>
      <p className="paymentRectp">{description}</p>
      <h2>
        {price} <span className="subtitle">{priceInfo}</span>
      </h2>
      <Divider variant="middle" />
      <ul className="checklist">
        {benefits &&
          benefits.map((benefit) => (
            <div>
              <img
                src="\images\checkmark.png"
                alt="checkmark"
                height="25px"
                width="25px"
                className="inline"
              />
              <p className="inline"> {benefit}</p>
              <br />
            </div>
          ))}
      </ul>
      <Button id="joinButton">{buttonText}</Button>
    </Box>
  );
}
