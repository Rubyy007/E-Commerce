import React from 'react'
import {  Link } from 'react-router-dom'
import "./style.css"

export default function Register() {
  return (
    <div className='formcon'>

    <form className='formout'>
      <h2>Register</h2>       
      <input  placeholder='Username' type='text'/><br/>
      <input  placeholder='New Password' type='password'/><br/>
      <button>Register</button>
     <p>Account Already <Link to='/loginPage'>Exist</Link></p>
    </form>

    </div>
  )
}
