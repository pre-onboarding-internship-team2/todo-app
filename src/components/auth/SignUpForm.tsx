import { useAuth } from "context/authContext";
import FormWithCallback from "./FormWithCallback";

export default function SignupForm() {
  const { signUp } = useAuth();

  return <FormWithCallback submitCallback={signUp} />;
}
