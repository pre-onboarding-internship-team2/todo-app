import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>  {
  text: string
}

const CommonButton = (props: ButtonProps) => {
  return <button {...props}>{props.text}</button>;
};

export default CommonButton
