const EMAIL_CHECK = new RegExp(
  "[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*",
);
const PW_CHECK = new RegExp("(?=.{8,})");

export const authValidation = (formState: {
  email: string;
  password: string;
}) => {
  const isValid = { email: true, password: true };

  if (!EMAIL_CHECK.test(formState.email)) {
    isValid.email = false;
  }

  if (!PW_CHECK.test(formState.password)) {
    isValid.password = false;
  }

  const isAllValid = isValid.email && isValid.password;

  return { isValid, isAllValid };
};
