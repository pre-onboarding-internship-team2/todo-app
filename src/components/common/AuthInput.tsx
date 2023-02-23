interface Iprops {
  type: string;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  testId: string;
}

export default function AuthInput({ type, placeholder, onChange, testId }: Iprops) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      data-testid={testId}
      className="input-bordered input text-sm"
    />
  );
}
