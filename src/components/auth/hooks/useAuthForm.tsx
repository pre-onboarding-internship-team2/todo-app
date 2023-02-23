import { useState, useMemo } from 'react';
import { emailValidation, getErrorMessages, passwordValidation } from 'utils/validations';
import { ValidateConditions, AuthFormState, FormErrorState } from '../types/auth.types';

const validationConditions: ValidateConditions<AuthFormState> = {
  email: [
    {
      validateFn: emailValidation,
      message: '이메일은 @를 포함해야 합니다',
    },
  ],
  password: [
    {
      validateFn: passwordValidation,
      message: '비밀번호는 8자 이상이어야 합니다',
    },
  ],
};

const useAuthForm = () => {
  const [formState, setFormState] = useState<AuthFormState>({
    email: '',
    password: '',
  });

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormState({
      ...formState,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const errors: FormErrorState<AuthFormState> = useMemo(() => {
    return {
      email: getErrorMessages({
        value: formState.email,
        conditions: validationConditions.email,
      }),
      password: getErrorMessages({
        value: formState.password,
        conditions: validationConditions.password,
      }),
    };
  }, [formState]);

  const isAllValid = useMemo(
    () =>
      formState.email.length > 0 &&
      formState.password.length > 0 &&
      !errors.email &&
      !errors.password,
    [formState, errors]
  );

  const handleSubmit = (callback: (formState: AuthFormState) => void) => {
    const handler: React.FormEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault();

      if (!isAllValid) return;
      callback(formState);
    };
    return handler;
  };

  return {
    formState,
    handleInputChange,
    errors,
    isAllValid,
    handleSubmit,
  };
};

export default useAuthForm;
