import React from "react";
import axios from "axios";

const ExitGame = (props) => {
    return(<button 
        className="exit-button"
        onClick={()=>{
            props.setSelectedGame("")
            clearInterval(props.controller)

            axios.get(props.server + "/handlePlayerExit",{params: {name:props.name}})
            .catch(()=>{alert("ERROR EXITING GAME")})
        }}
    >Exit Game</button>)
}

export default ExitGame