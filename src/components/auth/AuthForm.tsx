import ShareBtn from "components/common/ShareBtn";
import ShareInput from "components/common/ShareInput";
import useInput from "hooks/useInput";

type AuthFormProps = {
  isLogin: boolean;
};

const AuthForm = ({ isLogin }: AuthFormProps) => {
  const { value: email, changeHandler: emailChangeHandler } = useInput("");
  const { value: password, changeHandler: passwordChangeHandler } =
    useInput("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(e.target.value);
  // };

  // const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPassword(e.target.value);
  // };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLogin) {
      // 로그인 api
    } else {
      // 회원가입 api
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <ShareInput
        type="email"
        testid="email-input"
        value={email}
        onChange={emailChangeHandler}
      />
      <ShareInput
        type="password"
        testid="password-input"
        value={password}
        onChange={passwordChangeHandler}
      />
      <ShareBtn type="submit" text={isLogin ? "로그인" : "회원가입"} />
    </form>
  );
};

export default AuthForm;
