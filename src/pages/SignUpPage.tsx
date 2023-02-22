import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { info } from "../components/auth/types";
import { validation } from "../components/auth/validation";
import { AuthTemplete } from "../components/common/AuthTemplete";

export const SignUpPage = () => {
  const [userInfo, setUserInfo] = useState<info>({ email: "", password: "" });
  const [isUserInfo, setIsUserInfo] = useState<boolean>(false);
  const location = useLocation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  useEffect(() => {
    validation(userInfo.email, "email") &&
    validation(userInfo.password, "password")
      ? setIsUserInfo(true)
      : setIsUserInfo(false);
  }, [userInfo]);

  return (
    <>
      <AuthTemplete
        handleFunc={handleChange}
        bool={isUserInfo}
        path={location.pathname}
      />
    </>
  );
};
