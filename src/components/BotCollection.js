import React from "react";
import BotCard from "./BotCard";


function BotCollection({bots, handleClick, handleDelete}) {
  
  return (
    <div className="ui four column grid">
      <div className="row">        
        
        Collection of all bots
        <div className="" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '5px'}}>
        {bots.map((bot)=> <BotCard
        key={bot.id}
        bot={bot} 
        handleClick={handleClick}
        handleDelete={handleDelete}/>
  )}</div>
        
      </div>
    </div>
  );
}

export default BotCollection;
