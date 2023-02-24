import { signIn, signUp } from "apis/auth/authApi";
import ShareBtn from "components/common/ShareBtn";
import ShareInput from "components/common/ShareInput";
import { AuthContext } from "context/AuthContext";
import useInput from "hooks/useInput";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authValidation } from "./authValidation";

type AuthFormProps = {
  isLogin: boolean;
};

const AuthForm = ({ isLogin }: AuthFormProps) => {
  const navigate = useNavigate();
  const { value: email, changeHandler: emailChangeHandler } = useInput("");
  const { value: password, changeHandler: passwordChangeHandler } =
    useInput("");

  const formState = { email, password };

  const { isAllValid } = authValidation(formState);

  const { saveToken } = useContext(AuthContext);

  const authSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isAllValid) return;

    if (isLogin) {
      // 로그인 api
      signIn({ email, password }).then((res) => {
        if (res.status >= 400) {
          return;
        }
        if (typeof res === "string") {
          saveToken(res);
          window.location.reload();
        }
      });
    } else {
      // 회원가입 api
      signUp({ email, password }).then((res) => {
        if (res) {
          if (res.status >= 400) {
            return;
          }
        }
        navigate("/signin");
      });
    }
  };

  return (
    <form
      className="w-2/5 h-1/2 space-y-4 flex flex-col justify-center items-center border border-orange-300 bg-orange-300 rounded-md text-white"
      onSubmit={authSubmitHandler}
    >
      <ShareInput
        type="email"
        testid="email-input"
        value={email}
        onChange={emailChangeHandler}
        placeholder="이메일"
        className={"px-1 py-4 text-black rounded-md border-2"}
      />
      <ShareInput
        type="password"
        testid="password-input"
        value={password}
        onChange={passwordChangeHandler}
        placeholder="비밀번호"
        className={"px-1 py-4 text-black rounded-md border-2"}
      />
      <ShareBtn
        disabled={!isAllValid}
        className={`p-4 w-44 rounded-md border ${
          !isAllValid ? "bg-red-500 cursor-not-allowed" : "bg-blue-500"
        }`}
        type="submit"
        testid={isLogin ? "signin-button" : "signup-button"}
        text={isLogin ? "로그인" : "회원가입"}
      />
    </form>
  );
};

export default AuthForm;
