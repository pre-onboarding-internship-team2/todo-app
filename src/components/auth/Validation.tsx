import Auth from 'apis/auth/authApi.type'

type ValidationResult = {
    valid: boolean
    message?: string
}

export function Validation (email: Auth["email"], password: Auth["password"]): ValidationResult {
    let validationResult: ValidationResult = {valid: true, message: ''}
    if(!email.includes('@')){
        validationResult = {valid: false, message: "@를 포함한 이메일 형식이 아닙니다." }
    }
    else if (password.length < 8){
        validationResult = { valid: false, message: "비밀번호는 최소 8자 이상이어야 합니다."}
    }
    else {
        validationResult = { valid: true, message: ""}
    } 

    return validationResult;
}
