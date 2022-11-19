import React from "react";
import './Navigation.css';



const Navigation = ({NavigateToSignin}) => {
    
        

    return (
        <nav className="navbar">
            
            <p onClick={NavigateToSignin}  className="f3 link dim black underline pa3 pointer">
                Sign Out
            </p>
            
        </nav>
    );
}

export default Navigation;