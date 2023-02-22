type ShareInputProps = {
  type: string;
  testid: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
};

const ShareInput = ({
  type,
  testid,
  onChange,
  value,
  placeholder,
}: ShareInputProps) => {
  return (
    <input
      className="border-2"
      type={type}
      data-testid={testid}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default ShareInput;
