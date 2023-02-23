import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from 'apis/auth';
import { emailValidation, pwValidation } from './validation/Validation';
import Button from 'components/common/Button';
import AuthInput from 'components/common/AuthInput';

export default function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailCheck = emailValidation(email);
  const pwCheck = pwValidation(password);
  const [errMsg, setErrMsg] = useState('');

    const emailChange = (e: any) => {
      let value = e.target.value;

      if (!emailCheck.valid) {
        setErrMsg(emailCheck.message);
      } else setErrMsg('');
      setEmail(value);
    };

    const pwChange = (e: any) => {
      let value = e.target.value;

      if (!pwCheck.valid) {
        setErrMsg(pwCheck.message);
      } else setErrMsg('');
      setPassword(value);
    };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    signup({ email, password })
      .then(() => {
        alert('회원가입에 성공하였습니다.');
        navigate('/signin');
      })
      .catch((err) => setErrMsg(err.message));
  };

  return (
    <div className="hero-content w-8/12 min-w-fit flex-col">
      <h1 className="text-3xl font-bold">회원가입</h1>
      <div className="card w-full max-w-sm bg-base-100 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-control mt-2">
              <label className="mb-1">
                <span className="text-base">이메일</span>
              </label>
              <AuthInput
                type={'text'}
                placeholder={"이메일은'@'를 포함해주세요"}
                onChange={emailChange}
                testId={'email-input'}
              />
            </div>
            <div className="form-control">
              <label className="mt-5 mb-1">
                <span className="text-base">비밀번호</span>
              </label>
              <AuthInput
                type={'password'}
                placeholder={'비밀번호는 8자리 이상 입력해주세요'}
                onChange={pwChange}
                testId={'password-input'}
              />
              <p className="label">
                <span className="label-text-alt">이미 회원이신가요?</span>
                <span
                  onClick={() => {
                    navigate('/signin');
                  }}
                  className="link-hover label-text-alt link"
                >
                  로그인하기
                </span>
              </p>
            </div>
            <div className="form-control mt-6">
              <p className="min-h-[25px] text-center text-sm text-red-500">{errMsg}</p>
            </div>
            <div className="form-control mt-1">
              <Button
                text={'회원가입'}
                disabled={emailCheck.valid && pwCheck.valid ? false : true}
                testId={'signup-button'}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
