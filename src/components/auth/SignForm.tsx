import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import CommonInput from 'components/common/CommonInput'
import CommonButton from 'components/common/CommonButton'
import AuthContext from 'context/auth/AuthContext'
import { Validation } from 'components/auth/Validation'

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

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>): void  => {
    e.preventDefault();
    if(pageType === 'signin'){
      signin({ email, password })
      .then((data) => saveToken(data.accessToken))
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
    const { valid, message } = Validation(email, password);
    setDisabled(!valid)
    setErrorMsg(message!)
  },[email, password])

  return (
    <div className='container w-1/2 flex flex-col justify-center '>
      <form onSubmit={onSubmitForm} className='flex flex-col items-center justify-center'>
        <CommonInput type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
        <CommonInput type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} required/>
        {errorMsg && <p className='text-rose-500 my-1.5 font-semibold'>{errorMsg}</p>}

        <CommonButton disabled={disabled}> {pageType === 'signin' ? "로그인" : "회원가입"} </CommonButton>
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