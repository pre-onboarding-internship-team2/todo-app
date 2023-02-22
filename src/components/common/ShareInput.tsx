type ShareInputProps = {
  type: string;
  testid: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const ShareInput = ({ type, testid, onChange, value }: ShareInputProps) => {
  return (
    <input type={type} data-testid={testid} onChange={onChange} value={value} />
  );
};

export default ShareInput;
