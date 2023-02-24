type ShareInputProps = {
  role?: string;
  type: string;
  testid: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  className: string;
};

const ShareInput = ({
  role,
  type,
  testid,
  onChange,
  value,
  placeholder,
  className,
}: ShareInputProps) => {
  return (
    <input
      className={className}
      type={type}
      data-testid={testid}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default ShareInput;
