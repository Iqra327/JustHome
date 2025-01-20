import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Box } from "@mui/material";
import {PropertyDetails, Location, UploadImages, AdditionalDetails} from "./PropertyFormSteps/index"
import StepperComponent from "./Stepper";
import { FaArrowLeft } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

const steps = ["Property Details", "Location", "Upload Images", "Additional Details"];

const AddProperty = () => {
  const { register, handleSubmit, formState, reset } = useForm({
    reValidateMode: 'onSubmit'
  });
  const { errors } = formState;

  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    if (activeStep === steps.length - 1) {
      console.log("Final Form Data:", { ...formData, ...data });
      reset();
      setActiveStep(0);
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => setActiveStep((prevStep) => prevStep - 1);

  const onSubmit = (data) => handleNext(data);

  return (
    <>
      <div className="pt-5 ps-8 flex gap-3 text-sky-900">
        <div className='text-2xl w-full max-w-9 h-9 border-2 rounded-full py-1 ps-1 hover:border-sky-800'>
        <NavLink to='/adminDashboard/propertyListing'>
          <FaArrowLeft />
        </NavLink>
        </div>
        <h1 className="text-2xl text-sky-900 font-bold mb-5 underline underline-offset-8">Property Listing Form</h1>
      </div>

      <div className="w-full max-w-3xl mx-auto">
        <StepperComponent steps={steps} activeStep={activeStep} />

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 border mt-8 bg-white shadow-lg p-8 px-12 rounded-md" noValidate>
          {activeStep === 0 && <PropertyDetails register={register} errors={errors} />}
          {activeStep === 1 && <Location register={register} errors={errors} />}
          {activeStep === 2 && <UploadImages register={register} errors={errors} />}
          {activeStep === 3 && <AdditionalDetails register={register} errors={errors} />}

          <Box display="flex" justifyContent="space-between" mt={3}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
            >
              Back
            </Button>
            <Button type="submit" variant="contained" className="!bg-sky-800 hover:!bg-sky-700">
              {activeStep === steps.length - 1 ? "Submit" : "Next"}
            </Button>
          </Box>
        </form>
      </div>
    </>
  );
};

export default AddProperty;
