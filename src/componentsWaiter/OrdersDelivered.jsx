import React from 'react'
import { useEffect, useState } from 'react'
import { getOrder,  } from '../Providers/OrderPetitions';
import { getToken } from '../Providers/UserPetitions'
import Style from '../styles/waiter.module.css'

export default function OrdersDelivered() {
  const [OrdersDelivered, setOrdersDelivered] =useState([]);
  const token = getToken();
  

  const newOrder =() => {
    getOrder(token.accessToken)
      .then((response) => {
        const orderDelivered = response.data.filter((orden)=> orden.status === 'delivered');
        setOrdersDelivered(orderDelivered)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(()=>{
    newOrder()
  },[]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      newOrder()
    },3000)
    return () => clearInterval(interval)
  },[]);
  
  return (
        <table className={Style.containerDelivered}>
            <thead className={Style.delivered_head}>
              <tr>
                <th>Cliente</th>
                <th>Hora Inicial</th>
                <th>Hora Entrega</th>                  
              </tr>
            </thead>
            <tbody>
              {
                OrdersDelivered.map((order)=>{
                    return(
                      <tr>
                        <th>{order.client}</th>                  
                        <th>{order.dateEntry}</th>
                        <th>{order.dateProcessed}</th>  
                      </tr> 
                    )
                })
              }
            </tbody>
        </table>

    // <div className={Style.containerCards}>

      
    //   {OrdersDelivered.map((order, index)=>{
    //     return(
    //       <div  key={index} >
    //         <table>
    //           <thead>
    //             <tr>
    //               <th>Cliente</th>
    //               <th>Hora Inicial</th>
    //               <th>Hora Entrega</th>                  
    //             </tr>
    //             <tr>
    //               <th>{order.client}</th>                  
    //               <th>{order.dateEntry}</th>
    //               <th>{order.dateProcessed}</th>  
    //             </tr>
    //           </thead>
    //         </table>         
    //       </div>
    //     )
    //   })}
    // </div>
  )
}
