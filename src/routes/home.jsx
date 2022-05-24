import React from 'react'
import { Link } from 'react-router-dom'
import '../home.css'
import image from '../assets/logo.png' 

export default function Home() {
  return (
      <div className= 'container-home'>
        <header className='home-header'>
          <img className='home-header-logo' src={image} alt="logotipo" />
          <p className='home-header-button'>
              <Link to={'login'} style={{color: "#000",  fontSize: 16, fontWeight:'bold'}}>INGRESAR</Link>
          </p>
        </header>
      </div>
  )
}
