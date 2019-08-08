import React from 'react'

import logo from '../assets/logo.svg'
import './Login.css'

function Login () {
  return (
    <div className='login-container'>
      <form>
        <img src={logo} alt='Tindev' />
        <input placeholder='Digite seu usuário no Github' />
        <button type='submi'>Entrar</button>
      </form>
    </div>
  )
}

export default Login