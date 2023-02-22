import { useEffect, useState } from "react";
import { SignRequestProps } from "apis/auth/sign.type";

export default function SignForm({
  submitCallback,
}: {
  submitCallback: (props: SignRequestProps) => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidForm, setIsValidForm] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitCallback({ email, password });
  };

  useEffect(() => {
    const checkValidForm = () => {
      return email.includes("@") && password.length >= 8;
    };

    setIsValidForm(checkValidForm());
  }, [email, password]);

  return (
    <>
      <form onSubmit={handleSubmit} className={"mt-4"}>
        <div className="mb-2">
          <label className="flex justify-between">
            email
            <input
              type="email"
              data-testid="email-input"
              placeholder="@를 포함한 이메일 입력"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={"w-60"}
            />
          </label>
        </div>
        <div className="mb-2">
          <label className="flex justify-between">
            password
            <input
              type="password"
              data-testid="password-input"
              placeholder="8자 이상 비밀번호 입력"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={"w-60"}
            />
          </label>
        </div>
        <button
          type="submit"
          data-testid="signin-button"
          disabled={!isValidForm}
        >
          submit
        </button>
      </form>
    </>
  );
}
