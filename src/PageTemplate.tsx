import { ReactNode } from "react";

interface GlobalLayoutProps {
    children: ReactNode;
}


function PageTemplate({ children }: GlobalLayoutProps){
    return (
        <div className="box-border h-650 w-512 relative rounded-2xl shadow-md my-5 flex flex-col bg-white">
            { children }
        </div>
    )
}

export default PageTemplate;