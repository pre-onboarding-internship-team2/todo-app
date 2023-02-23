import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { info } from "../components/auth/types";
import { validation } from "../components/auth/validation";
import { AuthTemplete } from "../components/common/AuthTemplete";
import { signUpApi } from "../apis/auth/auth";

export const SignUpPage = () => {
  const [userInfo, setUserInfo] = useState<info>({ email: "", password: "" });
  const [isUserInfo, setIsUserInfo] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signUpApi(userInfo.email, userInfo.password).then(() => {
        alert("회원가입이 완료되었습니다.");
        navigate("/signin");
      });
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/todo");
    }
  }, [navigate]);

  useEffect(() => {
    validation(userInfo.email, "email") &&
    validation(userInfo.password, "password")
      ? setIsUserInfo(true)
      : setIsUserInfo(false);
  }, [userInfo]);

  return (
    <>
      <AuthTemplete
        submitFunc={handleSubmit}
        handleFunc={handleChange}
        email={userInfo.email}
        password={userInfo.password}
        bool={isUserInfo}
        path={location.pathname}
      />
    </>
  );
};
