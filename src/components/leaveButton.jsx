import React from "react";
import "../styles/misc.css"

const LeaveButton = (props) => {
    return(<button 
        className="leave-button"
        onClick={()=>{
            props.setSelectedGame("")
            clearInterval(props.controller)
        }}
    >Back to Main Menu</button>)
}

export default LeaveButton;