import React from "react";
import BotCard from "./BotCard";
// import BotSpecs from "./BotSpecs";

function BotCollection({bots, handleClick, handleDelete}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">        
        {/*...and here..*/}
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