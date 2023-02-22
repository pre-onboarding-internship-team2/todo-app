import { useAuth } from "context/authContext";
import SignForm from "./SignForm";

export default function SignUpForm() {
  const { signIn } = useAuth();

  return <SignForm submitCallback={signIn} />;
}
