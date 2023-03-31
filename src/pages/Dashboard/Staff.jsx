import { useEffect, useState } from "react"

const Staff = () => {
    const [staffData, setStaffData] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [text, setText] = useState({firstname: '', lastname: '', role: '', employeeid: ''})

    useEffect(() => {
        fetch('https://plate-tracker.herokuapp.com/fetch/staff/all')
        .then(response => response.json())
        .then(data => setStaffData(data.results))
    }, [])
    
    const staffInfo = staffData.map((info, index) => (
            <tr key={info.id}>
            <td>{index + 1}</td>
            <td>{info.firstname} {info.lastname}</td>
            <td>{info.role}</td>
            <td>{info.wallet_address}</td>
            <td><button>Delete</button></td>
            </tr>
    ))

    const handleModal = () => {
        setOpenModal(!openModal)
    }

    function handleChange(e) {
        const {id, value} = e.target;
        setText(prev => ({
            ...prev,
            [id]: value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const {firstname, lastname, role, employeeid} = text
        const data = {
            firstName: firstname,
            lastName: lastname,
            employeeId: employeeid,
            role: role
        }
        fetch('https://plate-tracker.herokuapp.com/staff/register/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => { console.log(data)
            setStaffData([...staffData, text])
            setModalOpen(false)
        })
    }

 
  return (
    <div className="dashBoard staff">
        <div>
        <button onClick={handleModal} className="addNew">Add New +</button>
       
        </div>
        <table className="staffInfo">
            <thead>
                <tr>
                    <th>S/N</th>
                    <th>Name</th>
                    <th>Roles</th>
                    <th>Wallet Address</th>
                    <th>Action</th>
                </tr> 
            </thead>
            <tbody>
                {staffInfo}    
            </tbody>
        </table>
       {openModal && (<div className="modal-card">
            <form action="" className="bg-grey-200" onSubmit={handleSubmit}>
                <input type="text" id="firstname" placeholder="First Name" onChange={handleChange} value={text.firstname}/>
                <input type="text" id="lastname" placeholder="Last Name" className="block mb-2" value={text.lastname} onChange={handleChange}/>
                <input type="text" id="role" placeholder="Role"  value={text.role} onChange={handleChange}/>
                <input type="text" id="employeeid" placeholder="Employee id"  value={text.employeeid} onChange={handleChange}/>
                <button>Submit</button>
            </form>
        </div>)}
    </div>
  )
}

export default Staff