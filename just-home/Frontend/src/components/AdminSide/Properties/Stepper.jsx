import React from "react";
import { Stepper, Step, StepLabel, StepConnector } from "@mui/material";
import { styled } from "@mui/material/styles";

// Custom connector styling
const CustomStepConnector = styled(StepConnector)(({ theme }) => ({
  [`& .MuiStepConnector-line`]: {
    borderColor: "gray",
  },
  [`&.Mui-active .MuiStepConnector-line`]: {
    borderColor: "orange",
  },
  [`&.Mui-completed .MuiStepConnector-line`]: {
    borderColor: "green",
  },
}));

const StepperComponent = ({ steps, activeStep }) => {
  return (
    <Stepper
      activeStep={activeStep}
      alternativeLabel
      connector={<CustomStepConnector />}
    >
      {steps.map((label, index) => (
        <Step key={label}>
          <StepLabel
            StepIconProps={{
              sx: {
                color: activeStep === index ? "orange !important" : "gray",
                "&.Mui-completed": { color: "green" },
              },
            }}
          >
            {label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default StepperComponent;
