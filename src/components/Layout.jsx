import { Outlet, NavLink } from "react-router-dom"
import icon from "../assets/Logo.svg"

const Layout = () => {
  return (
    <div className="flex">
        <div className="w-60 h-screen bg-yellow-500">
            <img src={icon} alt="" />
        <div className="bg-red-400">
           <NavLink to="." className="block">Dashboard</NavLink>
           <NavLink to="staff" className="block">Staff Registration</NavLink>
           <NavLink to="assignWallet" className="block">Assign Wallet ID</NavLink>
        </div>
        </div>
        <Outlet />
    </div>
  )
}

export default Layout