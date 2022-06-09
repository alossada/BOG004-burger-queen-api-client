import React from 'react'
import Items from './Items'
import Style from '../styles/chef.module.css'
import { orderStatus } from '../Providers/OrderPetitions'
import { getToken  } from '../Providers/UserPetitions'


export default function OrderStructure({totalOrders}) {

const token = getToken();

const newStatus = (orderId) => {
    orderStatus(orderId, token.accessToken)
    .then((response)=>{
      return response
    })
    .catch((error) => {
      return error
    })
  };

  return (
    <div>
      <div className={Style.containerOrders}>
        <div className={Style.nameDate}>
          <p>{totalOrders.client}</p>
          <p>{totalOrders.dateEntry}</p>
        </div>
        <h5>Pedido:</h5>
          <Items 
            products = {totalOrders.products}
            qty = {totalOrders.quantity}
          />
          <button
            type='button'
            id='button'
            className={Style.btnListo}
            onClick={() =>newStatus(totalOrders.id)}
          >Listo</button>
      </div>
    </div>
  )
}
