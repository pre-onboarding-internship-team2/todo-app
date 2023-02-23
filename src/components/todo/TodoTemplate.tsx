type TodoTemplateProps = {
  children: React.ReactNode;
};

const TodoTemplate = ({ children }: TodoTemplateProps) => {
  return <section>{children}</section>;
};

export default TodoTemplate;
