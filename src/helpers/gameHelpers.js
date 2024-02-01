import axios from "axios"

export function gameDataHandler(server, gameId, name, setGameData) {
    return(
        setInterval(()=>{
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
        }, 1000)
    )
}