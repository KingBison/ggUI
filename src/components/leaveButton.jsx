import React from "react";
import "../styles/leaveButton.css"

const LeaveButton = (props) => {
    return(<button 
        className="leave-button"
        onClick={()=>{
            props.setSelectedGame("")
            clearInterval(props.controller)
        }}
    >Leave</button>)
}

export default LeaveButton;