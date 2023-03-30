import { useEffect, useState } from "react"

const Staff = () => {
    const [staffData, setStaffData] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [text, setText] = useState({firstname: '', lastname: '', role: '', wallet_address: ''})

    useEffect(() => {
        fetch('https://plate-tracker.herokuapp.com/fetch/staff/all')
        .then(response => response.json())
        .then(data => setStaffData(data.results))
    }, [])
    console.log(staffData)
    
    const staffInfo = staffData.map(info => (
            <tr key={info.id}>
            <td>{info.firstname} {info.lastname}</td>
            <td>{info.role}</td>
            <td>{info.wallet_address}</td>
            <td>Action</td>
            </tr>
    ))

    const handleModal = () => {
        setOpenModal(!openModal)
    }

    // console.log(staffData)

    function handleChange(e) {
        const {id, value} = e.target;
        setText(prev => ({
            ...prev,
            [id]: value,
        }))
    }

    console.log(text)

    const handleSubmit = (event) => {
        event.preventDefault()
        const {firstname, lastname, role, wallet_address} = text
        const data = {
            firstName: firstname,
            lastName: lastname,
            employeeId: wallet_address,
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
            // setModalOpen(false)
        })
    }

 
  return (
    <div className="dashBoard">
        <div>
        <button onClick={handleModal}>Add New</button>
        <input type="text" placeholder="Search"/>
        </div>
        <table>
            <thead className="bg-grey-500">
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
       {openModal && (<div>
            <form action="" className="bg-grey-200" onSubmit={handleSubmit}>
                <input type="text" id="firstname" placeholder="First Name" onChange={handleChange} value={text.firstname}/>
                <input type="text" id="lastname" placeholder="Last Name" className="block mb-2" value={text.lastname} onChange={handleChange}/>
                <input type="text" id="role" placeholder="Role"  value={text.role} onChange={handleChange}/>
                <input type="text" id="wallet_address" placeholder="Wallet Address"  value={text.wallet_address} onChange={handleChange}/>
                <button >Submit</button>
            </form>
        </div>)}
    </div>
  )
}

export default Staff