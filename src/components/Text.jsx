import React, { useState } from 'react'

export default function Text(props) {
 
 const[a, setA] = useState("");
 
 
const handleUp= ()=> {
console.log("Uppercase" + a) 
let b = a.toUpperCase();
setA(b)
}
const handleLow= ()=> {
  console.log("Uppercase" + a) 
  let b = a.toLowerCase();
  setA(b)
  }

const handleClear= ()=> {
setA("")
}

const handleChange =(e) =>{
setA(e.target.value)
}    
 
    return (
    <div>
       <div className='textarea'>
    
          <h2>{props.txt}</h2> 
          <textarea className='text' value={a} onChange={handleChange} placeholder ="Enter your text here"  />
    
       </div>
     
      <button className='btn1' onClick={handleUp}>Uppercase</button> 
      <button className='btn2 ' onClick={handleLow}>Lowercase</button> 
      <button className='btn3 ' onClick={handleClear}>Clear</button> 

     
     
     
       <div className='Preview'>
          <h2>Your summary</h2>
          <p>{a.split(" ").length} words and {a.length} characters</p> 
          <h3>Time to read</h3>
          <p>{0.008 * a.split(" ").length} Minutes </p>
          
       </div>
     
     
     
     </div>
  )
} 
