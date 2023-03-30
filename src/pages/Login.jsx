import Header from "../components/Header"
import metaMaskIcon from "../assets/Metamask.svg"
import { useState } from "react"
// import { ethers } from 'ethers'

const Login = () => {
  const [admin, setAdmin] = useState(false);
  const [employee, setEmployee] = useState(false);
  const [vendor, setVendor] = useState(false);
  // const [accountAddress, setAccountAddress] = useState('')

  // const provider = new ethers.providers.Web3Provider(window.ethereum)

    // const { ethereum } = window

    // const handleWalletConnect = () => {
    //     if(ethereum) {
    //         provider.send("eth_requestAccounts", [])
    //         .then(async () => {
    //             await handleAccountChange(provider.getSigner());
    //         })
    //     } else {
    //         alert("You do not have a Metamask wallet. Install one to proceed")
    //     }

    //     const handleAccountChange = async(newAccount) => {
    //         const address = await newAccount.getAddress()
    //         setAccountAddress(address)
    //     }
    // }

  function handleAdminClick() {
    setAdmin(true)
    setEmployee(false)
    setVendor(false)  
    console.log('ok')
  }

  function handleEmployeeClick() {
    setAdmin(false)
    setEmployee(true)
    setVendor(false)  
  }

  function handleVendorClick() {
    setAdmin(false)
    setEmployee(false)
    setVendor(true)  
  }

    return (
      <div className="login-page">
        <Header />
        <div className="users">
          <button onClick={handleAdminClick}>Admin</button>
          <button onClick={handleEmployeeClick}>Employee</button>
          <button onClick={handleVendorClick}>Vendor</button>
        </div>
        <div className="formOptions">
        {admin && (<div className="login-card">
          <img src={metaMaskIcon} alt="" />
          <button>Connect Wallet</button>
        </div>)}
        {employee && (<div className="login-card">
          <p>Welcome  back</p>
          <input type="text" placeholder="Paste in your Hash"/>
          <button>Submit</button>
        </div>)}
        {vendor && (<div className="login-card"> 
          <p>Welcome!</p>
          <input type="text" placeholder="Paste in your Hash"/>
          <button>Submit</button>
        </div>)}
        </div>
      </div>
    )
  }
  
  export default Login