import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Box } from "@mui/material";
import {PropertyDetails, Location, UploadImages, AdditionalDetails, Amenities} from "./PropertyFormSteps/index"
import StepperComponent from "./Stepper";
import { FaArrowLeft } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import { createProperty } from "../../../../api/propertyApi";
import { useSelector } from "react-redux";

const steps = ["Property Details", "Location", "Select Amenities", "Upload Images", "Additional Details"];

const AddProperty = () => {
  const {token} = useSelector((state) => state.auth);
  const { register, handleSubmit, formState, reset , control} = useForm({
    reValidateMode: 'onSubmit'
  });
  const { errors } = formState;

  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [selectedImages, setSelectedImages] = useState([]);

  //creating new property 
  const handleNext = async (data) => {
    const updatedFormData = { ...formData, ...data, images: selectedImages };
    setFormData(updatedFormData);
  
    if (activeStep === steps.length - 1) {
      const Data = new FormData();
  
      for (let key in updatedFormData) {
        if (key === "images") {
          updatedFormData.images.forEach((file) => Data.append("images", file));
        } else if (Array.isArray(updatedFormData[key])) {
          updatedFormData[key].forEach((item) => Data.append(key, item));
        } else {
          Data.append(key, updatedFormData[key]);
        }
      }
  
      try {
        const response = await createProperty(Data, token);
        console.log(response);
        reset();
        setActiveStep(0);
      } catch (error) {
        console.log(error);
      }
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
          {activeStep === 2 && <Amenities register={register} errors={errors} control={control}/>}
          {activeStep === 3 && <UploadImages register={register} errors={errors} setImages={setSelectedImages}/>}
          {activeStep === 4 && <AdditionalDetails register={register} errors={errors} />}

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
