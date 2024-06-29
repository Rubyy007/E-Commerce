import React from 'react'
import {  Link } from 'react-router-dom'
import "./style.css"

export default function Login() {
  return (
    <div className='formcon'>

    <form className='formout'>
      <h2>Login</h2>
       
      <input placeholder='Username' type='text'/><br/>
      <input placeholder='Password' type='password'/><br/>
      <button>Login</button>
     <p> Click Here To <Link to='/regPage'>Register</Link></p>
    </form>

    </div>
  )
}
