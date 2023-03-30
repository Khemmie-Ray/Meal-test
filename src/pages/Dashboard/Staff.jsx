import { useEffect, useState } from "react"

const Staff = () => {
    const [staffData, setStaffData] = useState([])
    const [openModal, setOpenModal] = useState(false)

    // useEffect(() => {
    //     fetch('https://plate-tracker.herokuapp.com/fetch/staff/all')
    //     .then(response => response.json())
    //     .then(data => setStaffData(data.results))
    // }, [])
    
    // const staffInfo = staffData.map(info => (
    //         <tr key={info.id}>
    //         <td>{info.firstname} {info.lastname}</td>
    //         <td>{info.role}</td>
    //         <td>{info.wallet_address}</td>
    //         <td>Action</td>
    //         </tr>
    // ))

    const handleModal = () => {
        setOpenModal(!openModal)
    }

    // console.log(staffData)

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = {
            firstname: formData.get('firstname'),
            lastname: formData.get('lastname'),
            role: formData.get('role'),
            wallet_address: formData.get('wallet_address'),
        }
        fetch('https://plate-tracker.herokuapp.com/staff/register/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            setStaffData([...staffData, data.result])
            setModalOpen(false)
        })
    }

  return (
    <div>
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
            <form action="" className="bg-grey-200">
                <input type="text" placeholder="First Name" className="block mb-2"/>
                <input type="text" placeholder="Last Name" className="block mb-2"/>
                <input type="text" placeholder="Role" className="block mb-2"/>
                <input type="text" placeholder="Wallet Address" className="block mb-2"/>
                <button>Submit</button>
            </form>
        </div>)}
    </div>
  )
}

export default Staff