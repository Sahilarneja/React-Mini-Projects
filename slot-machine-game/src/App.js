import React from "react";

const SlotM=(props)=>{
  // let x='😊';
  // let y='😊';
  // let z='🎅';

  if(props.x===props.y && (props.y===props.z)){
    return (
      <>
        <div className="slot_inner">
          <h1> {props.x} {props.y} {props.z}</h1>
          <h1> This is Matching.</h1>
          <hr/>
        </div>
      </>
    );
  }else{
    return (
      <>
        <div className="slot_inner">
          <h1> {props.x} {props.y} {props.z}</h1>
          <h1> This is not Matching.</h1>
          <hr/>
        </div>
      </>
    );
  }
}

const App=()=>{
  return <>
    <h1 className="heading_style">
     🎰 Welcome to <span>Slot Machine Game</span> 🎰 
     </h1>
     <div className="card">
     <div className="slotmachine">
     <SlotM x='😊' y='😊' z='😊'/>
     <SlotM x='😊' y='😊' z='🎅'/>
     <SlotM x='🍓' y='🥭' z='🍌'/>
     <SlotM x='😂' y='😂' z='😂'/>

     </div>
     </div>
     

  </>
}

export default App;