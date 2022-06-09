import React from 'react'
import { useEffect, useState } from 'react'
import { getOrder, orderStatusDelivered } from '../Providers/OrderPetitions';
import { getToken } from '../Providers/UserPetitions'
import Style from '../styles/chef.module.css'
import OrderState from '../componentsChef/OrderState';

export default function OrdenReady() {
  const [orders, setOrders] =useState([]);
  const token = getToken();



  const OrderDelivering =() => {
    getOrder(token.accessToken)
      .then((response) => {
        const orderPending = response.data.filter((ordens)=> ordens.status === 'delivering');
        setOrders(orderPending)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(()=>{
    OrderDelivering()
  },[]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      OrderDelivering()
    },3000)
    return () => clearInterval(interval)
  },[]);

  
  return (
    <>
      <div className={Style.containerCards}>
          {orders.map((order, index)=>{
            
          return(
            <div  key={index} >
              <OrderState
                totalOrders = {order} 
              />
            <button
            type='button'
            id='button'
            className={Style.btnListo}
            onClick={() =>orderStatusDelivered(order.id, token.accessToken)}
            >Entregar</button>
            </div>
          )
        })}
      </div>
    </>
  )
}
