import React from "react";
// import face from "./image.jpg";
import './FaceRecognition.css'



const FaceRecognition = ( {url , box}) => {
    return(
        <div className="container">
        <div className=" clarifai absolute mt2">
            <img  id="face" src={url} alt="" />
            <div className="bounding_box" style={{top: box.toprow, left : box.leftcol, bottom : box.bottomrow, right : box.rightcol }}></div>
        </div>
        </div>
    );
}

export default FaceRecognition;