import React, { useState, InputHTMLAttributes, ChangeEvent } from 'react';

export type InputValue = string | number | ReadonlyArray<string>
export type InputChangeEvent = ChangeEvent<HTMLInputElement>

interface CommonInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  className?: string;
  value?: InputValue;
  placeholder?: string;
  onChange?: (e: InputChangeEvent) => void
}

const CommonInput = (props: CommonInputProps) => {
  const [inputValue, setInputValue] = useState<InputValue>(props.value || '');
  const changeHandler = (e: InputChangeEvent) => {
    setInputValue(e.target.value);
    props.onChange && props.onChange(e)
  }
  const defaultClassName = "border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 w-80 mb-3.5 "
  const displayname = defaultClassName.concat(props.className || '')
  return (
    <input type={props.type} value={props.value} placeholder={props.placeholder} onChange={changeHandler} className={displayname} />
  );
};

export default CommonInput;