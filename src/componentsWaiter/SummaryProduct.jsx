import React from 'react'
import Style from '../styles/waiter.module.css'
import { useCart } from 'react-use-cart'
import { useState } from 'react'
import { getToken } from '../Providers/UserPetitions'
import { ordenPetition } from '../Providers/OrderPetitions'
// import'../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css' 
export default function SummaryProducts() {
  const {
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const [clients, setClients] = useState('');

  const createOrder =() =>{
    const token = getToken();    
    ordenPetition(token, items, clients)
      .then((response)=> {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    emptyCart();
    const input = document.getElementById('orderClient');
    console.log('input de orden', input);
    const e = {
      target: input
    }
    e.target.value = '';
    setClients(e.target.value)
  };

  return (
    <>
      <div className={Style.container_takeOrder}>
        <h2 style={{color:'#FE8D06', textAlign:'center', fontSize:'1.5rem'}}>Tomando Pedidos</h2>
        <section className={Style.container_total_products}>
            <div>      
              <label>Nombre del Cliente</label>
              <input 
                id = 'orderClient'
                type='text'
                name='client'
                className='client'              
                value={clients}   
                onChange={event => setClients(event.target.value)}           
              ></input>              
              <h5>Productos ({totalUniqueItems}) Total Productos: ({totalItems})</h5>
              <table>
                <tbody>
                  {items.map((item,index)=>{
                    return(
                      <tr key={index.toString()} className={Style.conatiner_name_price_quantity}>
                          <td>
                            <img src={item.image} style={{width:'5rem'}} alt="" />
                          </td>
                          <td>{item.name}</td>
                          <td>${item.price}</td>
                          <td>({item.quantity})</td>
                        <td>
                          <button 
                            className={Style.button_rest}
                            onClick={()=>{updateItemQuantity(item.id, item.quantity - 1)}}
                            >➖</button>
                          <button 
                            className={Style.button_plus}
                            onClick={()=>{updateItemQuantity(item.id, item.quantity + 1)}}
                            >➕</button>
                          <button 
                            className={Style.button_remove}
                            onClick={()=>{removeItem(item.id)}}
                          >🗑️</button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div>
              <h3>Total: $ {cartTotal}</h3>
            </div>
            <div className={Style.container_buttons}>
              <div>
                <button
                className={Style.button_cancelOrder}
                onClick={()=>{emptyCart()}}
                >Cancelar pedido</button>
              </div>
              <div>
                <button type= 'submit'
                style={{background:'#28a745'}}
                onClick={() => createOrder()}  
                >Enviar Pedido</button>
              </div>
            </div>
        </section>
      </div>
    </>
  )
}
