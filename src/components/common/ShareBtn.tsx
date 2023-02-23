type ButtonTypes = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ShareBtnProps extends ButtonTypes {
  role?: string;
  text: string;
  disabled?: boolean;
  testid?: string;
}

const ShareBtn = ({
  role,
  disabled,
  type,
  text,
  testid,
  onClick,
}: ShareBtnProps) => {
  return (
    <button
      disabled={disabled}
      className={`${role === "todo" ? "p-2" : "p-4"} ${
        role === "todo" ? "w-16" : role === "logout" ? "w-28" : "w-44"
      } rounded-md border ${disabled && "bg-red-500 cursor-not-allowed"} ${
        role === "logout" ? "bg-transparent text-white" : "bg-blue-500"
      }`}
      type={type}
      data-testid={testid}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ShareBtn;
