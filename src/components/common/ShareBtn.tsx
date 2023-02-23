type ButtonTypes = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ShareBtnProps extends ButtonTypes {
  text: string;
  disabled?: boolean;
  testid: string;
}

const ShareBtn = ({ disabled, type, text, testid }: ShareBtnProps) => {
  return (
    <button
      disabled={disabled}
      className={`border ${
        disabled ? "bg-red-500 cursor-not-allowed" : "bg-blue-500"
      }`}
      type={type}
      data-testid={testid}
    >
      {text}
    </button>
  );
};

export default ShareBtn;
