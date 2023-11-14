import React from "react";
import { getCardGraphic } from "../helpers/getCardGraphic";

const BuffaloOtherPlayerTableaus = (props) => {
    var players = props.gameData.players

    const getData = () => {
        if (!players) {
            return(<></>)
        }
        players = reorderPlayers(players, props.name)
        return(players.map((player, index) => {
            if (index === 0) {
                return(<div></div>)
            }
            const angle = (360 / players.length) * index + 90;
            const xradius = window.innerWidth * 0.4 * .7
            const yradius = window.innerHeight * 0.4; 

            const x = xradius * Math.cos((angle * Math.PI) / 180) + window.innerWidth*.7/2
            const y = yradius * Math.sin((angle * Math.PI) / 180) + window.innerHeight/2;

            return(<div 
                className="buffalo-others-tableau"
                id={"buffalo-others-tableau-" + index}
                style={{
                    top: y,
                    left: x,
                    transform: "translate(-50%, -50%)"
                }}
            >
                <div className="buffalo-others-cards">
                    {player.hand.map((card, i)=>{
                        return (<img src={getCardGraphic(card.suit.name, card.number.name, card.visible)} alt={"card"}/>)
                    })}
                </div>
                <div className="buffalo-others-banner">
                    <div className="buffalo-others-name">{player.name}</div>
                    <div className="buffalo-others-wins">Wins: {player.wins}</div>
                </div>
            </div>)
        }))
    }


    return(
        <div className="buffalo-others">
            {getData()}
        </div>
    )
}

const reorderPlayers = (players, name) => {
    const index = players.findIndex(player => player.name === name);
    console.log(index)

    if (index === -1) {
        return players;
    }
    const beforePlayer = players.slice(0, index);
    const afterPlayer = players.slice(index + 1);

    const reorderedPlayers = [players[index], ...afterPlayer, ...beforePlayer];

    return reorderedPlayers;
}

export default BuffaloOtherPlayerTableaus