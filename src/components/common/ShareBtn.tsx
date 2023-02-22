type ButtonTypes = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ShareBtnProps extends ButtonTypes {
  text: string;
}

const ShareBtn = ({ disabled, type, text }: ShareBtnProps) => {
  return (
    <button className={`border`} type={type}>
      {text}
    </button>
  );
};

export default ShareBtn;
