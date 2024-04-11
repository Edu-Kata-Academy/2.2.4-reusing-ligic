import React, { useState } from "react";
import { validateField } from "../components/formComponent/lib/validateField";

interface FieldState {
  value: string;
  isValid: boolean;
  errorMessage: string;
}

interface FormState {
  [key: string]: FieldState;
}

interface UseFormWithValidation {
  formState: FormState;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (callback: () => void) => (event?: React.FormEvent) => void;
}

const useFormWithValidation = (initialState: any): UseFormWithValidation => {
  const [formState, setFormState] = useState<FormState>(() => {
    const state: FormState = {};
    for (const key in initialState) {
      state[key] = {
        value: initialState[key].value,
        isValid: true,
        errorMessage: "",
      };
    }
    return state;
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const validationRules = initialState[name].validationRules;
    const { isValid, errorMessage } = validateField(value, validationRules);

    setFormState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value,
        isValid,
        errorMessage,
      },
    }));
  };

  const handleSubmit = (callback: () => void) => (event?: React.FormEvent) => {
    event && event.preventDefault();

    let isFormValid = true;
    const newFormState: FormState = {};

    for (const key in formState) {
      const value = formState[key].value;
      const validationRules = initialState[key].validationRules;
      const { isValid, errorMessage } = validateField(value, validationRules);
      newFormState[key] = {
        ...formState[key],
        isValid,
        errorMessage,
      };
      if (!isValid) isFormValid = false;
    }

    setFormState(newFormState);

    if (isFormValid) {
      callback();
    }
  };

  return { formState, handleChange, handleSubmit };
};

export default useFormWithValidation;
