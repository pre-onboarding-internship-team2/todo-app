import { useAuth } from "context/authContext";
import FormWithCallback from "./FormWithCallback";

export default function SignUpForm() {
  const { signIn } = useAuth();

  return <FormWithCallback submitCallback={signIn} />;
}
