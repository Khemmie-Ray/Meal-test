import icon from "../assets/Logo.svg"
import { Link } from "react-router-dom"
import topBg from "../assets/Bg.svg"
import { useState, useEffect } from "react"

const Vendor = () => {
  const [mealStatus, setMealStatus] = useState([])

  useEffect(() => {
    fetch('https://plate-tracker.herokuapp.com/fetch/staff/all')
    .then(response => response.json())
    .then(data => setMealStatus(data.results))
}, [])

const mealPass = mealStatus.map((info, index) => (
  <tr key={info.id}>
  <td>{index + 1}</td>
  <td>{info.firstname} {info.lastname}</td>
  <td>{info.role}</td>
  <td>000{index + 1}</td>
  <td><button>Not Collected</button></td>
  </tr>
))

  return (
    <div className="layout">
    <div className="nav-box">
      <Link to=".."><img src={icon} alt="" /></Link>
      <div>
        <h3>Abisola</h3>
        <p>Vendor</p>
      </div>
      <a href="#">Meal Status</a>
    </div>
    <div className="dashBoard" id="employee">
      <img src={topBg} alt="" />
      <div>
        <h3>Welcome!</h3>
        <table className="staffInfo">
            <thead>
                <tr>
                    <th>S/N</th>
                    <th>Name</th>
                    <th>Roles</th>
                    <th>Staff ID</th>
                    <th>Status</th>
                </tr> 
            </thead>
            <tbody>
                {mealPass}    
            </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default Vendor