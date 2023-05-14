import { useState } from "react";

export const useForm = (initialForm, validateFormData) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    const formData = { ...form, [name]: e.target.value };
    const validationErrors = validateFormData(formData);

    setErrors({
      ...errors,
      [name]: validationErrors[name],
    });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setForm(initialForm);
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFormData(form);
    setErrors(validationErrors);

    const isValid = Object.values(validationErrors).every(
      (error) => error === ""
    );
    setIsFormValid(isValid);

    if (isValid) {
      // Submit the form data here
      console.log(form);
    }
  };

  return {
    form,
    errors,
    isFormValid,
    handleReset,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
