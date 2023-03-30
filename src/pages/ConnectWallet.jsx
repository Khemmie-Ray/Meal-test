import { useState } from "react"



const ConnectWallet = () => {
    

    return (
        <div className="container">
            <button 
                className="btn"
                onClick={handleWalletConnect}>{accountAddress ? "Connected!!!" : "Connect Wallet"}</button>
            <h3 className="account-text">Address: {accountAddress}</h3>
            <h3>User balance: {userBalance}</h3>
        </div>
        
    )
}

