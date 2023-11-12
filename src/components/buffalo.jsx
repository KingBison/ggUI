import React, { useEffect, useState } from "react";
import setServerUrl from "../helpers/setServerUrl";
import { activateServerManager } from "../helpers/serverUtil";
import "../styles/buffalo.css"
import BuffaloTable from "./buffaloTable";
import LeaveButton from "./leaveButton";
import LoadingBanner from "./loadingBanner";
import ErrorBanner from "./errorBanner";
import axios from "axios";
import ExitGame from "./exitGame";
import BuffaloPlayerTableau from "./buffaloPlayerTableau";
import BuffaloOtherPlayerTableaus from "./buffaloOtherPlayerTableaus";

var controller;

const Buffalo = (props) => {
    var NAME = props.name

    const [gameData, setGameData] = useState("starting up");
    const [server, setServer] = useState("");

    useEffect(()=>{
        setServerUrl('buffalo', setServer);
            
    },[])

    useEffect(()=>{
        if (server !== "") {
            controller = activateServerManager(server, setGameData);

            axios.get(server + "/handlePlayerEntry", {
                params: {
                    name: NAME
                }
            }).catch(()=>{alert("ERROR SIGNING IN TO BUFFALO")});
        }
    },[server, NAME])

    if (!gameData) {
        return(<div className="buffalo">
            <LeaveButton setSelectedGame={props.setSelectedGame} controller={controller}/>
            <ErrorBanner/>
        </div>)
    }
    if (gameData === "starting up") {
        return(<div className="buffalo">
            <LeaveButton setSelectedGame={props.setSelectedGame} controller={controller}/>
            <LoadingBanner/>
        </div>)
    } else {
        return(<div className="buffalo">
            <BuffaloOtherPlayerTableaus
                gameData={gameData}
                name={NAME}
            />
            <LeaveButton setSelectedGame={props.setSelectedGame} controller={controller}/>
            <ExitGame setSelectedGame={props.setSelectedGame} controller={controller} server={server} name={NAME}/>
            <BuffaloTable
                gameData = {gameData}
                name={NAME}
            />
            <BuffaloPlayerTableau 
                gameData={gameData} 
                name={NAME}
            />
            
        </div>)
    }
}

export default Buffalo;