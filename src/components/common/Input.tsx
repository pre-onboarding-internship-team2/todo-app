import React, { useMemo } from "react";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  errors?: string[];
}

const Input = ({ label, errors, className, ...rest }: InputProps) => {
  const inputClasses = useMemo(() => {
    return `w-full appearance-none rounded-md py-2 pl-4 text-sm leading-6 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`;
  }, [className]);
  return (
    <div className="w-full">
      {label && <label htmlFor={rest.name}>{label}</label>}
      <input id={rest.name} {...rest} className={inputClasses} />
      <p className="h-7 text-rose-600">{errors?.join(" ")}</p>
    </div>
  );
};

export default Input;
