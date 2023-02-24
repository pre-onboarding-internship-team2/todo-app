type ButtonTypes = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ShareBtnProps extends ButtonTypes {
  text: string;
  disabled?: boolean;
  testid?: string;
  className: string;
}

const ShareBtn = ({
  disabled,
  type,
  text,
  testid,
  onClick,
  className,
}: ShareBtnProps) => {
  return (
    <button
      disabled={disabled}
      className={className}
      type={type}
      data-testid={testid}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ShareBtn;
