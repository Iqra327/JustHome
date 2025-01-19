import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Stepper, Step, StepLabel, Button, Box } from "@mui/material";
import { amenitiesList } from "../../../constants";

const steps = ["Property Details", "Amenities", "Upload Images"];

const AddProperty = () => {
  const { register, handleSubmit, formState, reset } = useForm();
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
    <div className="w-full max-w-3xl mx-auto mt-8">
      <h1 className="text-2xl text-sky-900 font-bold mb-2">Property Listing Form</h1>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3" noValidate>
        {activeStep === 0 && (
          <>
            <label htmlFor="propName" className="sm:text-xl text-sky-950">
              Property Name
            </label>
            <input
              id="propName"
              type="text"
              className="border p-2 rounded outline-slate-400"
              {...register("propName", { required: "Please add property name" })}
            />
            <p className="text-red-600">{errors.propName?.message}</p>

            <label htmlFor="description" className="sm:text-xl text-sky-950">
              Description
            </label>
            <textarea
              id="description"
              className="border p-2 rounded outline-slate-400"
              {...register("description", { required: "Please add description" })}
            />
            <p className="text-red-600">{errors.description?.message}</p>

            <label htmlFor="price" className="sm:text-xl text-sky-950">
              Price
            </label>
            <input
              id="price"
              type="number"
              className="border p-2 rounded outline-slate-400"
              {...register("price", { required: "Please add price" })}
            />
            <p className="text-red-600">{errors.price?.message}</p>
          </>
        )}

        {activeStep === 1 && (
          <>
            <h1 className="sm:text-xl text-sky-950">Select Amenities</h1>
            <div className="flex flex-col gap-5">
              {amenitiesList.map((amenity, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`amenity-${index}`}
                    className="cursor-pointer"
                    value={amenity}
                    {...register("amenities")}
                  />
                  <label htmlFor={`amenity-${index}`} className="text-sky-950 cursor-pointer">
                    {amenity}
                  </label>
                </div>
              ))}
            </div>
          </>
        )}

        {activeStep === 2 && (
          <>
            <label htmlFor="img" className="sm:text-xl text-sky-950">
              Upload Images
            </label>
            <input
              id="img"
              type="file"
              multiple
              accept="image/*"
              {...register("img", { required: "Please add some of the property images" })}
            />
            <p className="text-red-600">{errors.img?.message}</p>
          </>
        )}

        <Box display="flex" justifyContent="space-between" mt={3}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            variant="outlined"
            color="primary"
          >
            Back
          </Button>
          <Button type="submit" variant="contained" color="primary">
            {activeStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddProperty;
