import { ReactNode } from "react";
import { Navbar, Sidebar } from "../index"
interface childrenProps {
    children: ReactNode;
}
const Layout = ({children}:childrenProps) => {
  return (
    <div>
       
        <div className="flex ">
            <Sidebar/>
            <main className=" w-full px-6 py-4 ">{children}</main>
        </div>
    </div>
  )
}

export default Layout