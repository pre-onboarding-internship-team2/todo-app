import React, { useContext } from 'react';
import {  useNavigate } from "react-router-dom";
import CommonButton from 'components/common/CommonButton';
import AuthContext from 'context/auth/AuthContext';

const TodoPage = () => {
  const navigate = useNavigate();
  const { clearToken } = useContext(AuthContext);
  const onClickLogout = () => {
    clearToken()
    navigate('/signin')
  }
  return (
    <div>
      <h2>todoPage</h2>
      <CommonButton text="로그아웃" onClick={onClickLogout}/>
    </div>
  )
}

export default TodoPage