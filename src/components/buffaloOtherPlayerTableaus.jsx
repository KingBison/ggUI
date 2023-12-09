import React from "react";
import { getCardGraphic } from "../helpers/getCardGraphic";

const BuffaloOtherPlayerTableaus = (props) => {
    var players = props.gameData.players
    var gameData = props.gameData

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
            const xradius = window.innerWidth * 0.45 * .7
            const yradius = window.innerHeight * 0.45; 

            const x = xradius * Math.cos((angle * Math.PI) / 180) + window.innerWidth*.7/2
            const y = yradius * Math.sin((angle * Math.PI) / 180) + window.innerHeight/2;

            var readyColor = "lightgreen"
            if (!player.ready) {
                readyColor = "lightcoral" 
            }

            var shadow = ""
            var bgColor = ""
            if (player.name == gameData.turnPointer) {
                shadow = "0 0 10px 10px #C8C7FD"
                bgColor = "#C8C7FD"
            }

            return(<div 
                className="buffalo-others-tableau"
                id={"buffalo-others-tableau-" + index}
                style={{
                    top: y,
                    left: x,
                    transform: "translate(-50%, -60%)",
                    boxShadow: shadow,
                    backgroundColor: bgColor
                }}
            >
                <div className="buffalo-others-cards">
                    {player.hand.map((card, i)=>{
                        var visiblity = false
                        if (!gameData.flags.preGame || gameData.flags.resolution) {
                            visiblity = card.Visible
                            if (gameData.flags.resolution) {
                                visiblity = true
                            }
                        }
                        return (<img src={getCardGraphic(card.suit.name, card.number.name, visiblity)} alt={"card"}/>)
                    })}
                </div>
                <div className="buffalo-others-banner">
                    <div className="buffalo-others-name">{player.name}</div>
                    <div className="buffalo-others-wins">Wins: {player.wins}</div>
                    <div className="buffalo-others-ready-status-box" style={{backgroundColor:readyColor}}></div>
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