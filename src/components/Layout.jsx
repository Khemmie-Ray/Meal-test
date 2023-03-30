import { Outlet, NavLink } from "react-router-dom"
import icon from "../assets/Logo.svg"

const Layout = () => {
  return (
    <div className="layout">
        <div className="nav-box">
            <img src={icon} alt="" />
        <div className="nav-links">
           <NavLink to=".">Dashboard</NavLink>
           <NavLink to="staff">Staff Registration</NavLink>
           <NavLink to="assignWallet">Assign Wallet ID</NavLink>
        </div>
        </div>
        <Outlet />
    </div>
  )
}

export default Layout