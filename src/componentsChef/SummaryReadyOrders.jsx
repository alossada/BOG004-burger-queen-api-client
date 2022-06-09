import React from 'react'
import { useState, useEffect } from 'react';
import { getToken } from '../Providers/UserPetitions';
import { getOrder } from '../Providers/OrderPetitions';
import OrderState from './OrderState';
import Style from '../styles/chef.module.css'

export default function SummaryReadyOrders() {

  const [order, setOrder] =useState([]);
  const token = getToken();

  const orderReady =() => {
    getOrder(token.accessToken)
      .then((response) => {
        const orderDelivering= response.data.filter((orden)=> orden.status === 'delivering');
        setOrder(orderDelivering)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(()=>{
    orderReady()
  },[]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      orderReady()
    },3000)
    return () => clearInterval(interval)
  },[]);
  
  return (
    <>
      <div>
        <h2 style={{color:'#FE8D06'}}>Preparado</h2>
      </div>
      <div className={Style.containerCards}>
      {order.map((orders, index)=>{
          const totalTime = Math.round(
            Math.abs(new Date(orders.dateProcessed) - new Date(orders.dateEntry)) /
              (1000 * 60)
          );
          console.log('TOTALTIME:', totalTime)
          console.log('ORDERS:', orders)
        return(
          <div  key={index}>
            <p>{totalTime}</p>
            <OrderState
              totalOrders = {orders} 
            />
          </div>
        )
      })}
    </div>

    </>
  )
}
