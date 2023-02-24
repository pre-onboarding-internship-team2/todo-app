interface Props {
    children: React.ReactNode
}
  
const TodoLayout: React.FC<Props> = (props: Props) => {
  return (
    <div>
        <div className='w-full flex justify-center'>        
            {props.children}
        </div>
    </div>
  )
}
export default TodoLayout