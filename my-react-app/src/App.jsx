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


// import React from "react";
// import {useState} from 'react'

// const App = () => {
//   const [data, SetData] = useState(0);

//   // increment function
//   function increment() {
//     SetData(data +1)
//   }

//   function decrement() {
//     SetData(data - 1)
//   }

//   function reset() {
//     SetData(0)
//   }

//   function tenIncremet() {
//     SetData(data + 10)
//   }

//   return (
//     <>
//      <span>{ data }</span>
//      <br />
//      <button onClick={increment}> + </button>
//      <button onClick={tenIncremet}> + 10</button>
//      <button onClick={decrement}>-</button>
//      <button onClick={reset}>Reset</button>
//     </>
//   )

// }

// export default App;

// import React, { useState } from "react";

// const App = () => {
//     const [color, setColor] = useState('green');
//     const changeColor = () => {
//       setColor('red');
//     }

//     return (
//       <>
//       <div style={{backgoundColor: color, height: '200px'}}></div>
//        <div>This is div</div>
//        <button onClick={changeColor}>Change</button>
//       </>
//     )
// }

// import React, { useState } from 'react';

// const App = () => {
//   const [time, setTime] = useState();

  // setInterval({
  //   let date = new Date().toLocaleDateString;
  //   useState(date)
  // })


//     setInterval(() => {
//       let date = new Date().toLocalString();
//       let hh = date.getHours(),
//           mm = date.getMinutes(),
//           ss = date.getSeconds()
//       useState([hh, mm, ss])
//     }, 1000)

//   return (
//     <>
//      <div>{time}</div>
//     </>
//   )
// }

// export default App; 


// import React from 'react';
// import React { useState } from 'react';

// const App = () => {
//     const [data, SetData] = useState();

//     function textChange(e) {
//       SetData(e.target.value);
//     }
//   return (
//     <>
//     <h1>{data}</h1>
//     <input type="text" onChange={textChange} placeholder='Enter Text'/>
//     </>
//   )
// }

// export default App;