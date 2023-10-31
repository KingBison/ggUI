import React from "react";  
import "../styles/gameSelector.css"

import buffaloGraphic from "../assets/buffalo image.png"
import tripoleyGraphic from "../assets/tripoley graphic.png"
import mexicanGraphic from "../assets/mexican image.png"

const GameSelector = (props) => {
    return(
        <div className="game-selector">
            <div className="game-selector-bar">
                <div></div>
                <h1>Welcome, {props.name}</h1>
                <div className="game-selector-button-box">
                    <button
                        onClick={()=>{
                            props.setLoggedIn(false)
                            props.setName("")
                            sessionStorage.removeItem('name')
                        }}
                    >Log Out</button>
                </div>
            </div>
            <div className="game-selector-main">
                <div className="buffalo-card" onClick={()=>{props.setSelectedGame("buffalo")}}>
                    <h1>Buffalo</h1>
                    <div>
                        <img src={buffaloGraphic} alt="buffalo"/>
                    </div>
                </div>
                <div className="tripoley-card">
                    <h1>Tripoley</h1>
                    <div>
                        <img src={tripoleyGraphic} alt="tripoley"/>
                    </div>
                </div>
                <div className="mexican-train-card">
                    <h1>Mexican Train</h1>
                    <div>
                        <img src={mexicanGraphic} alt="mexican-train"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameSelector;