import CalendarCard from "./CalendarCard"
import Staff from "./Staff"

const Dashboard = () => {
  return (
    <div className='w-screen p-4 bg-gray-300'>
        <h2 className='font-bold'>Hello, <br />Admin!</h2>
        <div className="flex justify-between">
            <div className='bg-white w-60 h-40 flex justify-center items-center flex-col p-2'>
                <h3>Employee</h3>
                <p>20</p>
            </div>
            <div className='bg-white w-60 h-40 flex justify-center items-center flex-col p-2'>
                <h3>Generated Meal Pass</h3>
                <p>20</p>
            </div>
            <div className='bg-white w-60 h-40 flex justify-center items-center flex-col p-2'>
                <h3>Used Meal Pass</h3>
                <p>10</p>
            </div>
            <div className='bg-white w-60 h-40 flex justify-center items-center flex-col p-2'>
                <h3>Unused Meal Pass</h3>
                <p>5</p>
            </div>   
        </div>
        <div className="flex mt-12 justify-between">
            <div className="w-90">
                <h2 className="font-bold">Staff Summary</h2>
                <Staff />
            </div>
            <div className="w-80 bg-white p-8">
                <CalendarCard />
            </div>
        </div>
    </div>
  )
}

export default Dashboard