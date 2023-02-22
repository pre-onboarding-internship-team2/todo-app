import { useAuth } from "context/authContext";
import SignForm from "./SignForm";

export default function SignUpForm() {
  const { signUp } = useAuth();

  return <SignForm submitCallback={signUp} />;
}
