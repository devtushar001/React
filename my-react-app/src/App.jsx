// import React, { useState } from "react"
// import Home from "./Home.jsx";
// // import { useState } from "react";

// const App = () => {
//   const user = 'rarka';
//   // const count = 0;
//   let [data, SetData] = useState(0);
//   return (
//   <> 
//    Hello this is 
//   <Home data = {user}/>
//   <span>{data}</span>
//   <button onClick={counter}>+</button>
//   </>
//   )
// }

// function counter () {
//   SetData(data + 1)
// }

// export default App;


import React from "react";
import {useState} from 'react'

const App = () => {
  const [data, SetData] = useState(0);

  // increment function
  function increment() {
    SetData(data +1)
  }

  function decrement() {
    SetData(data - 1)
  }

  function reset() {
    SetData(0)
  }

  function tenIncremet() {
    useState(data + 10)
  }

  return (
    <>
     <span>{ data }</span>
     <br />
     <button onClick={increment}> + </button>
     <button onClick={tenIncremet}> + 10</button>
     <button onClick={decrement}>-</button>
     <button onClick={reset}>Reset</button>
    </>
  )

}

export default App;