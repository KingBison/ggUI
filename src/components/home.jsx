import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/home.css"
import { findAllGameListings } from "../helpers/gameListings";
import lockIcon from "../assets/icons/lock-icon.png"
import playerIcon from "../assets/icons/player-icon.png"
import refreshIcon from "../assets/icons/refresh-icon.png"

import buffaloIcon from "../assets/icons/buffalo-icon.png"

//import forestAudio from "../assets/audio/forest.wav"
import ErrorBanner from "./misc/errorBanner";
import GamePicker from "./misc/gamePicker";

const Home = (props) => {

    const [errMsg, setErrMsg] = useState(false)
    const [gameList, setGameList] = useState([])

    // create game variables
    const [newGameType, setNewGameType] = useState("buffalo")
    const [newGamePassword, setNewGamePassword] = useState("")
    
    useEffect(()=>{
        //new Audio(forestAudio).play()
        findAllGameListings(props.servers, setGameList)
    },[props.servers])

    return(<div className="home">
        {(()=>{if(errMsg){return(<ErrorBanner errMsg={errMsg} setErrMsg={setErrMsg}/>)}})()}
        <div className="server-list">
            <div className="server-list-head">
                <div className="welcome-message" style={{color: props.color}}>Welcome: {props.name}</div>
                <img className="refresh" src={refreshIcon} alt="refresh" onClick={()=>{
                    findAllGameListings(props.servers, setGameList)
                }}/>
            </div>
            {gameList.map((game, i)=>{
                return(<Game game={game} i={i} name={props.name} color={props.color} setGameSelected={props.setGameSelected} setGameId={props.setGameId} setGameAddress={props.setGameAddress}/>)
            })}
            <div className="create-new-game">
                <GamePicker newGameType={newGameType} setNewGameType={setNewGameType}/>
                <div className="game-password-section">
                    <img className="lock-icon" src={lockIcon} alt="lock-icon"/>
                    <input className="pick-password" type="text" placeholder="leave blank for open game"
                        value={newGamePassword}
                        onChange={(e)=>{setNewGamePassword(e.target.value)}}
                    />
                </div>
                <div className="create-game-button" onClick={()=>{
                    axios.post(props.servers[newGameType] + "/createGame",null,{params:{
                        creator: props.name,
                        creatorColor: props.color,
                        restricted: (newGamePassword ? true : false),
                        password: (newGamePassword ? newGamePassword : "")
                    }}).then((res)=>{
                        console.log(res)
                        if (res.data) {
                            props.setGameId(res.data)
                            props.setGameAddress(props.servers[newGameType])
                            props.setGameSelected(newGameType)
                        } else {
                            console.log(res)
                            alert("FAILED TO RETRIEVE GAME ID: refresh and try to join you game")
                        }
                    }).catch((err)=>{
                        console.log(err)
                        alert("SERVER ERROR, GAME NOT CREATED")
                    })
                }}>Create</div>
            </div>
        </div>
    </div>)
}

const Game = (props) => {
    var game = props.game
    var i = props.i
    const [pword, setPword] = useState("")
    return(<div key={i} className="game">
                <img className="game-icon" alt="game-icon" src={(()=>{
                    if (game.BASE === "buffalo") {return(buffaloIcon)}
                })()}/>
                <div className="game-full-section">
                    <div className="game-section-upper">
                        <div className="creator-name">{game.creator + "'s game"}</div>
                        <div className="player-count-section">
                            <img className="player-icon" src={playerIcon} alt="player-icon"/>
                            <div className="player-count">{game.numberOfPlayers}</div>
                        </div>
                    </div>
                    <div className="game-section-lower">
                        {(()=>{
                            if (game.restricted) {
                                return(<div className="game-password-section">
                                    <img className="lock-icon" src={lockIcon} alt="lock-icon"/>
                                    <input className="game-password" type="text" value={pword} onChange={(e)=>setPword(e.target.value)}/>
                                </div>)
                            } else {return(<div></div>)}
                        })()}
                        <div className="join-button" onClick={()=>{
                            axios.get(game.ADDR + "/handlePlayerEntry", {
                                params: {
                                    gameId: game.gameId,
                                    name: props.name,
                                    color: props.color,
                                    password: pword
                                }
                            }).then(()=>{
                                props.setGameId(game.gameId)
                                props.setGameAddress(game.ADDR)
                                props.setGameSelected(game.BASE)
                            }).catch((err) => {
                                console.log(err)
                                if (err.response.status == 404) {
                                    alert("PASSWORD IS INCORRECT")
                                } else {
                                    alert("Failed to join game")
                                }
                            })
                        }}>Join</div>
                    </div>
                </div>
            </div>)
}

export default Home;