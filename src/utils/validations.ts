export const emailValidation = (email: string) => {
  return email.includes("@");
};

export const passwordValidation = (password: string) => {
  return password.length >= 8;
};

export const getErrorMessages = ({
  value,
  conditions,
}: {
  value: string;
  conditions: { validateFn: (v: string) => boolean; message: string }[];
}): string[] | undefined => {
  if (!value) return undefined;
  const errorMessages = conditions
    .filter((con) => !con.validateFn(value))
    .map((con) => con.message);

  if (!errorMessages.length) return undefined;
  return errorMessages;
};
