import React from 'react'
import Style from '../styles/waiter.module.css'
import { useCart } from 'react-use-cart' //---Hook externo para manejo del estado del carro de compras---//
import { useState } from 'react'
import { getToken } from '../Providers/UserPetitions'
import { ordenPetition } from '../Providers/OrderPetitions'

export default function SummaryProducts() {
  
  //---Metodos de useCart---//
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

  //--- Funcion para creear nueva estrutura de objeto---//
  const creatObject =()=>{
    let total = localStorage.getItem('react-use-cart');
    let arrayItems = [];
    if (total !== null) {
      total = JSON.parse(total);
      
      total.items.forEach((item)=>{
        arrayItems.push(
          {
            "qty": item.quantity,
            "product": {
              "id": item.id,
              "name": item.name,
              "price": item.price,
              "image": item.image,
              "type": item.type,
              "dateEntry": item.dateEntry,
            }
          }
        )
      })
    }
    return arrayItems;
  }
  
  //--- Funcion para resolver peticion y crear orden---//
    const createOrder =() =>{
    const token = getToken();  
    const newObject = creatObject();
    
    ordenPetition(token, newObject, clients)
      .then((response)=> {
        return response;
      })
      .catch((error) => {
        return error;
      });
    emptyCart();
    
    //--- cambio de estado que limpia el input nombre cliente ---//    
    const input = document.getElementById('orderClient');
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
                className={Style.button_sendOrder}
                onClick={() => createOrder()}  
                >Enviar Pedido</button>
              </div>
            </div>
        </section>
      </div>
    </>
  )
}
