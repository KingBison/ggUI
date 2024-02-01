import React, { useEffect, useState } from "react";
import { gameDataHandler } from "../../helpers/gameHelpers";
import "../../styles/buffalo/buffalo.css"
import trophyIcon from "../../assets/icons/trophy-icon.png"

const Buffalo = (props) => {
    const server = props.server;
    const gameId = props.gameId;
    const name = props.name;
    const color = props.color;

    const [gameData, setGameData] = useState(null)
    const [clearer, setClearer] = useState(null)

    useEffect(()=>{
        setClearer(gameDataHandler(server, gameId, name, setGameData));
    },[])

    if (!gameData) {
        return(<div className="buffalo"/>)
    }

    return(<div className="buffalo">
        <div className="my-tableau">
            <div className="my-cards">

            </div>
            <div className="my-banner">
                <div className="my-name" style={{color: color}}>{name}</div>
                <div className="my-wins">
                    <img className="my-trophy" src={trophyIcon}/>
                    <div className="my-win-count">{gameData.you.wins}</div>
                </div>
            </div>
        </div>
        <div className="other-players-tableaus">
            {()=>{
                gameData.otherPlayers.map((player, i)=>{
                    
                    return(<div className="other-player-tableau">
                        <div className="op-cards">

                        </div>
                        <div className="op-banner">
                            <div className="op-name" style={{color: color}}>{name}</div>
                            <div className="op-wins">
                                <img className="op-trophy" src={trophyIcon}/>
                                <div className="op-win-count">{gameData.you.wins}</div>
                            </div>
                        </div>
                    </div>)
                })
            }}
        </div>
    </div>)
}

export default Buffalo;