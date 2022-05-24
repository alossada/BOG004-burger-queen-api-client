
import React from 'react'
import NavBar from '../components/Navbar.js'
import Style from '../styles/waiter.module.css'

export default function Waiter() {
  return (
    <>
      <div className={Style.container_waiter}>
        <NavBar text1='Tomar Pedidos' text2 = 'Pedidos Listos'/>
      </div>
    </>
  )
  
}
