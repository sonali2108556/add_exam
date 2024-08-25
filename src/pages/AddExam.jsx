import React, { useState } from "react";
import BasicDetails from "../components/BasicDetails";
import AdvancedSettings from "../components/AdvancedSettings";
import { Box, Stepper, Step, StepLabel, Typography, Container } from "@mui/material";
import { useFormContext } from "../context/FormContext";

const examSteps = [
  {
    id: 1,
    label: "Basic Details",
  },
  {
    id: 2,
    label: "Advanced Settings"
  }
]
const AddExam = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { formState, updateMessage } = useFormContext();
  const handleNext = (e) => {
    e.preventDefault();
    if (formState.questionPicking !== "Auto" && formState.questions.length === 0) {
      updateMessage('Please add atleast one topic!', true);
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSave = (e) => {
    e.preventDefault()
    alert("Exam details saved!");
  };

  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      <Box className="flex column">
        <Box className="bg">
          <Typography textAlign="center" variant="h5" mb={2}><strong>Add new exam</strong></Typography>
          <Stepper activeStep={activeStep} alternativeLabel>
            {examSteps.map((item) => {
              return (
                <Step key={item.id}>
                  <StepLabel>{item.label}</StepLabel>
                </Step>
              )
            })}
          </Stepper>
        </Box>
        <Box>
          {activeStep === 0 && <BasicDetails onNext={handleNext} />}
          {activeStep === 1 && (
            <AdvancedSettings onBack={handleBack} onSave={handleSave} />
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default AddExam;
