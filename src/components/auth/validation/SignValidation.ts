import { AuthRequestProps } from "../../../apis/auth/auth.types";
import ValidationResult from "./ValidationResult.types";

export default function SignValidation({email, password}: AuthRequestProps): ValidationResult{
    const EMAIL_CHECK = new RegExp("@");
    const PW_CHECK = new RegExp("(?=.{8,})");
    
    const emailValid = EMAIL_CHECK.test(email)
    const passwordValid = PW_CHECK.test(password);

    const validationResult: ValidationResult = {
        valid: Boolean(emailValid && passwordValid),
        message: { 
            email: emailValid ? '': '유효한 이메일 형식이 아닙니다.',
            password: passwordValid ? '': '비밀번호는 8자리 이상이어야 합니다.',
        },
    };
    
    return validationResult;
};