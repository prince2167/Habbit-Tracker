import { ReactNode } from "react";
import { Navbar, Sidebar } from "./index"
interface childrenProps {
    children: ReactNode;
}
const Layout = ({children}:childrenProps) => {
  return (
    <div>
        <Navbar/>
        <div className="flex ">
            <Sidebar/>
            <main>{children}</main>
        </div>
    </div>
  )
}

export default Layout