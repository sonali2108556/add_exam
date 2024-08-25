import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const initialMessageState = { message: '', show: false }
  const [message, setMessage] = useState(initialMessageState);

  const [formState, setFormState] = useState({
    examName: "",
    examDuration: "",
    questionPicking: "Auto",
    questions: [],
    negativeMarking: 0,
    easyMarks: '',
    mediumMarks: '',
    hardMarks: '',
    passingScore: '',
    captureImage: false,
    registrationForm: false,
    captureInterval: '',
    instructions: "Default instructions...",
  });

  const updateFormState = (field, value) => {
    setFormState((prevState) => ({ ...prevState, [field]: value }));
  };
  const updateMessage = (message, show) => {
    setMessage({ message, show });
  }
  return (
    <FormContext.Provider value={{ formState, updateFormState, message, updateMessage }}>
      {children}
    </FormContext.Provider>
  );
};
