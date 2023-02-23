import useAuthForm from 'components/auth/hooks/useAuthForm';
import Input from 'components/common/Input';
import { AuthContext } from 'context/authContext';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const Signin = () => {
  const { login } = useContext(AuthContext);
  const { formState, handleInputChange, errors, isAllValid } = useAuthForm();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!isAllValid) return;
    login(formState);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-between gap-y-4">
      <p className="text-2xl">로그인</p>
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
        로그인
      </button>
      <NavLink
        to={'signup'}
        className={({ isActive }) =>
          ` text-gray-500 hover:underline ${isActive ? 'underline' : ''}`
        }
      >
        가입하러 가기
      </NavLink>
    </form>
  );
};

export default Signin;
