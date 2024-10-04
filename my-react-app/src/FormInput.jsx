import React, { useState } from "react";

const FormInput = () => {
  const [data, SetData] = useState()

  const textInput = (e) => {
      SetData(e.target.value)
  }
   
  return (
    <>
      <input type="text" placeholder="Enter Text" onChange={textInput}/>
      <h1>{data}</h1>
    </>
  )
}

export default FormInput;