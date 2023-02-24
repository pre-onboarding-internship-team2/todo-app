interface Iprops {
  type?: 'submit' | 'button' | 'reset';
  text: string;
  disabled: boolean;
  testId: string;
}

export default function Button({ type, text, disabled, testId }: Iprops) {
  return (
    <button className="btn" type={type} disabled={disabled} data-testid={testId}>
      {text}
    </button>
  );
}
