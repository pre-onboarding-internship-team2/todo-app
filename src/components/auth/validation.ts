const EMAIL_CHECK = new RegExp(
  "[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*"
);
const PW_CHECK = new RegExp("(?=.{8,})");

export const validation = (data: string, type: string): boolean => {
  switch (type) {
    case "email":
      return EMAIL_CHECK.test(data);
    case "password":
      return PW_CHECK.test(data);
    default:
      return false;
  }
};
