import React from "react";


const Status = ({mainSpace, discription, color}) => {
    return (
        <div className="statusBox" style={{borderLeftColor:color}}>
            <h2 className="mainSpace">{mainSpace}</h2>
            <p>{discription}</p>
        </div>
    )
}

export default Status;