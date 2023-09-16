import React, { useState } from 'react'
import Register from "../components/auth/register"
import Login from "../components/auth/login"

function Authentication() {
    const [login, setLogin] = useState(true);
    const changeAuth = () => {
        setLogin(!login)
    }
  return (
    <>
      {
        login? 
        <Login changeAuth = {changeAuth} />
        : 
        <Register changeAuth = {changeAuth} />
      }
    </>
  )
}

export default Authentication
