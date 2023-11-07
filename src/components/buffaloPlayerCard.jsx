import React from "react";
import getMyData from "../helpers/getMyData";

const BuffaloPlayerCard = (props) => {
    var ME = getMyData(props.name, props.gameData)

    return(
        <div className="buffalo-my-card">
            <div className="buffalo-my-cards"></div>
            <div className="buffalo-my-banner">
                <div className="buffalo-my-name">{ME.name}</div>
                <div className="buffalo-my-wins">Wins: {ME.wins}</div>
            </div>
        </div>
    )
}

export default BuffaloPlayerCard;