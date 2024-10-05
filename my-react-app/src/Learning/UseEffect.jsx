import React, { useEffect, useState } from "react";

const UseEffect = () => {
   const [count, SetCount] = useState(0)
   const [city, SetCity] = useState('Delhi')

   function increment() {
    SetCount(count + 1)
   }

   function changeCity() {
    SetCity('Bhopal');
   }

   useEffect(() => {
    fetch('https://dummyjson.com/recipes').then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data)
    }).catch((err) => {
      console.log(err)
    })
   }, [city]);

  return (
    <>
     <button onClick={increment}>+</button>
     <p>{count}</p>
     <br />
     <br />
     <p>{city}</p>
     <button onClick={changeCity}>Change City</button>
    </>
  )
}

export default UseEffect;