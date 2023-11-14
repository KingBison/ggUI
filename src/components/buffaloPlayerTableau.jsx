import React from "react";
import getMyData from "../helpers/getMyData";
import { getCardGraphic } from "../helpers/getCardGraphic";
import axios from "axios";
import { setGameDataService } from "../helpers/serverUtil";

const BuffaloPlayerTableau = (props) => {
    var ME = getMyData(props.name, props.gameData)

    if (!ME || !ME.hand) {
        return (
            <div className="buffalo-my-tableau">
                Error Retrieving Component
            </div>
        )
    }

    const toggleReady = () => {
        axios.get(props.server + "/handlePlayerRequest", {params:{
            name: ME.name,
            action: "toggle-ready"
        }}).then(()=>{
            setGameDataService(props.server,props.setGameData)
        }).catch((err)=>{
            alert(err)
        })
    }

    const getReadyButton = () => {
        if (!ME.ready) {
            return(<div 
                className="buffalo-my-ready-button-ready"
                onClick={toggleReady}
            >I'm Ready</div>)
        } else {
            return(<div 
                onClick={toggleReady}
                className="buffalo-my-ready-button-not-ready"
            >I'm NOT Ready</div>)
        }
    }

    return(
        <div className="buffalo-my-tableau">
            <div className="buffalo-my-cards">
                {ME.hand.map((card, i)=>{
                    return (<img src={getCardGraphic(card.suit.name, card.number.name, card.visible)} alt={"card"}/>)
                })}
            </div>
            <div className="buffalo-my-banner">
                <div className="buffalo-my-name">{ME.name}</div>
                <div className="buffalo-my-wins">Wins: {ME.wins}</div>
                <div className="buffalo-my-ready-button">{getReadyButton()}</div>
            </div>
        </div>
    )
}

export default BuffaloPlayerTableau;