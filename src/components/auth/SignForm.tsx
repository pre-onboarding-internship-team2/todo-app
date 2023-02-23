import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { signUpInstance, signInInstance } from 'apis/auth/authApi';
import CommonInput from 'components/common/CommonInput'
import CommonButton from 'components/common/CommonButton'
import AuthContext from 'context/auth/AuthContext'

type AuthProps = {
  pageType: string
}

const SignForm : React.FC<AuthProps> = ( {pageType} ) => {
  const navigate = useNavigate();
  const { saveToken } = useContext(AuthContext);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  
  const validation = (email: string, password: string): boolean => {
    return email.includes('@') && password.length > 7 ? false : true
  }

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>): void  => {
    e.preventDefault();
    if(pageType === 'signin'){
      signInInstance(email, password)
        .then((res) => {
          saveToken(res.data.access_token)
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

  useEffect(() => {
    const isValid = validation(email, password);
    setDisabled(isValid)
  },[email, password])

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <CommonInput type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} required/>
        <CommonInput type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} required/>
        <CommonButton disabled={disabled} text={pageType === 'signin' ? "로그인" : "회원가입"}/>
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