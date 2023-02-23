import React, { useState, InputHTMLAttributes, ChangeEvent } from 'react';

export type InputValue = string | number | ReadonlyArray<string>
export type InputChangeEvent = ChangeEvent<HTMLInputElement>

interface CommonInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  value?: InputValue;
  placeholder: string;
  onChange?: (e: InputChangeEvent) => void
}

const CommonInput = ({ type, value="", placeholder, onChange }: CommonInputProps) => {
  const [inputValue, setInputValue] = useState<InputValue>(value);
  const changeHandler = (e: InputChangeEvent) => {
    setInputValue(e.target.value);
    onChange && onChange(e)
  }

  return (
    <input type={type} value={value} placeholder={placeholder} onChange={changeHandler} className='border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 w-80 mb-3.5' />
  );
};

export default CommonInput;