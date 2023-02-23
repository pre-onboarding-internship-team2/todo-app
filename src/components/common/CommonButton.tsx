import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>  {
  text: string
}

const CommonButton = (props: ButtonProps) => {
  return <button {...props} className="w-52 rounded-lg bg-indigo-300 py-1.5 font-semibold">{props.text}</button>;
};

export default CommonButton
