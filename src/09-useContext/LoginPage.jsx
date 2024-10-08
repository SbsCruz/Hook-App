import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {

  const { user, setUser } = useContext(UserContext)
  return (
    <>
      <h1>Login Page</h1>
      <hr />
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>


      <button className='btn btn-primary'
        onClick={() => setUser({
          id: 123,
          name: "Sebas Cruz",
          email: "sebas@gmail.com",
        })}>
        Establecer User
      </button>
    </>
  )
}
