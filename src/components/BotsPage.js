import React,{useEffect, useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  
  const [bots, setBots] = useState([]);

  
  useEffect(()=>{
    fetch(`https://json-server-vercel-rho-ebon.vercel.app/bots`)
    .then(res => res.json())
    .then(data => {
      setBots(data)})

  },[]);
  function castBot(id,cast=true){
    setBots(bots.map(bot => id === bot.id ? {...bot, isCast:cast}  : bot))
  } 

function deleteBot(id) {
  setBots(bots.filter(bot => id !== bot.id))
}

  return (
    <div>
      <YourBotArmy bots={bots.filter(bot => bot.isCast)} handleClick={(id)=>castBot(id,false)} handleDelete={deleteBot}/>
      <BotCollection bots={bots} handleClick={castBot} handleDelete={deleteBot}/>
    </div>
  )
}

export default BotsPage;
