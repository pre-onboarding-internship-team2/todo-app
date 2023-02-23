import Input from 'components/common/Input';
import { NavLink } from 'react-router-dom';
import useAuthForm from './hooks/useAuthForm';
import { AuthData } from './types/auth.types';

const AuthForm = ({
  labels,
  submitCallback,
}: {
  labels: { title: string; submitButton: string; link: string };
  submitCallback: (authData: AuthData) => void;
}) => {
  const { formState, handleInputChange, errors, isAllValid, handleSubmit } = useAuthForm();
  const submitHandler = handleSubmit(submitCallback);
  return (
    <form onSubmit={submitHandler} className="flex flex-col items-center justify-between gap-y-4">
      <p className="text-2xl">{labels.title}</p>
      <Input
        name="email"
        type="email"
        label="이메일"
        placeholder="todo@email.com"
        value={formState.email}
        onChange={handleInputChange}
        errors={errors.email}
      />
      <Input
        name="password"
        type="password"
        label="비밀번호"
        placeholder="********"
        value={formState.password}
        onChange={handleInputChange}
        errors={errors.password}
      />
      <button
        className="h-10 rounded-md bg-teal-400 px-6 font-semibold text-white hover:bg-teal-600 disabled:bg-slate-600"
        type="submit"
        disabled={!isAllValid}
      >
        {labels.submitButton}
      </button>
      <NavLink
        to={'signup'}
        className={({ isActive }) =>
          ` text-gray-500 hover:underline ${isActive ? 'underline' : ''}`
        }
      >
        {labels.link}
      </NavLink>
    </form>
  );
};

export default AuthForm;