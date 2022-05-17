import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <p>
          <Link to={'waiter'}>Waiter</Link>
      </p>
      <p>
        <Link to={'chef'}>Chef</Link>
      </p>
    </div>
  )
}