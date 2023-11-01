import React, { useEffect, useState } from "react";
import setServerUrl from "../helpers/setServerUrl";
import { activateServerManager } from "../helpers/serverUtil";
import "../styles/buffalo.css"
import BuffaloTable from "./buffaloTable";
import LeaveButton from "./leaveButton";

var controller;

const Buffalo = (props) => {


    const [gameData, setGameData] = useState(null);
    const [server, setServer] = useState("");

    useEffect(()=>{
        setServerUrl('buffalo', setServer);
            
    },[])

    useEffect(()=>{
        controller = activateServerManager(server, setGameData);
    },[server])



    return(<div className="buffalo">
        <LeaveButton setSelectedGame={props.setSelectedGame} controller={controller}/>
        <BuffaloTable/>
    </div>)
}

export default Buffalo;