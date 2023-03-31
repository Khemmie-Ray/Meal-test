import topBg from "../assets/Bg.svg"
import icon from "../assets/Logo.svg"
import avatar from "../assets/Avatar.svg"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const Employee = () => {
  const [employee, setEmployee] = useState({});

  const { id } = useParams();
 
  useEffect(() => {
    fetch(`https://plate-tracker.herokuapp.com/fetch/staff/single/employeeid`,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        employeeId: id
      })
    })
    .then(response => response.json())
    .then(data => {
      setEmployee(data.result[0])
    })
  }, [id])

  const generateMealPass = () => {
    fetch(`https://plate-tracker.herokuapp.com/mealpass/create`,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        walletAddress: employee.wallet_address
      })
    })
    .then(response => response.json())
    .then(data => {
      alert("Meal Pass Successfully generated")
    })
  }

  return (
    <div className="layout">
      <div className="nav-box">
        <Link to=".."><img src={icon} alt="" /></Link>
        <div>
          <img src={avatar} alt="" />
          <h3>{employee.firstname} {employee.lastname}</h3>
          <p>{employee.role}</p>
        </div>
        <a href="">Ticket</a>
      </div>
      <div className="dashBoard" id="employee">
        <img src={topBg} alt="" />
        <div>
          <h3>Welcome!</h3>
          <div className="card mealPass">
            <p>Kindly generate meal pass</p>
            <button onClick={generateMealPass}>Generate</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employee