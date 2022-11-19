import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';


const Logo = () => {
    return (
        <div className="ma4 shadow-2 br2 tilt-container">   
        <Tilt tiltReverse tiltMaxAngleX="30" tiltMaxAngleY="30"  className=" br2 tilt-component">
            <img id="brain" src={brain} alt="brain" />
        </Tilt>
        </div>
    );

}

export default Logo;