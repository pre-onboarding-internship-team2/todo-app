import ValidationResult from './ValidationResult.types';

export default function validateEmail(email: string): ValidationResult {
  if (email.length === 0) return { valid: false, message: '이메일을 입력 해 주세요.' };

  const result: ValidationResult = { valid: email.includes('@') };

  if (!result.valid) {
    result.message = '유효한 이메일 형식이 아닙니다.';
  }

  return result;
}
