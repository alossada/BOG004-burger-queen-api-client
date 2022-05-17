import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
      <div>
        <h1>Hola, Bienvenido a Burger</h1>
        <p>
            <Link to={'login'}>INGRESAR</Link>
        </p>
      </div>
  )
}
