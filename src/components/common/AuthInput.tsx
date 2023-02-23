interface Iprops {
  type: string;
  title: string;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  testId: string;
}

export default function AuthInput({ type, title, placeholder, onChange, testId }: Iprops) {
  return (
    <div className="form-control mt-2">
      <label className="mb-1">
        <span className="text-base">{title}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        data-testid={testId}
        className="input-bordered input text-sm"
      />
    </div>
  );
}
