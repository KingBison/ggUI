import React, { useEffect, useState } from "react";
import Login from "./components/login";
import Home from "./components/home";

import { retrieveServers } from "./helpers/serverHelpers";

const App = () => {

  const [servers, setServers] = useState({})

  useEffect(()=>{
    retrieveServers(setServers)
  },[])

  const [name, setName] = useState("")
  const [color, setColor] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)

  const [gameSelected, setGameSelected] = useState(false)

  if (!loggedIn) {return(<Login setName={setName} setColor={setColor} setLoggedIn={setLoggedIn}/>)}

  if (!gameSelected) {return(<Home name={name} color={color} setLoggedIn={setLoggedIn} setGameSelected={setGameSelected} servers={servers}/>)}

  

}

export default App;
