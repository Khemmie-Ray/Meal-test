// import React, {useEffect, useState, createContext} from "react"
// const Context = createContext("")

// const ContextProvider = (props) => {
//     const [staffData, setStaffData] = useState([])
//     const [openModal, setOpenModal] = useState(false)
//     const [text, setText] = useState({firstname: '', lastname: '', role: '', wallet_address: ''})

//     useEffect(() => {
//         fetch('https://plate-tracker.herokuapp.com/fetch/staff/all')
//         .then(response => response.json())
//         .then(data => setStaffData(data.results))
//     }, [])

//     const handleModal = () => {
//         setOpenModal(!openModal)
//     }

    
//     function handleChange(e) {
//         const {id, value} = e.target;
//         setText(prev => ({
//             ...prev,
//             [id]: value,
//         }))
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         const {firstname, lastname, role, wallet_address} = text
//         const data = {
//             firstName: firstname,
//             lastName: lastname,
//             employeeId: wallet_address,
//             role: role
//         }
//         fetch('https://plate-tracker.herokuapp.com/staff/register/', {
//             method: 'POST',
//             body: JSON.stringify(data),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => response.json())
//         .then(data => { console.log(data)
//             setStaffData([...staffData, text])
//             setOpenModal(false)
//         })
//     }
    
//     return (
//         <Context.Provider value={{staffData, handleSubmit, openModal, handleModal, text, handleChange}}>
//             {props.children}
//         </Context.Provider>
//     )
// } 

// export {ContextProvider, Context}