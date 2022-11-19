import React  from "react";


const Rank =({rank}) =>{
    
    let username = sessionStorage.getItem('username')
    return (
        <div>
            <div className="white f1">
                {`${username}, your current rank is :`}
            </div>
            <div className="white f3">
                {`${rank}`}
            </div>
        </div>
    )
}

export {Rank}