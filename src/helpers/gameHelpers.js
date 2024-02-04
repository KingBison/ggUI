import axios from "axios"

export function gameDataHandler(server, gameId, name, setGameData) {
    getGameData(server, gameId, name,setGameData)
    return(
        setInterval(()=>{
            getGameData (server, gameId, name, setGameData)
        }, 1000)
    )
}

export function getGameData (server, gameId, name, setGameData) {
    axios.get(server+"/getMyGameData", {params:{
        name: name,
        gameId: gameId
    }}).then((res)=>{
        console.log(res.data)
        setGameData(res.data)
    }).catch((err)=>{
        console.log(err)
        setGameData(null)
    })
}

export function handleRequest (server, gameId, name, setGameData, params) {
    params.name = name;
    params.gameId = gameId;
    axios.get(server + "/handleRequest", {
        params:params
    }).then((res) => {
        console.log(params.action + " action completed")
        getGameData (server, gameId, name, setGameData)
    }).catch((err)=>{
        console.log(err)
        alert(err.data)
    })
}