type TodoTemplateProps = {
  children: React.ReactNode;
};

const TodoTemplate = ({ children }: TodoTemplateProps) => {
  return (
    <section className="w-1/2 border border-orange-500 rounded-md">
      {children}
    </section>
  );
};

export default TodoTemplate;
