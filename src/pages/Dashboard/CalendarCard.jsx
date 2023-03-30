import { useState } from 'react';
import Calendar from 'react-calendar';

const CalendarCard = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const handleDateChange =(e) =>{
        setCurrentDate(e);
    }
    return (
        <div className='Sample__container'>
            <div  className=""><Calendar onChange={handleDateChange} value={currentDate} />
            </div>    
        </div>
    )
}

export default CalendarCard;