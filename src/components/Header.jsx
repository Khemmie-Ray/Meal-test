import TMPLogo from "../assets/Logo.svg"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
            <NavLink to='/'><img src={TMPLogo} alt=""  className="logo"/></NavLink>
            <NavLink to="login" className="login-link">Log In</NavLink>
    </header>
  )
}

export default Header