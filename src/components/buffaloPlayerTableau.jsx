import React from "react";
import getMyData from "../helpers/getMyData";
import { getCardGraphic } from "../helpers/getCardGraphic";

const BuffaloPlayerTableau = (props) => {
    var ME = getMyData(props.name, props.gameData)

    if (!ME || !ME.hand) {
        return (
            <div className="buffalo-my-tableau">
                Error Retrieving Component
            </div>
        )
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
            </div>
        </div>
    )
}

export default BuffaloPlayerTableau;