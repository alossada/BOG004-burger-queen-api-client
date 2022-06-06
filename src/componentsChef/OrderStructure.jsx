import React from 'react'
import Items from './Items'
import Style from '../styles/chef.module.css'

export default function OrderStructure({totalOrders}) {
  return (
    <div>
      <div className={Style.containerOrders}>
        <div className={Style.nameDate}>
          <p>{totalOrders.client}</p>
          <p>{totalOrders.dataEntry}</p>
        </div>
        <h5>Pedido:</h5>
          <Items 
            products = {totalOrders.products}
          />
          <button className={Style.btnListo} type='submit'>Listo</button>          
      </div>
    </div>
  )
}
