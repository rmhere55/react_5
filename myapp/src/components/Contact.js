import React, { useState } from 'react'

const Contact = () => {
  const  [name, setName] =   useState("INItaily")
  return (
    <div>
      <form>
        <input type='text' placeholder='Name' onChange={(e)=>(
          setName(e.target.value)

  )}
  value={name}/>
        <input type='email' placeholder='email'/>
        <button onClick={()=> console.log(name)}>submit</button>
        <p>{name}</p>
      </form>
    </div>
  )
}

export default Contact