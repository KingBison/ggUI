import React, { useEffect, useState } from "react";
import "../styles/home.css"
import { findAllGameListings } from "../helpers/gameListings";

//import forestAudio from "../assets/audio/forest.wav"
import ErrorBanner from "./misc/errorBanner";

const Home = (props) => {

    const [errMsg, setErrMsg] = useState(false)
    const [gameList, setGameList] = useState([])
    
    useEffect(()=>{
        //new Audio(forestAudio).play()
        findAllGameListings(props.servers, setGameList)
    },[props.servers])

    return(<div className="home" onClick={()=>{console.log(gameList)}}>
        {(()=>{if(errMsg){return(<ErrorBanner errMsg={errMsg} setErrMsg={setErrMsg}/>)}})()}
        <div className="server-list">
            {gameList.map((game, i)=>{
                return(<div key={i} className="game">
                    
                </div>)
            })}
            <div className="create-new-game"></div>
        </div>
    </div>)
}

export default Home;