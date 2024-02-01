import React from "react";
import "../../styles/misc/gamePicker.css"
import rightArrow from "../../assets/icons/right-arrow-icon.png"
import leftArrow from "../../assets/icons/left-arrow-icon.png"
import buffaloIcon from "../../assets/icons/buffalo-icon.png"

const GamePicker = (props) => {

    const games = [
        {
            name: "buffalo",
            icon: buffaloIcon
        }
    ]

    return(<div className="game-picker">
        <img className="left-arrow" src={leftArrow}/>
        <img className="game-icon" src={games.map((game)=>{if (game.name === props.newGameType) {return(game.icon)}})}></img>
        <img className="right-arrow" src={rightArrow}/>
    </div>)
}

export default GamePicker;