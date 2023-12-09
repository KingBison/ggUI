import React, { useEffect, useState } from "react";
import setServerUrl from "../helpers/setServerUrl";
import { activateServerManager } from "../helpers/serverUtil";
import "../styles/buffaloAdmin.css"
import LoadingBanner from "./loadingBanner";
import ErrorBanner from "./errorBanner";
import { getCardGraphic } from "../helpers/getCardGraphic";

var controller;

const BuffaloAdmin = (props) => {
    var NAME = props.name

    const [gameData, setGameData] = useState("starting up");
    const [server, setServer] = useState("");

    useEffect(()=>{
        setServerUrl('buffalo', setServer);
            
    },[])

    useEffect(()=>{
        if (server !== "") {
            controller = activateServerManager(server, setGameData);
        }
    },[server, NAME])

    const presentData = () => {
        return(<>
            {gameData.players.map((player) => {
                return(
                    <div className="buffalo-admin-player-profile">
                        <h1 className={"buffalo-admin-ready-"+String(player.ready)}>{player.name}</h1>
                        <div className="buffalo-admin-cards">
                            {player.hand.map((card)=>{
                                return(<img src={getCardGraphic(card.suit.name, card.number.name, true)}/>)
                            })}
                        </div>
                    </div>
                )
            })}
        
        </>)
    }

    if (!gameData || !gameData.players) {
        return(<div className="buffalo-admin">
            <ErrorBanner/>
        </div>)
    }
    if (gameData === "starting up") {
        return(<div className="buffalo-admin">
            <LoadingBanner/>
        </div>)
    } else {
        return(<div className="buffalo-admin">
            {presentData()}
        </div>)
    }
}

export default BuffaloAdmin;