import CalendarCard from "./CalendarCard"
import Staff from "./Staff"

const Dashboard = () => {
  return (
    <div className="dashBoard">
        <h2>Hello, <br />Admin!</h2>
        <div className="overviewCards">
            <div className="card">
                <h3>Employee</h3>
                <p>20</p>
            </div>
            <div className="card">
                <h3>Generated Meal Pass</h3>
                <p>20</p>
            </div>
            <div className="card">
                <h3>Used Meal Pass</h3>
                <p>10</p>
            </div>
            <div className="card">
                <h3>Unused Meal Pass</h3>
                <p>5</p>
            </div>   
        </div>
        <div className="calendarCards">
            <div className="employeeTab">
                <h2>Staff Summary</h2>
                <Staff />
            </div>
            <div className="calendar">
                <CalendarCard />
            </div>
        </div>
    </div>
  )
}

export default Dashboard