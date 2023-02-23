export type AuthFormState = {
  email: string;
  password: string;
};

export type FormErrorState<T> = {
  [Property in keyof T]: string[] | undefined;
};

export type ValidateConditions<T> = {
  [Property in keyof T]: {
    validateFn: (v: T[Property]) => boolean;
    message: string;
  }[];
};
