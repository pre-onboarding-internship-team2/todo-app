import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import CommonInput from 'components/common/CommonInput'
import CommonButton from 'components/common/CommonButton'
import AuthContext from 'context/auth/AuthContext'

import { signin, signup } from 'apis/auth/index'
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
    if(!email.includes('@'))setErrorMsg('이메일 형식이 올바르지 않습니다.')
    else if(password.length < 8)setErrorMsg('비밀번호는 최소 8자 이상이어야 합니다.')
    if(email.includes('@') && password.length > 7 ) setErrorMsg('')
    if(email.length === 0 && password.length === 0) setErrorMsg('')

    return email.includes('@') && password.length > 7 ? false : true
  }

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>): void  => {
    e.preventDefault();
    if(pageType === 'signin'){
      signin({ email, password })
      .then((data) => saveToken(data.accessToken) )
      .catch((err) => setErrorMsg(err))
    }
    else if( pageType === 'signup'){
      signup({ email, password })
      .then((data) => {
        alert(data.message);
        navigate("/signin"); 
      })
      .catch((err) => alert(err))
    }
  }

  useEffect(() => {
    const isValid = validation(email, password);
    setDisabled(isValid)
  },[email, password])

  return (
    <div className='container w-1/2 flex flex-col justify-center '>
      <form onSubmit={onSubmitForm} className='flex flex-col items-center justify-center'>
        <CommonInput type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
        <CommonInput type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} required/>
        {errorMsg && <p className='text-rose-500 my-1.5 font-semibold'>{errorMsg}</p>}

        <CommonButton disabled={disabled} text={pageType === 'signin' ? "로그인" : "회원가입"}/>
      </form>

      { pageType === 'signin' ? (
        <>
        <p className='text-center mt-2'>아직 회원이 아니신가요? <Link to='/signup' className='ml-1 text-violet-400 font-semibold'>회원가입</Link></p> 
        </>
      ) : ( 
        <>
        <p className='text-center mt-2'>이미 회원이신가요? <Link to='/signin' className='ml-1 text-violet-400 font-semibold'>로그인</Link></p> 
        </>
      )}
    </div>
  )
}

export default SignForm