import ValidationResult from './ValidationResult.types';

export default function validatePassword(password: string): ValidationResult {
  if (password.length === 0) return { valid: false, message: '비밀번호를 입력 해 주세요.' };

  const result: ValidationResult = { valid: password.length >= 8 };

  if (!result.valid) {
    result.message = '비밀번호는 8자리 이상이어야 합니다.';
  }

  return result;
}
