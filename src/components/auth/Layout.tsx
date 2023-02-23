interface Props {
    children: React.ReactNode
    title: string
}
  
const DefaultLayout: React.FC<Props> = (props: Props) => {
  return (
    <div>
        <div className="w-full h-screen flex flex-col items-center justify-center">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 mb-6">{props.title}</h2>
        
        {props.children}

        </div>
    </div>
  )
}
export default DefaultLayout