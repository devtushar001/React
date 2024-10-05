import React from "react";
import { useState  } from "react";

const FormState = () => {
  let [input,SetInput]=useState({
    name:"",
    password:""

  })
  function done(e){
       let {name,value}=    e.target
    SetInput({...input,[name]:value})
    console.log(input,"kya mil rha");
    
  }
  return (
    <div>
  <fieldset>   
      <form> 
        <input  type='text' name='name'  value= {input.name} onChange={done}  placeholder='Enter your name'/>
        <br></br>
        <br></br>
        <input  type='password'  name='password' value={input.pass} onChange={done} placeholder='Enter your pass'/>
        <br></br>
        <br></br>
       <button> save</button>
      </form>
      </fieldset>
    </div>
  )
}

export default FormState;