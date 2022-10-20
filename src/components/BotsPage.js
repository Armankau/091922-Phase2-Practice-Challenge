import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage({bots, setBotArmy, botArmy, onDeleteItem, updateItem}) {
  //start here with your code for step one

  return (
    <div>
      <YourBotArmy bots={bots}/>
      <BotCollection bots={bots} setBotArmy={setBotArmy} 
      botArmy={botArmy} onDeleteItem={onDeleteItem}
      updateItem={updateItem}/>
    </div>
  )
}

export default BotsPage;
