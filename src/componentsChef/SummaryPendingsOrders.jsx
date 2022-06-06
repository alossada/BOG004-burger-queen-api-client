import React from 'react'
import { useEffect, useState } from 'react'
import { getOrder } from '../Providers/OrderPetitions';
import { getToken } from '../Providers/UserPetitions'
import OrderStructure from './OrderStructure';
import Style from '../styles/chef.module.css'

export default function SummaryPendingsOrders() {
  const [order, setOrder] =useState([]);
  const token = getToken();
  
  const newOrder =() => {
    getOrder(token.accessToken)
      .then((response) => {
        setOrder(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(()=>{
    newOrder();
  },[token.accessToken, setOrder, order]);

  // // useEffect(() => {
  // //   newOrder();
  // //   console.log('Orden agregada')
  // //   console.log(order);
  // // },[order])
  
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
