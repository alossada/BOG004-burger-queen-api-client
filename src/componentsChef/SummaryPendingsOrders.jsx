import React from 'react'
import { useEffect, useState } from 'react'
import { getOrder } from '../Providers/OrderPetitions';
import { getToken } from '../Providers/UserPetitions'
import OrderStructure from './OrderStructure';
import Style from '../styles/chef.module.css'

export default function SummaryPendingsOrders() {
  const [order, setOrder] =useState([]);
  const token = getToken();
  useEffect(()=>{
    getOrder(token.accessToken)
      .then((response) => {
        setOrder(response.data)
      })
      .catch(() => {});
  },[token.accessToken,setOrder]);
  console.log('soy Order',order)
  return (
    <div className={Style.containerCards}>
      {order.map((orders, index)=>{
        return(
          <div  key={index} >
            <OrderStructure
              date = {orders.dataEntry}
              cliente = {orders.client}
              items = {orders} 
            />
          </div>
        )
      })}
    </div>
  )
}
