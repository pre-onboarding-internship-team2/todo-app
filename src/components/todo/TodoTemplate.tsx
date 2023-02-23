type TodoTemplateProps = {
  children: React.ReactNode;
};

const TodoTemplate = ({ children }: TodoTemplateProps) => {
  return <section className="w-1/2 border">{children}</section>;
};

export default TodoTemplate;
