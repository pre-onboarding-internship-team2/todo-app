import ValidationResult from './Validation.types';

const EMAIL_CHECK = new RegExp('@');
const PW_CHECK = new RegExp('(?=.{8,})');

const emailValidation = (email: string): ValidationResult => {
  if (email.length === 0) {
    return { valid: false, message: '이메일을 입력해 주세요' };
  } else if (!EMAIL_CHECK.test(email)) {
    return { valid: false, message: '이메일에 \'@\'를 포함해주세요' };
  } else return { valid: true, message: '' };
};

const pwValidation = (pw: string): ValidationResult => {
  if (pw.length === 0) {
    return { valid: false, message: '비밀번호를 입력해주세요' };
  } else if (!PW_CHECK.test(pw)) {
    return { valid: false, message: '비밀번호는 8자리 이상 입력해주세요' };
  } else return { valid: true, message: '' };
};

export { emailValidation, pwValidation };
