
import React from 'react'
import NavBar from '../componentsWaiter/Navbar.js'
import Style from '../styles/waiter.module.css'

export default function Waiter() {
  return (
    <>
      <div className={Style.container_waiter}>
        <NavBar text1='Pedidos' text2 = 'Listos' text3 = 'Entregados'/>
      </div>
    </>
  )
  
}
