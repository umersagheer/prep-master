import { Outlet } from "react-router"
import NavBar from "../ui/navbar"

const Layout = () => {
  return (
    <>
        <NavBar/>
        <div className=" px-2 py-3">
            <Outlet/>
        </div>
    </>
  )
}

export default Layout