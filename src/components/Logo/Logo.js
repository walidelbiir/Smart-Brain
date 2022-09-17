import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';


const Logo = () => {
    return (
        <div className="ma4 shadow-2 br2 tilt-container">   
        <Tilt tiltReverse  className=" br2 tilt-component">
            <h1>React Parallax Tilt 👀</h1>
        </Tilt>
        </div>
    );

}

export default Logo;