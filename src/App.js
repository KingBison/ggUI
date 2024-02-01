import React, { useEffect, useState } from "react";
import Login from "./components/login";
import Home from "./components/home";

import { retrieveServers } from "./helpers/serverHelpers";
import Buffalo from "./components/buffalo/buffalo";

const App = () => {

  const [servers, setServers] = useState({})

  useEffect(()=>{
    retrieveServers(setServers)
  },[])

  const [name, setName] = useState("")
  const [color, setColor] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)

  const [gameId, setGameId] = useState("")
  const [gameSelected, setGameSelected] = useState("")
  const [gameAddress, setGameAddress] = useState("")

  if (!loggedIn) {return(<Login setName={setName} setColor={setColor} setLoggedIn={setLoggedIn}/>)}

  if (!gameSelected) {return(<Home name={name} color={color} setLoggedIn={setLoggedIn} setGameSelected={setGameSelected} setGameId={setGameId} setGameAddress={setGameAddress} servers={servers}/>)}

  if (gameSelected == "buffalo" && gameId != "") {return(
    <Buffalo
      name={name}
      color={color}
      gameId={gameId}
      server={gameAddress}
      closeOut={()=>{setGameId("");setGameSelected("");}}
    />
  )}

}

export default App;
