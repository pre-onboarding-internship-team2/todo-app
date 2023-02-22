type ButtonTypes = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ShareBtnProps extends ButtonTypes {
  text: string;
}

const ShareBtn = ({ type, text }: ShareBtnProps) => {
  return <button type={type}>{text}</button>;
};

export default ShareBtn;
