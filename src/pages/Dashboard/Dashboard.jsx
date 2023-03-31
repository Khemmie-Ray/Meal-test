import { useState, useEffect } from "react"
import CalendarCard from "./CalendarCard"

const Dashboard = () => {
    const [staffNum, setStaffNum] = useState([])

    useEffect(() => {
        fetch('https://plate-tracker.herokuapp.com/fetch/staff/all')
        .then(response => response.json())
        .then(data => setStaffNum(data.results))
    }, [])

  return (
    <div className="dashBoard">
        <h2>Hello, <br />Admin!</h2>
        <div className="overviewCards">
            <div className="card">
                <h3>Employee</h3>
                <p>{staffNum.length}</p>
            </div>
            <div className="card">
                <h3>Generated Meal Pass</h3>
                <p>0</p>
            </div>
            <div className="card">
                <h3>Used Meal Pass</h3>
                <p>0</p>
            </div>
            <div className="card">
                <h3>Unused Meal Pass</h3>
                <p>0</p>
            </div>   
        </div>
        <div className="calendarCards">
            <div className="calendar">
                <CalendarCard />
            </div>
        </div>
    </div>
  )
}

export default Dashboard