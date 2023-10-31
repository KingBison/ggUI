import React, { useEffect, useState } from "react";
import getServerUrl from "../helpers/getServerUrl";

const Buffalo = (props) => {


    const [gameData, setGameData] = useState(null)
    const [server, setServer] = useState("")

    useEffect(()=>{
        getServerUrl('buffalo', setServer)
    },[])



    return(<div className="buffalo">

    </div>)
}

export default Buffalo;