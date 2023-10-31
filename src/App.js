import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/login';
import GameSelector from './components/gameSelector';
import Buffalo from './components/buffalo';



function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [name, setName] = useState("")
  const [selectedGame, setSelectedGame] = useState("")

  useEffect(()=>{
    if (sessionStorage.name) {
      setLoggedIn(true)
      setName(sessionStorage.name)
    }
  },[])

  const determineComponent = () => {

    if (!loggedIn) {
      return <Login 
          setLoggedIn={setLoggedIn} 
          setName={setName}
          name = {name}
        />
    }
    if (selectedGame === "") {
      return <GameSelector
        setSelectedGame={setSelectedGame}
        name={name}
        setName={setName}
        setLoggedIn={setLoggedIn}
      />
    }
    if (selectedGame === 'buffalo') {
      return <Buffalo
        setSelectedGame={setSelectedGame}
        name={name}
      />
    }
  }

  return (
    <>
      {determineComponent()}
    </>
  );
}

export default App;
