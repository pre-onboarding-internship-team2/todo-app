type ShareInputProps = {
  role?: string;
  type: string;
  testid: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
};

const ShareInput = ({
  role,
  type,
  testid,
  onChange,
  value,
  placeholder,
}: ShareInputProps) => {
  return (
    <input
      className={`px-1 ${
        role === "todo" ? "py-2" : "py-4"
      } text-black rounded-md border-2`}
      type={type}
      data-testid={testid}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default ShareInput;
