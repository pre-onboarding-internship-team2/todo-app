
export default interface ValidationResult {
    valid: boolean;
    message: { 
      email: string,
      password: string,
    };
  }