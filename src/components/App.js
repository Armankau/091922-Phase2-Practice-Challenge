import React, { useEffect, useState } from "react";
import BotsPage from "./BotsPage";

function App() {
  const[bots, setBots] = useState([])
  const [botArmy, setBotArmy] = useState([])
  const API = `http://localhost:8002/bots`

  console.log(botArmy)
  function handleDeletedItem(deletedItem){
    const updateBot = bots.filter((bot) => bot.id !== deletedItem.id)
    setBots(updateBot)
  }

  function updateItem(bot){
    const updateBots = bots.filter((oldBot) => oldBot.id !== bot.id)
    setBotArmy(updateBots)
  }

  useEffect(() =>
  {
    fetch(API)
    .then((resp) => resp.json())
    .then(setBots)
  }, [])

  return (
    <div className="App">
      <BotsPage 
      bots={bots} botArmy={botArmy} setBotArmy={setBotArmy} 
      onDeleteItem={handleDeletedItem}
      updateItem ={updateItem}
      />
    </div>
  );
}

export default App;
