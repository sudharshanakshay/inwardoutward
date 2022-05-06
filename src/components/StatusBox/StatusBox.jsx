import React from "react";


const StatusBox = ({mainSpace, discription, color}) => {
    return (
        <div className="statusBox" style={{borderBottomColor:color}}>
            <h2 className="mainSpace">{mainSpace}</h2>
            <p>{discription}</p>
            <div className="desktop-view" style={{ width:"inherit", height:"10px",backgroundColor:color }}></div>
        </div>
    )
}

export default StatusBox;