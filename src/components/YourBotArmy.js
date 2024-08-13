import React from "react";
import BotCard from "./BotCard";


function YourBotArmy({bots,handleClick,handleDelete}) {

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row" style={{padding: '5px', border: '1px solid #000', borderRadius: '10px', backgroundColor: '#E6E6FA', display: 'flex'}}>
          Your Bot Army
          {bots.map((bot)=><BotCard
          key={bot.id}
          bot={bot}
          handleClick ={handleClick}
          handleDelete ={handleDelete}
          />)}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
