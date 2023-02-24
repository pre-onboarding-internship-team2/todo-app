import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>  {
  children: React.ReactNode
  className?: string
}



const CommonButton = (props: ButtonProps) => {
  const defaultClassName = "w-52 rounded-lg bg-indigo-300 py-1.5 font-semibold "
  const displayname = defaultClassName.concat(props.className || '')

  return <button {...props} className={displayname}>{props.children}</button>;
};

export default CommonButton
