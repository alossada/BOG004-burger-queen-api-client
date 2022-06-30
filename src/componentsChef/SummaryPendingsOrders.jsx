import React from 'react'
import { useEffect, useState } from 'react'
import { getOrder } from '../Providers/OrderPetitions';
import { getToken } from '../Providers/UserPetitions'
import OrderStructure from './OrderStructure';
import Style from '../styles/chef.module.css'

export default function SummaryPendingsOrders() {
  const [order, setOrder] =useState([]);
  const token = getToken();

  const orderPending =() => {
    getOrder(token.accessToken)
      .then((response) => {
        const orderPending = response.data.filter((orden)=> orden.status === 'pending');
        setOrder(orderPending)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(()=>{
    orderPending()
  },[]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      orderPending()
    },3000)
    return () => clearInterval(interval)
  },[]);
  
  return (
    <div className={Style.containerCards}>
      {order.map((orders, index)=>{
        return(
          <div  key={index} >
            <OrderStructure
              totalOrders = {orders} 
            />
          </div>
        )
      })}
    </div>
  )
}
