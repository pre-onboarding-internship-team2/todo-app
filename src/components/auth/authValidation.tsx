export const authValidation = (formState: {
  email: string;
  password: string;
}) => {
  const isValid = { email: true, password: true };

  if (!formState.email.includes("@")) {
    isValid.email = false;
  }

  if (formState.password.length < 8) {
    isValid.password = false;
  }

  const isAllValid = isValid.email && isValid.password;

  return { isValid, isAllValid };
};
