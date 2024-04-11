import { FC } from "react";
import useFormWithValidation from "../../hooks/useFormWithValidation";

const FormComponent: FC = () => {
  const { formState, handleChange, handleSubmit } = useFormWithValidation({
    username: {
      value: "",
      validationRules: {
        required: true,
        minLength: 3,
        maxLength: 30,
      },
    },
    password: {
      value: "",
      validationRules: {
        required: true,
        hasNumber: true,
        minLength: 8,
      },
    },
  });

  const submitForm = () => {
    alert("Форма отправлена успешно!");
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div>
        <label htmlFor="username">Имя пользователя:</label>
        <input
          id="username"
          name="username"
          value={formState.username.value}
          onChange={handleChange}
          className={formState.username.isValid ? "valid" : "invalid"}
        />
        {!formState.username.isValid && <span>{formState.username.errorMessage}</span>}
      </div>

      <div>
        <label htmlFor="password">Пароль:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formState.password.value}
          onChange={handleChange}
          className={formState.password.isValid ? "valid" : "invalid"}
        />
        {!formState.password.isValid && <span>{formState.password.errorMessage}</span>}
      </div>

      <button type="submit">Отправить</button>
    </form>
  );
};

export default FormComponent;
