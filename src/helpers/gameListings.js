import axios from "axios";

export async function findAllGameListings(servers, setGameList) {
    // iterate through all servers to find all games available
    let GAMES = []
    for (const key in servers) {
        await axios.get(servers[key] + "/getGames", {
            params: {

            }
        }).then((res)=> {
            if (res.data) {
                for (var game of res.data) {
                    game.BASE = key;
                    game.ADDR = servers[key];
                    GAMES.push(game)
                }
            } else {
                console.log("no games found for " + key)
            }
        }).catch((err)=>{
            console.log("error calling get games from " + key + ", server is likely down")
        })
    }
    setGameList(GAMES)
}