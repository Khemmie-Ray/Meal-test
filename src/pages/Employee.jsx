import topBg from "../assets/Bg.svg"
import icon from "../assets/Logo.svg"
import avatar from "../assets/Avatar.svg"
import { Link } from "react-router-dom"

const Employee = () => {
 

  return (
    <div className="layout">
      <div className="nav-box">
        <Link to=".."><img src={icon} alt="" /></Link>
        <div>
          <img src={avatar} alt="" />
          <h3>Mike</h3>
          <p>Technician</p>
        </div>
        <a href="">Ticket</a>
      </div>
      <div className="dashBoard" id="employee">
        <img src={topBg} alt="" />
        <div>
          <h3>Welcome!</h3>
          <div className="card mealPass">
            <p>Kindly generate meal pass</p>
            <button>Generate</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employee