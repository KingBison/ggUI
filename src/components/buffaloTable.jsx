import React from "react";
import "../styles/buffalo.css"

const BuffaloTable = (props) => {
    const gameData = props.gameData



    return(<div className="buffalo-table">
        <div className="buffalo-table-inner">
            <img className="drawn-card" alt="card"/>
            <img className="top-of-discard" alt="card"/>
        </div>
    </div>)
}

export default BuffaloTable;