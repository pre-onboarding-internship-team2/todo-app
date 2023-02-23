import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { signUpInstance, signInInstance } from 'apis/auth/authApi';

type AuthProps = {
  pageType: string
}

const SignForm : React.FC<AuthProps> = ( {pageType} ) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const onChangeHanlder = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { target: {name, value} } = e;
    if(name === 'email') setEmail(value)
    else if(name === 'password') setPassword(value)
  }

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>): void  => {
    e.preventDefault();
    if(pageType === 'signin'){
      signInInstance(email, password)
        .then((res) => {
          localStorage.setItem("ACCESS_TOKEN", res.data.access_token)
          navigate("/todo");
          setErrorMsg('');
        })
        .catch((error => {
          if (error.response.status === 401) {
            setErrorMsg('이메일 또는 비밀번호가 일치하지 않습니다.')
          }
          else if(error.response.status === 404){
            setErrorMsg('사용자를 찾을 수 없습니다. 다시 시도해 주세요.')
          }
     }))
    }
    else if( pageType === 'signup'){
      signUpInstance(email, password)
        .then(() => {
            alert('회원가입에 성공하였습니다. 로그인을 시도해주세요.')
            navigate("/signin");
        })
        .catch((error) => {
            if (error.response.status === 400) {
                alert('이미 존재하는 이메일입니다.');
                navigate("/");
            }
        });
    }
  }

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <input type="email" name="email" value={email} placeholder='Email' onChange={onChangeHanlder} required/>
        <input type="password" name="password" value={password} placeholder='Password' onChange={onChangeHanlder} required/>
        <button>{pageType === 'signin' ? "로그인" : "회원가입"}</button>
        {errorMsg && <p>{errorMsg}</p>}
      </form>

      { pageType === 'signin' ? (
        <>
        <p>아직 회원이 아니신가요?</p> <Link to='/signup'>회원가입</Link>
        </>
      ) : ( 
        <>
        <p>이미 회원이신가요?</p> <Link to='/signin'>로그인</Link>
        </>
      )}
    </>
  )
}

export default SignForm