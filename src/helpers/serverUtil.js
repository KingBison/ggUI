import axios from "axios"


export const setGameDataService = (url, setGameData) => {
    if (!url){
        console.log("URL FAILURE: " + url)
        setGameData(false)
        return;
    }
    axios.get(url+"/getGameData")
        .then((res) => {
            if (res.data) {
            setGameData(res.data)
            } else {
            setGameData(false)
            console.log("SERVER DATA NOT RECOVERED")
            }
        }
        ).catch(()=>{
            setGameData(false);
            console.log("SERVER DATA Call Failed")
        })
}

export const activateServerManager = (url, setServerData) => {
    if (!url) {return};
    let intervalController = setInterval(function(){return setGameDataService(url,setServerData)}, 1000);
    return (intervalController);
}
