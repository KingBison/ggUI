import React from "react";
import "../styles/buffalo.css"
import { getCardGraphic } from "../helpers/getCardGraphic";

const BuffaloTable = (props) => {
    const gameData = props.gameData

    if (!gameData) {
        return(
            <div className="buffalo-table">
                <div className="buffalo-table-inner">
                </div>
            </div>
        );
    }

    return(
        <div className="buffalo-table">
            <div className="buffalo-table-inner">
                <img className="drawn-card" alt="card" src={getCardGraphic("clubs", "two", false)}/>
                <img className="top-of-discard" alt="card" src={getCardGraphic("spades", "two", true)}/>
            </div>
        </div>
    );
}

export default BuffaloTable;