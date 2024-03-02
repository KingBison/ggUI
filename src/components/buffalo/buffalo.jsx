import React, { useEffect, useState } from "react";
import { gameDataHandler, handleRequest } from "../../helpers/gameHelpers";
import "../../styles/buffalo/buffalo.css"
import trophyIcon from "../../assets/icons/trophy-icon.png"
import { getCardGraphic } from "../../helpers/getCardGraphic";

const Buffalo = (props) => {
    const server = props.server;
    const gameId = props.gameId;
    const name = props.name;
    const color = props.color;

    const [gameData, setGameData] = useState(null)
    const [clearer, setClearer] = useState(null)

    useEffect(()=>{
        setClearer(gameDataHandler(server, gameId, name, setGameData));
    },[gameId, name, server])

    if (!gameData) {
        return(<div className="buffalo"/>)
    }

    return(<div className="buffalo">
        <div className={"my-tableau" + (gameData.you.turnIndicator ? " my-tableau-TURNIND" : "")} >
            <div className="my-cards">
                {gameData.you.hand.map((card, i) => {
                    return(<div className={"my-card" + ((card.peekAni || card.unPeekAni)?" my-card-peeked":"")}>
                        <img className="my-card-img" src={
                            (card.peekAni || card.unPeekAni) ? (
                                (card.unPeekAni ? getCardGraphic({visible:false}) : getCardGraphic(card))
                            ) : getCardGraphic(card)
                        } alt="card" style={{borderColor: card.queenSelected ? "purple" : "black"}}/>
                        <img className="my-card-img-flipper" src={(()=>{
                            card.visible = true;
                            return (card.peekAni || card.unPeekAni) ? (
                                (card.unPeekAni ? getCardGraphic(card) : getCardGraphic({visible:false}))
                            ) : getCardGraphic({visible:false})
                        })() 
                        } alt="card" style={{
                            display: (card.peekAni || card.unPeekAni) ? "" : "none",
                            borderColor: card.queenSelected ? "purple" : "black"
                        }}></img>
                        <div className="slam-card" style={{display: card.slammable ? "" : "none"}} onClick={()=>{
                            handleRequest(server, gameId, name, setGameData, {
                                action: "SLAM",
                                cardI: i
                            })
                        }}>SLAM</div>
                        <div className="peek-card" style={{display: card.peekable ? "" : "none"}} onClick={()=>{
                            handleRequest(server, gameId, name, setGameData, {
                                action: "pre-game-peek",
                                cardI: i
                            })
                        }}>Peek</div>
                        <div className="peek-card" style={{display: card.swappable ? "" : "none"}} onClick={()=>{
                            handleRequest(server, gameId, name, setGameData, {
                                action: "swap",
                                cardI: i
                            })
                        }}>Swap</div>
                        <div className="king-peek-card" style={{display: card.kingPeekable ? "" : "none"}} onClick={()=>{
                            handleRequest(server, gameId, name, setGameData, {
                                action: "king-peek",
                                cardI: i
                            })
                        }}>Peek</div>
                        <div className="queen-select-card" style={{display: card.queenSelectable ? "" : "none"}} onClick={()=>{
                            handleRequest(server, gameId, name, setGameData, {
                                action: "queen-toggle-select",
                                OPname: name,
                                cardI: i
                            })
                        }}>Select</div>
                        <div className="queen-un-select-card" style={{display: card.queenUnSelectable ? "" : "none"}} onClick={()=>{
                            handleRequest(server, gameId, name, setGameData, {
                                action: "queen-toggle-select",
                                OPname: name,
                                cardI: i
                            })
                        }}>UnSelect</div>
                    </div>)
                })}
            </div>
            <div className="my-banner-main">
                <div className="my-banner-advance">
                    <div className={gameData.you.ready ? "un-ready-up" : "ready-up"} style={{display: gameData.otherData.canReadyUp ? "block" : "none"}} onClick={()=>{
                        handleRequest(server, gameId, name, setGameData, {
                            action: "toggle-ready"
                        })
                    }}>{gameData.you.ready ? "I'm NOT ready" : "I'm Ready!"}</div>
                    <div className="queen-swap" style={{display: gameData.otherData.canQueenSwap ? "block" : "none"}}onClick={()=>{
                        handleRequest(server, gameId, name, setGameData, {
                            action: "queen-submit"
                        })
                    }}>Swap!</div>
                </div>
                <div className={"my-banner" + (gameData.you.ready ? " my-banner-ready":"")}>
                    <div className="my-name" style={{color: color}}>{name}</div>
                    <div className="my-wins">
                        <img className="my-trophy" src={trophyIcon} alt="trophy"/>
                        <div className="my-win-count">{gameData.you.wins}</div>
                    </div>
                </div>
                <div className="my-banner-buffalo-actions">
                    <div className="call-buffalo" style={{display: gameData.otherData.buffaloCallable ? "block" : "none"}}onClick={()=>{
                        handleRequest(server, gameId, name, setGameData, {
                            action: "call-buffalo"
                        })
                    }}>Call Buffalo</div>
                    <div className="buffalo-called-message" style={{display: gameData.otherData.buffaloCalled ? "block" : "none"}}>Buffalo has been<br/> called: {(!(gameData.otherData.turnsLeft === 1)) ?
                        <>there are <br/>{gameData.otherData.turnsLeft} turns left!</> : 
                        <>THIS IS <br/> THE LAST TURN!!</>}
                    </div>
                </div>
            </div>
        </div>
        <div className="other-players-tableaus">
            {(()=>{
                let angleMultiplier = ((2*Math.PI)/(gameData.otherPlayers.length+1))
                let xOffset = window.innerWidth/2
                let yOffset = window.innerHeight/2
                let xRad = xOffset * .6;
                let yRad = yOffset * .6;
                return(gameData.otherPlayers.map((player, i)=>{
                    let x = xRad * Math.cos(i*angleMultiplier + angleMultiplier + Math.PI/2) + xOffset
                    let y = yRad * Math.sin(i*angleMultiplier + angleMultiplier + Math.PI/2) + yOffset
                    return(<div className="op-tableau" style={{
                            top:`${y}px`,left:`${x}px`, 
                            border: player.turnIndicator ? "5px solid goldenrod" : "",
                            borderRadius: player.turnIndicator ? "10px" : "",
                            backgroundColor:  player.turnIndicator ? "lightyellow" : "",
                        }}>
                        <div className="op-cards">
                        {player.hand.map((card, i) => {
                            return(<div className="op-card">
                                <img className="op-card-img" src={getCardGraphic(card)} alt="card-img" style={{
                                    borderColor: 
                                    card.peeked||card.kingPeeked ? "goldenrod": (card.queenSelected ? "purple" : "black")
                                }}></img>
                                <div className="queen-select-card" style={{display: card.queenSelectable ? "" : "none"}} onClick={()=>{
                                    handleRequest(server, gameId, name, setGameData, {
                                        action: "queen-toggle-select",
                                        OPname: player.name,
                                        cardI: i
                                    })
                                }}>Select</div>
                                <div className="queen-un-select-card" style={{display: card.queenUnSelectable ? "" : "none"}} onClick={()=>{
                                    handleRequest(server, gameId, name, setGameData, {
                                        action: "queen-toggle-select",
                                        OPname: player.name,
                                        cardI: i
                                    })
                                }}>UnSelect</div>
                            </div>)
                        })}
                        </div>
                        <div style={{borderColor: player.ready ? "green" : "black"}} className="op-banner">
                            <div className="op-name" style={{color: player.color}}>{player.name}</div>
                            <div className="op-wins">
                                <img className="op-trophy" src={trophyIcon} alt="trophy"/>
                                <div className="op-win-count">{player.wins}</div>
                            </div>
                        </div>
                    </div>)
                }))
            })()}
        </div>
        <div className="table">
            <div className="deck">
                <img className="deck-img" src={getCardGraphic(gameData.table.topOfDeck)} alt="card"/>
                <div className="draw-card" style={{display: gameData.table.topOfDeck.drawable ? "":"none"}} onClick={()=>{
                    handleRequest(server, gameId, name, setGameData, {
                        action: "draw"
                    })
                }}>Draw</div>
            </div>
            <div className="discard">
                <img className="discard-img" src={getCardGraphic(gameData.table.topOfDiscard)} alt="card"/>
                <div className="discard-card" style={{display: gameData.table.topOfDiscard.discardable ? "":"none"}} onClick={()=>{
                    handleRequest(server, gameId, name, setGameData, {
                        action: "discard"
                    })
                }}>Discard</div>
            </div>
        </div>
    </div>)
}


export default Buffalo;