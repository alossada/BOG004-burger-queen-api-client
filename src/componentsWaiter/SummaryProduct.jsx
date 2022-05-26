import React from 'react'
import Style from '../styles/waiter.module.css'
import { useCart } from 'react-use-cart'
// import'../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css' 
export default function SummaryProducts() {
  const {
    // isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return (
    <>
      <div className={Style.container_takeOrder}>
        <h2 style={{color:'#FE8D06', textAlign:'center', fontSize:'1.5rem'}}>Tomando Pedidos</h2>
      <section className={Style.container_total_products}>
        <div>
          <h5>Productos ({totalUniqueItems}) Total Productos: ({totalItems})</h5>
          <table>
            <tbody>
              {items.map((item,index)=>{
                return(
                  <tr key={index}>
                    <td>
                      <img src={item.image} style={{width:'4rem'}} alt="" />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
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
                        className='btn btn-dark ms-1'
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
        <div>
          <button 
          onClick={()=>{emptyCart()}}
          >Cancelar pedido</button>
        </div>
        {/* <div className="col-auto">
          <button 
          className='btn btn-primary'
          onClick={()=>{isEmpty()}}   
          >Enviar</button>
        </div> */}
      </section>

      </div>
    </>
  )
}
