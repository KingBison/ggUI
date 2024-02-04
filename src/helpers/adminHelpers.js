import axios from "axios"

export function AdminGameDataHandler(server, gameId, setGameData) {
    getAdminGameData(server, gameId, setGameData)
    return(
        setInterval(()=>{
            getAdminGameData(server, gameId, setGameData)
        }, 1000)
    )
}

export function getAdminGameData (server, gameId, setGameData) {
    axios.get(server+"/GETGAMES", null).then((res)=>{
        for (var game of res.data) {
            if (game.gameId === gameId) {   
                setGameData(game)
                return
            }
        }
    }).catch((err)=>{
        setGameData(null)
    })
}
