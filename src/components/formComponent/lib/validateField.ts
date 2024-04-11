interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  hasNumber?: boolean;
}

export const validateField = (value: string, validationRules: ValidationRule) => {
  let isValid = true;
  let errorMessage = "";
  if (validationRules.required && value.trim() === "") {
    isValid = false;
    errorMessage = "Это поле обязательно для заполнения";
  }
  if (validationRules.minLength && value.length < validationRules.minLength) {
    isValid = false;
    errorMessage = `Минимальная длина ${validationRules.minLength} символов`;
  }
  if (validationRules.maxLength && value.length > validationRules.maxLength) {
    isValid = false;
    errorMessage = `Максимальная длина ${validationRules.maxLength} символов`;
  }
  if (validationRules.hasNumber && !/\d/.test(value)) {
    isValid = false;
    errorMessage = "Должен содержать хотя бы одну цифру";
  }
  return { isValid, errorMessage };
};
