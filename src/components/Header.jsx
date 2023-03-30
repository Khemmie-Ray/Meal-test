import TMPLogo from "../assets/Logo.svg"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="">
            <NavLink to='/'><img src={TMPLogo} alt="" /></NavLink>
            <NavLink to="dashboard">Dashboard</NavLink>
            <NavLink to="login" className="login-link">Log In</NavLink>
    </header>
  )
}

export default Header