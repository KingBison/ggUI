import React, { useState, useEffect } from "react";
import "../../styles/buffalo/buffaloAdmin.css"
import { AdminGameDataHandler } from "../../helpers/adminHelpers";
import { getCardGraphic } from "../../helpers/getCardGraphic";

const BuffaloAdmin = (props) => {
    const server = props.server;
    const gameId = props.gameId;

    const [GAME, setGAME] = useState(null)
    const [clearer, setClearer] = useState(null)

    useEffect(()=>{
        setClearer(AdminGameDataHandler(server, gameId, setGAME));

        return ()=>{
            clearInterval(clearer)
        }
    },[gameId, server])

    if (!GAME) {return(<div className="buffalo-admin">
        <div className="buffalo-admin-error">Failed to get Game</div>
    </div>)}

    return(<div className="buffalo-admin">
        <div className="admin-header">
            <div className="admin-header-object">
                <label>Game ID: </label>
                <div>{GAME.gameId}</div>
            </div>
            <div className="admin-header-object">
                <label>Creator: </label>
                <div>{GAME.creator}</div>
            </div>
            <div className="admin-header-object">
                <label>Restricted: </label>
                <div>{String(GAME.restricted)}</div>
            </div>
            <div className="admin-header-object">
                <label>Password: </label>
                <div>{GAME.password}</div>
            </div>
        </div>
        <div className="admin-gamedata">
        <table border="1" className="flag-table">
            <tr>
                <th>Flags</th>
                <th>Value</th>
            </tr>
            <tr>
                <td>active</td>
                <td>{GAME.active ? "*" : ""}</td>
            </tr>
            <tr>
                <td>peeking</td>
                <td>{GAME.peeking ? "*" : ""}</td>
            </tr>
            <tr>
                <td>drawing</td>
                <td>{GAME.drawing ? "*" : ""}</td>
            </tr>
            <tr>
                <td>deciding</td>
                <td>{GAME.deciding ? "*" : ""}</td>
            </tr>
            <tr>
                <td>discarded</td>
                <td>{GAME.discarded ? "*" : ""}</td>
            </tr>
            <tr>
                <td>queenAction</td>
                <td>{GAME.queenAction ? "*" : ""}</td>
            </tr>
            <tr>
                <td>jackIndicator</td>
                <td>{GAME.jackIndicator ? "*" : ""}</td>
            </tr>
            <tr>
                <td>kingIndicator</td>
                <td>{GAME.kingIndicator ? "*" : ""}</td>
            </tr>
        </table>
        <div className="admin-players">
            {GAME.players.map((player) => {
                return(<div style={(()=>{
                    if (GAME.turnIndex >= 0) {
                        return {backgroundColor: (GAME.players[GAME.turnIndex].name === player.name) ? "lightyellow" : "white"}
                    } })()} className="admin-player">
                    <div className="admin-player-data">
                        <div style={{color:player.color}}>Name: {player.name}</div>
                        <div>Wins: {player.wins}</div>
                        <div style={{color: player.ready ? "green" : "red"}}>Ready: {String(player.ready)}</div>
                        <div>Points: {getPoints(player.hand)}</div>
                    </div>
                    <div className="admin-player-cards">
                        {player.hand.map((card)=>{
                            card.visible = true
                            return(<img style={{borderColor: card.slammed ? "blue" : "black"}} src={getCardGraphic(card)}/>)
                        })}
                    </div>

                </div>)
            })}
        </div>
        </div>
    </div>)
}

const getPoints = (hand) => {
    let total = 0;
    for (var card of hand) {
        total += card.number.value;
    }
    return total
}

export default BuffaloAdmin;