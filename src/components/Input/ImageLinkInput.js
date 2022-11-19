import React from "react";
import './imagelink.css';



const Imagelinkinput =({onInputChange , onsubmit}) =>{
  
     return (
        <div >
            <p className="f3">
                {'This Magic Brain will detect faces in your pictures. Give it a try !'}
            </p>
            <div>
                <div className=" form pa4 br3 shadow-5">
                    <input onChange={onInputChange}  id="inputID" className="f4 pa2 w-70 center" type="text" />
                    <button onClick={onsubmit}  className="w-30 grow f4 link ph3 pv2 dib black b bg-ligh-purple ">Detect</button>
                </div>
            </div>
        </div>

     );

}


export { Imagelinkinput};

